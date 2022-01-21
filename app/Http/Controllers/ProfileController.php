<?php

namespace App\Http\Controllers;

use Exception;
use DateTime;
use App\Models\Athletes;
use App\Models\AthleteCalendar;
use App\Models\Notifications;
use App\Models\Friends;
use App\Models\User;
use DateInterval;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProfileController extends Controller
{
    public function search(Request $request){

        $user = auth()->user();
        $keyword = $request->get('searchTxt', '');
        $users = array();
        $programs = array();
        if($keyword) {
            $users = DB::table("users")->select('id', 'name')->where('name', 'like', '%' . $keyword . '%')->where('id', '<>', $user->id)->get();
            $programs = DB::table("programs")->select('user', 'name')->where('user', '<>', $user->id)->where('name', 'like', '%' . $keyword . '%')->where('is_published', 1)->get();
        }

        return response()->json([
            "success" => 0,
            "users" => $users,
            "programs" => $programs
        ]);
    }

    public function requestFriend(Request $request){

        $user = auth()->user();
        if($request->friend_id) {
            $friend_id = $request->friend_id;
            $friend = new Friends();
            $friend->from_user_id = $user->id;
            $friend->to_user_id = $friend_id;
            $friend->is_allow = 1;
            $friend->save();

            $notification = new Notifications();
            $notification->user_id = $friend_id;
            $notification->type = 1;
            $notification->content = $user->name." sent a friend request to you.";
            $notification->save();
        }

        return response()->json([
            "success" => 1
        ]);
    }

    // SA api
    public function getCalendarWorkoutLogsWithBodypartName(Request $request) {
        $user_id = $request->get('user_id', auth()->user()->id);
        $logs = DB::select("SELECT t.id, t1.user AS designer_id, t2.id AS trainer_id, t2.name AS trainer_name, t.program_id, t1.name AS program_name, t1.category, t.start_date, t.weeks, t.data, t.preinterview_id, t.postinterview_id
                            FROM athlete_calendar t
                            LEFT JOIN programs t1 ON t.program_id = t1.id
                            LEFT JOIN users t2 ON t.trainer = t2.id
                            WHERE t.user = ".$user_id);

        for ($i = 0; $i < count($logs); $i++) {
            $log = $logs[$i];
            $weeks_data = json_decode($log->data);
            for ($j = 0; $j < count($weeks_data); $j++) {
                $week = $weeks_data[$j];
                for ($k = 0; $k < count($week); $k++) {
                    $plan = $week[$k];
                    if ($plan == 'null' || $plan == '') continue;

                    $bodyparts = DB::table('athlete_plan')->select('body_parts', 'completed')->where('athlete_plan.id', $plan)->get();
                    $testSessions = DB::table('athlete_workout_details')->select('id')->where('athlete_workout_details.plan', $plan)
                                                                                    ->where('athlete_workout_details.method', 3)->get();
                    $summaries = DB::table('athlete_workout_summary')
                                    ->select('load_data', 'sleep_level', 'energy_level', 'stress_level', 'injuries', 'notes')
                                    ->where('plan_id', $plan)
                                    ->get();
                    if (count($bodyparts)) {
                        $data = (object)[];
                        $data->plan = $plan;
                        $data->body_parts = $bodyparts[0]->body_parts;
                        $data->completed = $bodyparts[0]->completed;
                        $data->test_session = count($testSessions) > 0;
                        $data->summary = count($summaries) == 0 ? null : $summaries[0];
                        $weeks_data[$j][$k] = $data;
                    }
                }
            }

            $logs[$i]->weeks_data = $weeks_data;

            // get interview data
            $interviews = DB::select("  SELECT t.waist, t.hip, t.weight, t.injury, 'pre' AS type FROM interview t WHERE t.calendar_id = {$logs[$i]->id} AND t.id = {$logs[$i]->preinterview_id}
                                    UNION ALL
                                        SELECT t.waist, t.hip, t.weight, t.injury, 'post' AS type FROM interview t WHERE t.calendar_id = {$logs[$i]->id} AND t.id = {$logs[$i]->postinterview_id}");

            $logs[$i]->interviews = $interviews;

            // get testing data
            $tests = DB::select("SELECT t.*, t1.name AS exercise_name
                                FROM (
                                    SELECT exercise AS exercise_id, pre_rm, pre_level, post_rm, post_level, increased FROM athlete_workout_tests WHERE calendar = {$log->id}
                                ) t, exercises t1 WHERE t.exercise_id = t1.id
                                ORDER BY exercise_id ASC ");
            $logs[$i]->tests = $tests;
        }
        return response()->json([
            "success" => true,
            "logs" => $logs
        ]);
    }

    // SA api
    public function getTrainers(Request $request) {
        // $search_name = $request->search_name;

        $trainers = DB::select("SELECT id, name FROM users WHERE role = 'PersonalTrainer' ");
        // $trainers = DB::select("SELECT id, name FROM users WHERE role = 'PersonalTrainer' AND name LIKE '%{$search_name}%'");
        return response()->json([
            "success" => false,
            "trainers" => $trainers
        ]);
    }

    // SA api
    public function setTrainer(Request $request) {
        $user = auth()->user();

        $calendar = AthleteCalendar::find($request->calendar_id);
        if (!isset($calendar->id)) {
            return response()->json([
                "success" => false
            ]);
        }

        $calendar->trainer = $request->trainer;
        $calendar->save();
        return response()->json([
            "success" => true
        ]);
    }

    // SA api
    public function removeTrainer(Request $request) {
        $user = auth()->user();

        $calendar = AthleteCalendar::find($request->calendar_id);
        if (!isset($calendar->id)) {
            return response()->json([
                "success" => false
            ]);
        }

        $calendar->trainer = null;
        $calendar->save();
        return response()->json([
            "success" => true
        ]);
    }

    // SA api
    public function moveCalendar(Request $request) {
        $user = auth()->user();
        $calendar_id = $request->calendar_id;
        $direction = $request->direction;

        $diff1Week = new DateInterval('P7D');
        $calendar = AthleteCalendar::find($calendar_id);

        $result = array();
        if ($direction == 'prev') {
            $startDate = new DateTime($calendar->start_date);
            $startDate->sub($diff1Week);
            $calendar->start_date = $startDate->format('Y-m-d');
            $calendar->save();

            $item = ['id'=>$calendar->id, 'start_date'=>$calendar->start_date];
            array_push($result, $item);

        } else {
            $query = "SELECT id, start_date FROM athlete_calendar WHERE start_date >= '{$calendar->start_date}' AND user = {$user->id}";
            $calendars = DB::select($query);
            foreach ($calendars as $element) {
                $startDate = new DateTime($element->start_date);
                $startDate->add($diff1Week);
                $strStartDate = $startDate->format('Y-m-d');
                DB::statement("UPDATE athlete_calendar SET start_date = '{$strStartDate}' WHERE id = {$element->id}");

                $item = ['id'=>$element->id, 'start_date'=>$strStartDate];
                array_push($result, $item);
            }
        }

        return response()->json([
            "success" => true,
            "result" => $result
        ]);
    }

    // PD api
    public function getCalendarWorkoutLogs(Request $request) {
        $user = auth()->user();
        $logs = DB::select("SELECT t.id, t1.user as designer_id, t.program_id, t1.name AS program_name, t.start_date, t.weeks, t.preinterview_id, t.postinterview_id
                            FROM athlete_calendar t
                            LEFT JOIN programs t1 ON t.program_id = t1.id
                            WHERE t.user = ".$user->id);

        return response()->json([
            "success" => true,
            "logs" => $logs
        ]);
    }

    // save athlete plan with progression plan and save athlete workout and athlete workout detail with progression workout and progression workout detail
    public function saveAthletePlanWithPlan($planId, $user_id) {
        if ($planId == null || $planId == '')
            return $planId;

        // insert athlete plan
        DB::statement("INSERT INTO athlete_plan(body_parts, user, program_id) SELECT body_parts, {$user_id}, program_id FROM progression_plan WHERE id = {$planId}");
        $insertedPlanId = DB::getPdo()->lastInsertId();

        // insert athlete workout
        $progressionWorkouts = DB::select("SELECT id, exercise, program_id FROM progression_workout WHERE plan = {$planId}");
        foreach ($progressionWorkouts as $workout) {
            DB::statement("INSERT INTO athlete_workout(exercise, plan, user, program_id) VALUE({$workout->exercise}, {$insertedPlanId}, {$user_id}, {$workout->program_id})");
            $insertedWorkoutId = DB::getPdo()->lastInsertId();

            // insert athlete workout detail
            DB::statement("INSERT INTO athlete_workout_details(plan, workout, user, reps, rtf, intensity, method, tempo, rest)
                                    SELECT {$insertedPlanId}, {$insertedWorkoutId} AS workout, {$user_id}, t.reps, t.rtf, t.rm AS intensity, t.method, t.tempo, t.rest
                                    FROM progression_workout_details t, progression_workout t1
                                    WHERE t.workout = t1.id AND t1.plan = {$planId} AND t1.id = {$workout->id}");
        }


        return $insertedPlanId;
    }

    public function addToAthleteCalendar(Request $request) {
        $user = auth()->user();

        $designer_id = $request['designer_id'];
            if ($designer_id == 0)  $designer_id = $user->id;

        $program_id = $request['program_id'];
        $start_date = $request['start_date'];
        $weeks = $request['weeks'];

        $success = true;
        try {
            // first, add detailed data to the athlete workouts
            $weeksData = array();
            $prePlans = "";
            $postPlans = "";
            $calendar = DB::table('progression_calendar')->select('data')->where('user', $designer_id)->where('program_id', $program_id)->get();

            $weekIndex = 1;
            foreach ($calendar as $week) {
                $weekData = json_decode($week->data);
                $i = 0;
                foreach ($weekData as $planId) {
                    $insertedId = $this->saveAthletePlanWithPlan($planId, $user->id);
                    $weekData[$i] = $insertedId;

                    if ($insertedId != null) {
                        if ($weekIndex == 1) {
                            $prePlans .= empty($prePlans) ? "" : ",";
                            $prePlans .= $insertedId;

                        } else if ($weekIndex == count($calendar)) {
                            $postPlans .= empty($postPlans) ? "" : ",";
                            $postPlans .= $insertedId;
                        }
                    }
                    $i++;
                }
                $weekIndex++;
                array_push($weeksData, $weekData);
            }

            // second, insert athlete calendar
            DB::table('athlete_calendar')->insert([
                'user' => $user->id,
                'program_id' => $program_id,
                'start_date' => $start_date,
                'weeks' => count($weeksData),
                'data' => json_encode($weeksData),
            ]);

            $calendarId = DB::getPdo()->lastInsertId();

            // last, insert test datas
            $athleteInfo = $user->getPersonInfo();
            $gender = $athleteInfo->gender;
            $birth = $athleteInfo->birth;
            $height = explode("-", $athleteInfo->height)[0];
            $muscle_type = $athleteInfo->muscle_type;

            $birthYear = explode("/", $birth)[2];
            $startYear = explode("-", $start_date)[0];
            $age = $startYear - $birthYear;

            // insert test datas
            $testInsertQuery = "INSERT INTO athlete_workout_tests(calendar, exercise, user, gender, age, height, muscle_type)
                                    SELECT {$calendarId} as calendar, t1.exercise, t.user, '{$gender}' as gender,
                                            {$age} as age, {$height} as height, '{$muscle_type}' as muscle_type
                                    FROM athlete_workout_details t, athlete_workout t1 WHERE t.workout = t1.id AND t.method = '3' AND t.plan IN ({$prePlans}) ";

            DB::statement($testInsertQuery);

        } catch (Exception $e) {
            $success = false;
        }

        return response()->json([
            "success" => $success
        ]);
    }

    public function getWorkouts(Request $request) {
        $plan_id = $request->plan_id;
        $exercises = DB::select("SELECT t4.name AS bodypart_name, t2.name as exercise_name, t.reps, t.rtf, t.intensity, t.rm, t.target_load, t.method, t.tempo, t.rest, t1.id AS workout_id
                                FROM athlete_workout_details t, athlete_workout t1, exercises t2, exercises_bodypart t3, body_parts t4
                                WHERE t.workout = t1.id AND t1.exercise = t2.id AND t1.plan = {$plan_id} AND t2.id = t3.exercise_id AND t3.bodypart_id = t4.id
                                ORDER BY workout_id ASC");

        $bodypartNames = array();
        foreach ($exercises as $exercise) {
            if (array_search($exercise->bodypart_name, $bodypartNames) === false) {
                array_push($bodypartNames, $exercise->bodypart_name);
            }
        }

        $result = array();
        $synthesis_result = array();

        /*********************** ********************/
        $subResult = (object)[];
        $subExercises = array();
        $preWorkoutId = 0;
        $preBodyPart = "";
        $setIndex = 1;
        $sameExerciseIndex = 0;
        foreach ($exercises as $exercise) {
            if ($exercise->bodypart_name != $preBodyPart) {
                $subResult = (object)[];
                $subResult->bodypart_name = $exercise->bodypart_name;

                $subExercises = array();
                $exercise->set = 1;
                $exercise->set_count = 1;
                array_push($subExercises, $exercise);
                $subResult->exercises = $subExercises;

                array_push($result, $subResult);

                $setIndex = 1;
                $sameExerciseIndex = 0;

            } else {
                $i = count($result) - 1;

                if ($preWorkoutId == $exercise->workout_id) {
                    $setIndex += 1;
                    $exercise->set = $setIndex;
                    $result[$i]->exercises[$sameExerciseIndex]->set_count = $setIndex;

                } else {
                    $exercise->set = 1;
                    $setIndex = 1;
                    $exercise->set_count = 1;
                    $sameExerciseIndex = count($result[$i]->exercises);
                }
                array_push($result[$i]->exercises, $exercise);
            }

            $preWorkoutId = $exercise->workout_id;
            $preBodyPart = $exercise->bodypart_name;
        }

        // get systhesis data
        foreach ($bodypartNames as $bodypartName) {
            $totalReps = 0;
            $totalRm = 0;
            $totalLoad = 0;
            $exerciseCount = 0;

            foreach ($exercises as $exercise) {
                if ($exercise->bodypart_name == $bodypartName) {
                    $totalReps += $exercise->reps;
                    $totalRm += $exercise->intensity;
                    $totalLoad += ($exercise->reps * $exercise->intensity);

                    if ($exercise->intensity > 0)
                        $exerciseCount++;
                }
            }

            $subSynthe = (object)[];
            $subSynthe->bodypart_name = $bodypartName;
            $subSynthe->totalReps = $totalReps;
            $subSynthe->avgRm = $totalRm / $exerciseCount;
            $subSynthe->totalLoad = $totalLoad;
            array_push($synthesis_result, $subSynthe);
        }
        /*********************** ********************/

        // foreach ($bodypartNames as $bodypartName) {
        //     $totalReps = 0;
        //     $totalRm = 0;
        //     $totalLoad = 0;

        //     $subResult = (object)[];
        //     $subResult->bodypart_name = $bodypartName;
        //     $subExercises = array();
        //     $preExerciseName = "";
        //     $setIndex = 1;
        //     $sameExerciseIndex = 0;
        //     foreach ($exercises as $exercise) {
        //         if ($exercise->bodypart_name == $bodypartName) {
        //             if ($preExerciseName == $exercise->exercise_name) {
        //                 $setIndex += 1;
        //                 $exercise->set = $setIndex;
        //                 $subExercises[$sameExerciseIndex]->set_count = $setIndex;
        //             } else {
        //                 $exercise->set = 1;
        //                 $setIndex = 1;
        //                 $exercise->set_count = 1;
        //                 $sameExerciseIndex = count($subExercises);
        //             }

        //             array_push($subExercises, $exercise);

        //             $totalReps += $exercise->reps;
        //             $totalRm += $exercise->rm;
        //             $totalLoad += ($exercise->reps * $exercise->rm);

        //             $preExerciseName = $exercise->exercise_name;

        //         }
        //     }
        //     $subResult->exercises = $subExercises;

        //     array_push($result, $subResult);

        //     $subSynthe = (object)[];
        //     $subSynthe->bodypart_name = $bodypartName;
        //     $subSynthe->totalReps = $totalReps;
        //     $subSynthe->avgRm = $totalRm / count($subExercises);
        //     $subSynthe->totalLoad = $totalLoad;
        //     array_push($synthesis_result, $subSynthe);
        // }

        return response()->json([
            "success" => 1,
            "result" => $result,
            "synthe_result" => $synthesis_result
        ]);
    }

    public function getExperienceBank(Request $request) {
        $calendar = $request->calendar_id;

        // get exercises ids
        $experiences = DB::select("SELECT t1.name AS exercise_name, t.*
                                    FROM (
                                            SELECT exercise AS exercise_id, gender, increased, pre_level, post_level, height, age,
                                                pre_weight, post_weight, pre_waist_hip_ratio, post_waist_hip_ratio, muscle_type, post_rm
                                            FROM athlete_workout_tests
                                            WHERE pre_rm IS NOT NULL AND calendar = {$calendar}
                                        ) t, exercises t1
                                    WHERE t.exercise_id = t1.id ORDER BY exercise_id ASC ");

        foreach ($experiences as $exp) {

            $level = $exp->pre_level;
            if ($exp->post_level != null)
                $level = $exp->post_level;

            $weight = $exp->pre_weight;
            if ($exp->post_weight != null)
                $weight = $exp->post_weight;

            $waist_hip_ratio = $exp->pre_waist_hip_ratio;
            if ($exp->post_waist_hip_ratio != null)
                $waist_hip_ratio = $exp->post_waist_hip_ratio;

            // get level ratio
            $levelValues = DB::select("SELECT t.increased
                                        FROM (
                                            SELECT IF(post_level IS NULL, pre_level, post_level) AS level, increased, exercise, gender, pre_rm
                                            FROM athlete_workout_tests
                                        ) t
                                        WHERE t.pre_rm IS NOT NULL
                                            AND t.exercise = {$exp->exercise_id} AND t.gender = '{$exp->gender}' AND t.level = '{$level}'
                                        ORDER BY increased ASC ");

            $index = $this->getIndexOfIncreasedValue($exp->increased, $levelValues);
            if ($index === -1) {
                $exp->level_ratio = 0;
            } else {
                $exp->level_ratio = floor($index * 100 / count($levelValues));
            }

            // get height ratio
            // get min height value and max height value
            $minMaxHeight = $this->getMinMaxHeight($exp->height);
            $values = DB::select("SELECT increased FROM athlete_workout_tests
                                        WHERE pre_rm IS NOT NULL
                                            AND exercise = {$exp->exercise_id} AND gender = '{$exp->gender}'
                                            AND {$minMaxHeight->min} <= height AND height <= {$minMaxHeight->max}
                                        ORDER BY increased ASC ");
            $index = $this->getIndexOfIncreasedValue($exp->increased, $values);
            if ($index === -1) {
                $exp->height_ratio = 0;
            } else {
                $exp->height_ratio = floor($index * 100 / count($values));
            }

            // get age ratio
            // next, get min age value and max age value
            $minMaxAge = $this->getMinMaxAge($exp->age);
            $values = DB::select("SELECT increased FROM athlete_workout_tests
                                        WHERE pre_rm IS NOT NULL
                                            AND exercise = {$exp->exercise_id} AND gender = '{$exp->gender}'
                                            AND {$minMaxAge->min} <= age AND age <= {$minMaxAge->max}
                                        ORDER BY increased ASC ");
            $index = $this->getIndexOfIncreasedValue($exp->increased, $values);
            if ($index === -1) {
                $exp->age_ratio = 0;
            } else {
                $exp->age_ratio = floor($index * 100 / count($values));
            }

            // get weight ratio
            // next, get min weight value and max weight value
            $minMaxWeight = $this->getMinMaxWeight($weight, $exp->gender);
            $values = DB::select("SELECT t.increased
                                    FROM (
                                        SELECT IF(post_weight IS NULL, ROUND(pre_weight), ROUND(post_weight)) AS weight, increased, exercise, gender, pre_rm
                                        FROM athlete_workout_tests
                                    ) t
                                    WHERE t.pre_rm IS NOT NULL
                                        AND t.exercise = {$exp->exercise_id} AND t.gender = '{$exp->gender}'
                                        AND {$minMaxWeight->min} <= t.weight AND t.weight <= {$minMaxWeight->max}
                                    ORDER BY increased ASC ");
            $index = $this->getIndexOfIncreasedValue($exp->increased, $values);
            if ($index === -1) {
                $exp->weight_ratio = 0;
            } else {
                $exp->weight_ratio = floor($index * 100 / count($values));
            }

            // get waist-hip-ratio ratio
            // next, get min waist-hip-ratio value and max waist-hip-ratio value
            $minMaxWHR = $this->getMinMaxWaistHipRatio($waist_hip_ratio, $exp->gender);
            $values = DB::select("SELECT increased
                                    FROM (
                                        SELECT IF(post_waist_hip_ratio IS NULL, pre_waist_hip_ratio, post_waist_hip_ratio) AS waist_hip_ratio, increased, exercise, gender, pre_rm
                                        FROM athlete_workout_tests
                                    ) t
                                    WHERE t.pre_rm IS NOT NULL
                                        AND t.exercise = {$exp->exercise_id} AND t.gender = '{$exp->gender}'
                                        AND {$minMaxWHR->min} <= t.waist_hip_ratio AND t.waist_hip_ratio <= {$minMaxWHR->max}
                                    ORDER BY increased ASC ");
            $index = $this->getIndexOfIncreasedValue($exp->increased, $values);
            if ($index === -1) {
                $exp->waist_hip_ratio_ratio = 0;
            } else {
                $exp->waist_hip_ratio_ratio = floor($index * 100 / count($values));
            }

            // get muscle type ratio
            $muscleTypeValues = DB::select("SELECT increased FROM athlete_workout_tests
                                        WHERE pre_rm IS NOT NULL AND exercise = {$exp->exercise_id}
                                            AND gender = '{$exp->gender}' AND muscle_type = '{$exp->muscle_type}'
                                        ORDER BY increased ASC ");
            $index = $this->getIndexOfIncreasedValue($exp->increased, $muscleTypeValues);
            if ($index === -1) {
                $exp->muscle_type_ratio = 0;
            } else {
                $exp->muscle_type_ratio = floor($index * 100 / count($muscleTypeValues));
            }

            // get all combinded ratio
            $values = DB::select("SELECT increased FROM athlete_workout_tests
                                        WHERE pre_rm IS NOT NULL
                                            AND exercise = {$exp->exercise_id} AND gender = '{$exp->gender}'
                                            AND pre_level = '{$exp->pre_level}'
                                            AND {$minMaxHeight->min} <= height AND height <= {$minMaxHeight->max}
                                            AND {$minMaxAge->min} <= age AND age <= {$minMaxAge->max}
                                            AND {$minMaxWeight->min} <= ROUND(pre_weight) AND ROUND(pre_weight) <= {$minMaxWeight->max}
                                            AND {$minMaxWHR->min} <= pre_waist_hip_ratio AND pre_waist_hip_ratio <= {$minMaxWHR->max}
                                            AND muscle_type = '{$exp->muscle_type}'
                                        ORDER BY increased ASC ");
            $index = $this->getIndexOfIncreasedValue($exp->increased, $values);
            if ($index === -1) {
                $exp->combined_ratio = 0;
            } else {
                $exp->combined_ratio = floor($index * 100 / count($values));
            }

        }


        return response()->json([
            "success" => 1,
            "expBank" => $experiences,
            // "synthe_result" => $synthesis_result
        ]);
    }

    public function getExercisesByBodypart(Request $request) {
        $bodypart_id = $request->bodypart_id;

        $exercises = DB::select("SELECT t.id, t.name
                                FROM exercises t,
                                    (
                                        SELECT t.exercise
                                        FROM (SELECT DISTINCT(exercise) AS exercise FROM strength_standard_values) t, exercises_bodypart t1
                                        WHERE t.exercise = t1.exercise_id AND t1.bodypart_id = {$bodypart_id}
                                    ) t1
                                WHERE t.id = t1.exercise");

        return response()->json([
            "success" => 1,
            "exercises" => $exercises,
        ]);
    }

    public function getMainMuscleGroupAndExercises(Request $request) {
        $query = " SELECT
                        t1.bodypart_id,
                        t1.bodypart_name,
                        t.id AS exercise_id,
                        t.name AS exercise_name
                    FROM
                        exercises t,
                        (
                            SELECT
                                t.exercise, t2.id as bodypart_id, t2.name as bodypart_name
                            FROM
                                (
                                SELECT DISTINCT
                                    (exercise) AS exercise
                                FROM
                                    strength_standard_values
                                ) t,
                                exercises_bodypart t1,
                                (SELECT id, name FROM body_parts WHERE id IN (2, 3, 4, 5, 7, 9)) t2
                            WHERE
                                t.exercise = t1.exercise_id AND t1.bodypart_id = t2.id
                        ) t1
                    WHERE
                        t.id = t1.exercise
                    ORDER BY bodypart_name ASC, exercise_name ASC";

        $data = DB::select($query);

        $bodypartIds = array();
        $result = array();
        foreach ($data as $rec) {
            $exercise = (object)[];
            $exercise->id = $rec->exercise_id;
            $exercise->name = $rec->exercise_name;

            // check if bodypart id already exists
            $index = array_search($rec->bodypart_id, $bodypartIds);

            // if bodypart id doesn't exists, add bodypart to the result array
            if ($index === false) {
                $bodypart = (object)[];
                $bodypart->id = $rec->bodypart_id;
                $bodypart->name = $rec->bodypart_name;
                $bodypart->exercises = array();
                array_push($result, $bodypart);
                $index = count($result) - 1;

                array_push($bodypartIds, $rec->bodypart_id);
            }

            // add exercises to the bodypart
            array_push($result[$index]->exercises, $exercise);
        }

        return response()->json([
            "success" => 1,
            "result" => $result,
        ]);
    }

    public function getTrophyInformation(Request $request) {
        $exercise_id = $request->exercise_id;
        $user_id = $request->get('user_id', auth()->user()->id);

        $user = User::find($user_id);

        $athleteInfo = $user->getPersonInfo();
        $for_men = $athleteInfo->gender == 'male' ? 1 : 0;

        $result = (object)[];

        // get all programs that are include the exercise and are used by this user.
        $query = "SELECT t1.program_id, t2.name AS program_name, t1.start_date, t1.data, t1.weeks, t.*
                    FROM athlete_workout_tests t, athlete_calendar t1, programs t2
                    WHERE t.pre_rm IS NOT NULL AND t.exercise = {$exercise_id} AND t.user = {$user->id}
                        AND t.calendar = t1.id AND t1.program_id = t2.id AND t.post_weight IS NOT NULL
                    ORDER BY start_date ASC ";


        $programs = DB::select($query);
        foreach ($programs as $program) {
            $endTime = date('Y-m-d', strtotime($program->start_date. ' + '. ($program->weeks * 7). ' days')).' 00:00:00';
            $eliteValues = DB::select("SELECT MAX(elite_value) AS elite_value
                                        FROM strength_standard_values
                                        WHERE exercise = {$exercise_id} AND for_men = {$for_men} AND created_at <= '{$endTime}'
                                            AND weight_min <= {round($program->post_weight)} AND {round($program->post_weight)} <= weight_max ");
            $program->elite_value = $eliteValues[0]->elite_value;
        }
        $result->programs = $programs;

        if (count($programs) == 0) {
            return response()->json([
                "success" => 1,
                "result" => $result,
            ]);
        }

        // get current value ratios
        $lastProgram = $programs[count($programs) - 1];
        $ratios = (object)[];

        $level = $lastProgram->pre_level;
        if ($lastProgram->post_level != null)
            $level = $lastProgram->post_level;

        $weight = $lastProgram->pre_weight;
        if ($lastProgram->post_weight != null)
            $weight = $lastProgram->post_weight;

        $waist_hip_ratio = $lastProgram->pre_waist_hip_ratio;
        if ($lastProgram->post_waist_hip_ratio != null)
            $waist_hip_ratio = $lastProgram->post_waist_hip_ratio;

        // get level ratio
        $levelValues = DB::select("SELECT t.increased
                                    FROM (
                                        SELECT IF(post_level IS NULL, pre_level, post_level) AS level, increased, exercise, gender, pre_rm
                                        FROM athlete_workout_tests
                                    ) t
                                    WHERE t.pre_rm IS NOT NULL AND t.exercise = {$exercise_id}
                                        AND t.gender = '{$lastProgram->gender}' AND t.level = '{$level}'
                                    ORDER BY increased ASC ");

        $index = $this->getIndexOfIncreasedValue($lastProgram->increased, $levelValues);
        if ($index === -1) {
            $ratios->level_ratio = 0;
        } else {
            $ratios->level_ratio = floor($index * 100 / count($levelValues));
        }

        // get height ratio
        // get min height value and max height value
        $minMaxHeight = $this->getMinMaxHeight($lastProgram->height);
        $values = DB::select("SELECT increased FROM athlete_workout_tests
                                    WHERE pre_rm IS NOT NULL
                                        AND exercise = {$exercise_id} AND gender = '{$lastProgram->gender}'
                                        AND {$minMaxHeight->min} <= height AND height <= {$minMaxHeight->max}
                                    ORDER BY increased ASC ");
        $index = $this->getIndexOfIncreasedValue($lastProgram->increased, $values);
        if ($index === -1) {
            $ratios->height_ratio = 0;
        } else {
            $ratios->height_ratio = floor($index * 100 / count($values));
        }

        // get age ratio
        // next, get min age value and max age value
        $minMaxAge = $this->getMinMaxAge($lastProgram->age);
        $values = DB::select("SELECT increased FROM athlete_workout_tests
                                    WHERE pre_rm IS NOT NULL
                                        AND exercise = {$exercise_id} AND gender = '{$lastProgram->gender}'
                                        AND {$minMaxAge->min} <= age AND age <= {$minMaxAge->max}
                                    ORDER BY increased ASC ");
        $index = $this->getIndexOfIncreasedValue($lastProgram->increased, $values);
        if ($index === -1) {
            $ratios->age_ratio = 0;
        } else {
            $ratios->age_ratio = floor($index * 100 / count($values));
        }

        // get weight ratio
        // next, get min weight value and max weight value
        $minMaxWeight = $this->getMinMaxWeight($weight, $lastProgram->gender);
        $values = DB::select("SELECT t.increased
                                FROM (
                                    SELECT IF(post_weight IS NULL, ROUND(pre_weight), ROUND(post_weight)) AS weight, increased, exercise, gender, pre_rm
                                    FROM athlete_workout_tests
                                ) t
                                WHERE t.pre_rm IS NOT NULL
                                    AND t.exercise = {$exercise_id} AND t.gender = '{$lastProgram->gender}'
                                    AND {$minMaxWeight->min} <= t.weight AND t.weight <= {$minMaxWeight->max}
                                ORDER BY increased ASC ");
        $index = $this->getIndexOfIncreasedValue($lastProgram->increased, $values);
        if ($index === -1) {
            $ratios->weight_ratio = 0;
        } else {
            $ratios->weight_ratio = floor($index * 100 / count($values));
        }

        // get waist-hip-ratio ratio
        // next, get min waist-hip-ratio value and max waist-hip-ratio value
        $minMaxWHR = $this->getMinMaxWaistHipRatio($waist_hip_ratio, $lastProgram->gender);
        $values = DB::select("SELECT increased
                                FROM (
                                    SELECT IF(post_waist_hip_ratio IS NULL, pre_waist_hip_ratio, post_waist_hip_ratio) AS waist_hip_ratio, increased, exercise, gender, pre_rm
                                    FROM athlete_workout_tests
                                ) t
                                WHERE t.pre_rm IS NOT NULL
                                    AND t.exercise = {$exercise_id} AND t.gender = '{$lastProgram->gender}'
                                    AND {$minMaxWHR->min} <= t.waist_hip_ratio AND t.waist_hip_ratio <= {$minMaxWHR->max}
                                ORDER BY increased ASC ");
        $index = $this->getIndexOfIncreasedValue($lastProgram->increased, $values);
        if ($index === -1) {
            $ratios->waist_hip_ratio_ratio = 0;
        } else {
            $ratios->waist_hip_ratio_ratio = floor($index * 100 / count($values));
        }

        // get muscle type ratio
        $values = DB::select("SELECT increased FROM athlete_workout_tests
                                    WHERE pre_rm IS NOT NULL AND exercise = {$exercise_id}
                                        AND gender = '{$lastProgram->gender}' AND muscle_type = '{$lastProgram->muscle_type}'
                                    ORDER BY increased ASC ");
        $index = $this->getIndexOfIncreasedValue($lastProgram->increased, $values);
        if ($index === -1) {
            $ratios->muscle_type_ratio = 0;
        } else {
            $ratios->muscle_type_ratio = floor($index * 100 / count($values));
        }

        // get all combinded ratio
        $values = DB::select("SELECT increased FROM athlete_workout_tests
                                    WHERE pre_rm IS NOT NULL
                                        AND exercise = {$exercise_id} AND gender = '{$lastProgram->gender}'
                                        AND pre_level = '{$lastProgram->pre_level}'
                                        AND {$minMaxHeight->min} <= height AND height <= {$minMaxHeight->max}
                                        AND {$minMaxAge->min} <= age AND age <= {$minMaxAge->max}
                                        AND {$minMaxWeight->min} <= ROUND(pre_weight) AND ROUND(pre_weight) <= {$minMaxWeight->max}
                                        AND {$minMaxWHR->min} <= pre_waist_hip_ratio AND pre_waist_hip_ratio <= {$minMaxWHR->max}
                                        AND muscle_type = '{$lastProgram->muscle_type}'
                                    ORDER BY increased ASC ");
        $index = $this->getIndexOfIncreasedValue($lastProgram->increased, $values);
        if ($index === -1) {
            $ratios->combined_ratio = 0;
        } else {
            $ratios->combined_ratio = floor($index * 100 / count($values));
        }

        $result->ratios = $ratios;

        return response()->json([
            "success" => 1,
            "result" => $result,
        ]);
    }

    public function getTimeLine(Request $request) {
        $user_id = $request->get('user_id', auth()->user()->id);
        $timeline = DB::select("SELECT t.*, t1.name AS trainer_name
                                FROM (
                                    SELECT
                                        t.*,
                                        t1.sleep_level,
                                        t1.energy_level,
                                        t1.stress_level,
                                        t2.name AS program_name,
                                        t2.category,
                                        t3.weight AS pre_weight,
                                        t3.hip AS pre_hip,
                                        t3.waist AS pre_waist,
                                        t4.weight AS post_weight,
                                        t4.hip AS post_hip,
                                        t4.waist AS post_waist
                                    FROM athlete_calendar t,
                                        (
                                            SELECT t1.id AS calendar,
                                                CEIL(AVG(t.sleep_level)) AS sleep_level,
                                                CEIL(AVG(t.energy_level)) AS energy_level,
                                                CEIL(AVG(t.stress_level)) AS stress_level
                                            FROM athlete_workout_summary t,
                                                athlete_calendar t1
                                            WHERE t1.data LIKE CONCAT('%\"', t.plan_id, '\"%')
                                            GROUP BY t1.id
                                        ) t1,
                                        programs t2,
                                        interview t3,
                                        interview t4
                                    WHERE t.user = {$user_id}
                                        AND t.postinterview_id IS NOT NULL
                                        AND t.id = t1.calendar
                                        AND t.program_id = t2.id
                                        AND t.preinterview_id = t3.id
                                        AND t.postinterview_id = t4.id
                                    ) t
                                LEFT JOIN users t1 ON t.trainer = t1.id
                                ORDER BY t.start_date ASC");

        return response()->json([
            "success" => 1,
            "result" => $timeline,
        ]);
    }

    function getTopPrograms(Request $request) {
        $level = $request->level;
        $category = $request->category;

        $query = "  SELECT t.name AS bodypart_name, t2.name AS exercise_name, t1.*
                    FROM body_parts t
                    LEFT JOIN (
                        SELECT t.*, t3.name AS program_name, t3.category
                        FROM (
                            SELECT t1.bodypart_id,
                                t.calendar,
                                t.exercise,
                                t.pre_level,
                                t.increased
                            FROM athlete_workout_tests t,
                                exercises_bodypart t1
                            WHERE t.pre_rm IS NOT NULL
                                AND t.post_weight IS NOT NULL
                                AND t.exercise = t1.exercise_id
                            ) t,
                            (
                            SELECT t1.bodypart_id,
                                Max(t.increased) AS max_increased
                            FROM athlete_workout_tests t,
                                exercises_bodypart t1
                            WHERE t.pre_rm IS NOT NULL
                                AND t.post_weight IS NOT NULL
                                AND t.exercise = t1.exercise_id
                                AND t.increased > 0
                            GROUP BY t1.bodypart_id
                            ORDER BY bodypart_id ASC
                            ) t1,
                            athlete_calendar t2, programs t3
                        WHERE t.bodypart_id = t1.bodypart_id
                            AND t.increased = t1.max_increased
                            AND t.calendar = t2.id AND t2.program_id = t3.id
                        ) t1 ON t.id = t1.bodypart_id
                    LEFT JOIN exercises t2 ON t1.exercise = t2.id
                    WHERE 1 ";

        if (!empty($level)) {
            $query .= " AND t1.pre_level = '{$level}' ";
        }
        if (!empty($category)) {
            $query .= " AND t1.category = '{$category}' ";
        }

        $query .= " ORDER BY bodypart_id ASC";

        $result = array();
        $bodypartIds = array();
        $programs = DB::select($query);
        foreach ($programs as $program) {
            $bodypart_name = $program->bodypart_name;

            if (!isset($result[$bodypart_name]))
                $result[$bodypart_name] = array();

            if (!isset($program->calendar)) continue;

            $calendar_id = $program->calendar;

            // get main design values
            $valueQuery = "SELECT MIN(sets) AS min_set,
                                MAX(sets) AS max_set,
                                MIN(min_reps) AS min_reps,
                                MAX(max_reps) AS max_reps,
                                MIN(min_rm) AS min_rm,
                                MAX(max_rm) AS max_rm,
                                MIN(min_rtf) AS min_rtf,
                                MAX(max_rtf) AS max_rtf,
                                MIN(min_tempo) AS min_tempo,
                                MAX(max_tempo) AS max_tempo,
                                MIN(min_rest) AS min_rest,
                                MAX(max_rest) AS max_rest
                            FROM (
                                SELECT t.id AS calendar_id,
                                    t1.plan,
                                    t1.exercise,
                                    COUNT(t2.id) AS sets,
                                    MIN(t2.reps) AS min_reps,
                                    MAX(t2.reps) AS max_reps,
                                    MIN(t2.intensity) AS min_rm,
                                    MAX(t2.intensity) AS max_rm,
                                    MIN(t2.rtf) AS min_rtf,
                                    MAX(t2.rtf) AS max_rtf,
                                    MIN(t2.tempo) AS min_tempo,
                                    MAX(t2.tempo) AS max_tempo,
                                    MIN(t2.rest) AS min_rest,
                                    MAX(t2.rest) AS max_rest
                                FROM athlete_calendar t,
                                    athlete_workout t1,
                                    athlete_workout_details t2
                                WHERE t.data LIKE CONCAT('%\"', t1.plan, '\"%') AND t1.id = t2.workout
                                GROUP BY t.id, t1.plan, t1.exercise
                            ) t
                            WHERE t.calendar_id = {$calendar_id} ";

            $values = DB::select($valueQuery);
            $value = $values[0];

            // insert meta informations
            $value->program_name = $program->program_name;
            $value->level = $program->pre_level;
            $value->exercise_name = $program->exercise_name;
            $value->increased = $program->increased;

            // get exercise type
            $types = DB::select("SELECT DISTINCT(t.name) AS type
                                FROM movements t, exercises t1,
                                    (
                                        SELECT	DISTINCT(t1.exercise) AS exercise_id
                                        FROM
                                            athlete_calendar t,
                                            athlete_workout t1
                                        WHERE t.id = {$calendar_id} AND t.data LIKE CONCAT('%\"', t1.plan, '\"%')
                                    ) t2
                                WHERE t.id = t1.movement AND t1.id = t2.exercise_id");
            $typeValues = "";
            foreach ($types as $rec) {
                $typeValues .= empty($typeValues) ? "" : ", ";
                $typeValues .= $rec->type;
            }

            $value->type = $typeValues;

            // get Frequence(bodypart per week)
            // first, get weeks information
            $data = DB::select("SELECT data FROM athlete_calendar WHERE id = {$calendar_id}");
            $weeks = json_decode($data[0]->data);

            $min_freq = 8;
            $max_freq = 0;
            foreach ($weeks as $week) {
                $weekJson = json_encode($week);
                $parts = DB::select("SELECT COUNT(t2.bodypart_id) AS bodyparts
                                    FROM athlete_workout t1,
                                        exercises_bodypart t2
                                    WHERE '{$weekJson}' LIKE CONCAT('%\"', t1.plan, '\"%')
                                        AND t1.exercise = t2.exercise_id AND t2.bodypart_id = {$program->bodypart_id}");
                $cnt = $parts[0]->bodyparts;

                $min_freq = min($min_freq, $cnt);
                $max_freq = max($max_freq, $cnt);
            }

            $value->min_freq = $min_freq;
            $value->max_freq = $max_freq;

            array_push($result[$bodypart_name], $value);
        }

        return response()->json([
            "success" => 1,
            "result" => $result,
        ]);
    }

    function getSortValuesForAthlete(Request $request) {
        $user_id = auth()->user()->id;

        $result = (object)[];

        // get gender, birthday, height, muscle type from athlete table
        $athletes = DB::select("SELECT gender, birth, height, muscle_type FROM athletes WHERE user_id = {$user_id}");
        $result->gender = $athletes[0]->gender;
        $result->age = ((int)date("Y")) - ((int)explode("/", $athletes[0]->birth)[2]);
        $result->height = (int)explode("-", $athletes[0]->height)[0];
        $result->muscleFiber = $athletes[0]->muscle_type;

        $result->program_id = 0;

        // get latest program id
        $cur_date = date('Y-m-d');
        $programs = DB::select("SELECT t.*, ROUND(t1.weight) AS weight, ROUND(t1.waist / t1.hip, 2) AS waistToHipRatio
                                FROM (
                                    SELECT id, program_id, start_date, IF(postinterview_id IS NULL, preinterview_id, postinterview_id) AS interview_id
                                    FROM athlete_calendar
                                    WHERE user = {$user_id} AND start_date < '${cur_date}'
                                    ORDER BY start_date DESC
                                    LIMIT 1
                                ) t
                                LEFT JOIN interview t1 ON t.interview_id = t1.id");
        if (count($programs)) {
            $result->program_id = $programs[0]->program_id;
            $result->bodyWeight = $programs[0]->weight;
            $result->waistToHipRatio = $programs[0]->waistToHipRatio;
        }

        $levels = DB::select("SELECT IF(t1.post_level IS NULL, t1.pre_level, t1.post_level) AS strengthLevel
                                FROM (
                                    SELECT id
                                    FROM athlete_calendar
                                    WHERE user = {$user_id} AND start_date < '${cur_date}'
                                    ORDER BY start_date DESC
                                    LIMIT 1
                                ) t
                                LEFT JOIN athlete_workout_tests t1 ON t.id = t1.calendar");
        if (count($levels)) {
            $result->strengthLevel = $levels[0]->strengthLevel;
        }

        return response()->json([
            "success" => 1,
            "result" => $result,
        ]);

    }

    function getSortValuesForDesigner(Request $request) {
        $user_id = auth()->user()->id;

        $result = (object)[];
        $result->program_id = 0;

        $athleteUser = 0;

        // get latest program id
        $cur_date = date('Y-m-d');
        $programs = DB::select("SELECT t.*, ROUND(t1.weight) AS weight, ROUND(t1.waist / t1.hip, 2) AS waistToHipRatio
                                FROM (
                                    SELECT t.id, t.user, t.program_id, t.start_date, IF(t.postinterview_id IS NULL, t.preinterview_id, t.postinterview_id) AS interview_id
                                    FROM athlete_calendar t, programs t1
                                    WHERE t.program_id = t1.id AND t1.user = {$user_id} AND t.start_date < '${cur_date}' AND t1.is_published = 1
                                    ORDER BY start_date DESC
                                    LIMIT 1
                                ) t
                                LEFT JOIN interview t1 ON t.interview_id = t1.id");
        if (count($programs)) {
            $result->program_id = $programs[0]->program_id;
            $result->bodyWeight = $programs[0]->weight;
            $result->waistToHipRatio = $programs[0]->waistToHipRatio;
            $athleteUser = $programs[0]->user;
        }

        $levels = DB::select("SELECT IF(t1.post_level IS NULL, t1.pre_level, t1.post_level) AS strengthLevel
                                FROM (
                                    SELECT t.id
                                    FROM athlete_calendar t, programs t1
                                    WHERE t.program_id = t1.id AND t1.user = {$user_id} AND t.start_date < '${cur_date}'
                                    ORDER BY start_date DESC
                                    LIMIT 1
                                ) t
                                LEFT JOIN athlete_workout_tests t1 ON t.id = t1.calendar");
        if (count($levels)) {
            $result->strengthLevel = $levels[0]->strengthLevel;
        }

        // get gender, birthday, height, muscle type from athlete table
        $athletes = DB::select("SELECT gender, birth, height, muscle_type FROM athletes WHERE user_id = {$athleteUser}");
        if (count($athletes)) {
            $result->gender = $athletes[0]->gender;
            $result->age = ((int)date("Y")) - ((int)explode("/", $athletes[0]->birth)[2]);
            $result->height = (int)explode("-", $athletes[0]->height)[0];
            $result->muscleFiber = $athletes[0]->muscle_type;
        }

        return response()->json([
            "success" => 1,
            "result" => $result,
        ]);

    }

    /**
     * Undocumented function
     *
     * @param [type] $program_id
     * @param [type] $exercise_id
     * @param [type] $gender
     * @param [type] $whereQuery
     * @param [type] $cellData
     * @return void
     */
    function getMedianValueOfIncreased($program_id, $exercise_id, $gender, $whereQuery, $cellData) {

        $levels = DB::select("SELECT t.increased
                                FROM (
                                    SELECT t1.*
                                    FROM (
                                        SELECT id AS calendar_id
                                        FROM athlete_calendar
                                        WHERE program_id = {$program_id}
                                    ) t, (
                                        SELECT * FROM athlete_workout_tests
                                        WHERE exercise = {$exercise_id}
                                            AND gender = '{$gender}'
                                    ) t1
                                    WHERE t.calendar_id = t1.calendar
                                ) t ".$whereQuery." ORDER BY increased ASC");

        $cellData->cnt = count($levels);
        $cellData->value = 0;

        if (count($levels) > 0) {
            $middleIndex = intval($cellData->cnt / 2);
            if ($cellData->cnt % 2 == 1) {
                $cellData->value = $levels[$middleIndex]->increased;
            } else {
                $cellData->value = ($levels[$middleIndex]->increased + $levels[$middleIndex]->increased) / 2;
            }
        }
    }

    /**
     * get expected data
     *
     * @param Request $request
     * @return void
     */
    function getExpectedData(Request $request) {

        $contain = "all";
        if (auth()->user()->getRole() == 'StrengthAthlete') {
            $user_id = auth()->user()->id;

            if ($user_id != 0) {
                $info = User::find($user_id)->getPersonInfo();
                if ($info->gender == 'male')
                    $contain = "male";
                else
                    $contain = "female";
            }
        }

        $params = json_decode($request->params);
        $program_id = $params->program_id;

        $result = (object)[];

        // at first, get the test exercises for the program, method = '3' means test
        $testExercises = DB::select("SELECT t.exercise_id, t1.name AS exercise_name
                                    FROM (
                                        SELECT DISTINCT(t1.exercise) AS exercise_id
                                        FROM (
                                            SELECT t1.workout
                                            FROM (
                                                SELECT id AS plan_id
                                                FROM progression_plan
                                                WHERE program_id = {$program_id}
                                            ) t, progression_workout_details t1
                                            WHERE t.plan_id = t1.plan AND t1.method = '3'
                                        ) t, progression_workout t1
                                        WHERE t.workout = t1.id
                                    ) t, exercises t1
                                    WHERE t.exercise_id = t1.id ");

        // get each exercise information for man
        $male = array();
        if ($contain != "female") {
            $gender = 'Male';
            foreach ($testExercises as $exercise) {
                $exercise_id = $exercise->exercise_id;

                $exercise_info = (object)[];
                $exercise_info->id = $exercise->exercise_id;
                $exercise_info->name = $exercise->exercise_name;

                $data = array();
                $emptyParam = true;
                // Strength Level
                if (isset($params->strength_level_male)) {
                    $cellData = (object)[];
                    $cellData->name = "LEVEL";
                    $cellData->sort = $params->strength_level_male;
                    $whereQuery = "WHERE t.post_level = '{$params->strength_level_male}'";
                    $this->getMedianValueOfIncreased($program_id, $exercise_id, $gender, $whereQuery, $cellData);
                    array_push($data, $cellData);

                    $emptyParam = false;
                }

                // Body Weight
                if (isset($params->min_body_weight_male)) {
                    $cellData = (object)[];
                    $cellData->name = "BODY WEIGHT(KG)";
                    $cellData->sort = $params->min_body_weight_male." - ".$params->max_body_weight_male;
                    $whereQuery = "WHERE {$params->min_body_weight_male} <= ROUND(t.post_weight) AND ROUND(t.post_weight) <= {$params->max_body_weight_male}";
                    $this->getMedianValueOfIncreased($program_id, $exercise_id, $gender, $whereQuery, $cellData);
                    array_push($data, $cellData);

                    $emptyParam = false;
                }

                // Waist Hip Ratio
                if (isset($params->min_waist_hip_ratio_male)) {
                    $cellData = (object)[];
                    $cellData->name = "WAIST HIP RATIO";
                    $cellData->sort = $params->min_waist_hip_ratio_male." - ".$params->max_waist_hip_ratio_male;
                    $whereQuery = "WHERE {$params->min_waist_hip_ratio_male} <= t.post_waist_hip_ratio AND t.post_waist_hip_ratio <= {$params->max_waist_hip_ratio_male}";
                    $this->getMedianValueOfIncreased($program_id, $exercise_id, $gender, $whereQuery, $cellData);
                    array_push($data, $cellData);

                    $emptyParam = false;
                }

                // Age
                if (isset($params->min_age_male)) {
                    $cellData = (object)[];
                    $cellData->name = "AGE(YEARS)";
                    $cellData->sort = $params->min_age_male." - ".$params->max_age_male;
                    $whereQuery = "WHERE {$params->min_age_male} <= t.age AND t.age <= {$params->max_age_male}";
                    $this->getMedianValueOfIncreased($program_id, $exercise_id, $gender, $whereQuery, $cellData);
                    array_push($data, $cellData);

                    $emptyParam = false;
                }

                // Height
                if (isset($params->min_height_male)) {
                    $cellData = (object)[];
                    $cellData->name = "HEIGHT(CM)";
                    $cellData->sort = $params->min_height_male." - ".$params->max_height_male;
                    $whereQuery = "WHERE {$params->min_height_male} <= t.height AND t.height <= {$params->max_height_male}";
                    $this->getMedianValueOfIncreased($program_id, $exercise_id, $gender, $whereQuery, $cellData);
                    array_push($data, $cellData);

                    $emptyParam = false;
                }

                // Muscle Fiber
                if (isset($params->muscle_male)) {
                    $cellData = (object)[];
                    $cellData->name = "MUSCLE FIBER";
                    $cellData->sort = ucfirst($params->muscle_male);
                    $whereQuery = "WHERE t.muscle_type = '{$params->muscle_male}'";
                    $this->getMedianValueOfIncreased($program_id, $exercise_id, $gender, $whereQuery, $cellData);
                    array_push($data, $cellData);

                    $emptyParam = false;
                }

                // Mirror
                if (!$emptyParam) {
                    $cellData = (object)[];
                    $cellData->name = "YOUR MIRROR ATHLETES";
                    $cellData->sort = "";
                    $whereQuery = "WHERE 1 ";
                    if (isset($params->strength_level_male))
                        $whereQuery .= " AND t.post_level = '{$params->strength_level_male}'";

                    if (isset($params->min_body_weight_male))
                        $whereQuery .= " AND {$params->min_body_weight_male} <= ROUND(t.post_weight) AND ROUND(t.post_weight) <= {$params->max_body_weight_male}";

                    if (isset($params->min_waist_hip_ratio_male))
                        $whereQuery .= " AND {$params->min_waist_hip_ratio_male} <= t.post_waist_hip_ratio AND t.post_waist_hip_ratio <= {$params->max_waist_hip_ratio_male}";

                    if (isset($params->min_age_male))
                        $whereQuery .= " AND {$params->min_age_male} <= t.age AND t.age <= {$params->max_age_male}";

                    if (isset($params->min_height_male))
                        $whereQuery .= " AND {$params->min_height_male} <= t.height AND t.height <= {$params->max_height_male}";

                    if (isset($params->muscle_male))
                        $whereQuery .= " AND t.muscle_type = '{$params->muscle_male}'";

                        $this->getMedianValueOfIncreased($program_id, $exercise_id, $gender, $whereQuery, $cellData);
                    array_push($data, $cellData);
                }

                // Average Data
                $cellData = (object)[];
                $cellData->name = "AVERAGE";
                $cellData->sort = "";
                $whereQuery = "WHERE 1";
                $this->getMedianValueOfIncreased($program_id, $exercise_id, $gender, $whereQuery, $cellData);
                array_push($data, $cellData);
                $exercise_info->data = $data;

                array_push($male, $exercise_info);
            }
        }

        // get each exercise information for woman
        $female = array();
        if ($contain != "male") {
            $gender = 'Female';
            foreach ($testExercises as $exercise) {
                $exercise_id = $exercise->exercise_id;

                $exercise_info = (object)[];
                $exercise_info->id = $exercise->exercise_id;
                $exercise_info->name = $exercise->exercise_name;

                $data = array();
                $emptyParam = true;
                // Strength Level
                if (isset($params->strength_level_female)) {
                    $cellData = (object)[];
                    $cellData->name = "LEVEL";
                    $cellData->sort = $params->strength_level_female;
                    $whereQuery = "WHERE t.post_level = '{$params->strength_level_female}'";
                    $this->getMedianValueOfIncreased($program_id, $exercise_id, $gender, $whereQuery, $cellData);
                    array_push($data, $cellData);

                    $emptyParam = false;
                }

                // Body Weight
                if (isset($params->min_body_weight_female)) {
                    $cellData = (object)[];
                    $cellData->name = "BODY WEIGHT(KG)";
                    $cellData->sort = $params->min_body_weight_female." - ".$params->max_body_weight_female;
                    $whereQuery = "WHERE {$params->min_body_weight_female} <= ROUND(t.post_weight) AND ROUND(t.post_weight) <= {$params->max_body_weight_female}";
                    $this->getMedianValueOfIncreased($program_id, $exercise_id, $gender, $whereQuery, $cellData);
                    array_push($data, $cellData);

                    $emptyParam = false;
                }

                // Waist Hip Ratio
                if (isset($params->min_waist_hip_ratio_female)) {
                    $cellData = (object)[];
                    $cellData->name = "WAIST HIP RATIO";
                    $cellData->sort = $params->min_waist_hip_ratio_female." - ".$params->max_waist_hip_ratio_female;
                    $whereQuery = "WHERE {$params->min_waist_hip_ratio_female} <= t.post_waist_hip_ratio AND t.post_waist_hip_ratio <= {$params->max_waist_hip_ratio_female}";
                    $this->getMedianValueOfIncreased($program_id, $exercise_id, $gender, $whereQuery, $cellData);
                    array_push($data, $cellData);

                    $emptyParam = false;
                }

                // Age
                if (isset($params->min_age_female)) {
                    $cellData = (object)[];
                    $cellData->name = "AGE(YEARS)";
                    $cellData->sort = $params->min_age_female." - ".$params->max_age_female;
                    $whereQuery = "WHERE {$params->min_age_female} <= t.age AND t.age <= {$params->max_age_female}";
                    $this->getMedianValueOfIncreased($program_id, $exercise_id, $gender, $whereQuery, $cellData);
                    array_push($data, $cellData);

                    $emptyParam = false;
                }

                // Height
                if (isset($params->min_height_female)) {
                    $cellData = (object)[];
                    $cellData->name = "HEIGHT(CM)";
                    $cellData->sort = $params->min_height_female." - ".$params->max_height_female;
                    $whereQuery = "WHERE {$params->min_height_female} <= t.height AND t.height <= {$params->max_height_female}";
                    $this->getMedianValueOfIncreased($program_id, $exercise_id, $gender, $whereQuery, $cellData);
                    array_push($data, $cellData);

                    $emptyParam = false;
                }

                // Muscle Fiber
                if (isset($params->muscle_female)) {
                    $cellData = (object)[];
                    $cellData->name = "MUSCLE FIBER";
                    $cellData->sort = ucfirst($params->muscle_female);
                    $whereQuery = "WHERE t.muscle_type = '{$params->muscle_female}'";
                    $this->getMedianValueOfIncreased($program_id, $exercise_id, $gender, $whereQuery, $cellData);
                    array_push($data, $cellData);

                    $emptyParam = false;
                }

                // Mirror
                if (!$emptyParam) {
                    $cellData = (object)[];
                    $cellData->name = "YOUR MIRROR ATHLETES";
                    $cellData->sort = "";
                    $whereQuery = "WHERE 1 ";
                    if (isset($params->strength_level_female))
                        $whereQuery .= " AND t.post_level = '{$params->strength_level_female}'";

                    if (isset($params->min_body_weight_female))
                        $whereQuery .= " AND {$params->min_body_weight_female} <= ROUND(t.post_weight) AND ROUND(t.post_weight) <= {$params->max_body_weight_female}";

                    if (isset($params->min_waist_hip_ratio_female))
                        $whereQuery .= " AND {$params->min_waist_hip_ratio_female} <= t.post_waist_hip_ratio AND t.post_waist_hip_ratio <= {$params->max_waist_hip_ratio_female}";

                    if (isset($params->min_age_female))
                        $whereQuery .= " AND {$params->min_age_female} <= t.age AND t.age <= {$params->max_age_female}";

                    if (isset($params->min_height_female))
                        $whereQuery .= " AND {$params->min_height_female} <= t.height AND t.height <= {$params->max_height_female}";

                    if (isset($params->muscle_female))
                        $whereQuery .= " AND t.muscle_type = '{$params->muscle_female}'";

                        $this->getMedianValueOfIncreased($program_id, $exercise_id, $gender, $whereQuery, $cellData);
                    array_push($data, $cellData);
                }

                // Average Data
                $cellData = (object)[];
                $cellData->name = "AVERAGE";
                $cellData->sort = "";
                $whereQuery = "WHERE 1";
                $this->getMedianValueOfIncreased($program_id, $exercise_id, $gender, $whereQuery, $cellData);
                array_push($data, $cellData);
                $exercise_info->data = $data;

                array_push($female, $exercise_info);
            }
        }

        $result->male = $male;
        $result->female = $female;

        return response()->json([
            "success" => 1,
            "result" => $result,
        ]);
    }

    /**
     * get Top Three
     *
     * @param Request $request
     * @return void
     */
    function getTopThreeData(Request $request) {

        $contain = "all";
        if (auth()->user()->getRole() == 'StrengthAthlete') {
            $user_id = auth()->user()->id;

            if ($user_id != 0) {
                $info = User::find($user_id)->getPersonInfo();
                if ($info->gender == 'male')
                    $contain = "male";
                else
                    $contain = "female";
            }
        }

        $program_id = $request->program_id;

        $result = (object)[];

        // at first, get the test exercises for the program, method = '3' means test
        $testExercises = DB::select("SELECT t.exercise_id, t1.name AS exercise_name
                                    FROM (
                                        SELECT DISTINCT(t1.exercise) AS exercise_id
                                        FROM (
                                            SELECT t1.workout
                                            FROM (
                                                SELECT id AS plan_id
                                                FROM progression_plan
                                                WHERE program_id = {$program_id}
                                            ) t, progression_workout_details t1
                                            WHERE t.plan_id = t1.plan AND t1.method = '3'
                                        ) t, progression_workout t1
                                        WHERE t.workout = t1.id
                                    ) t, exercises t1
                                    WHERE t.exercise_id = t1.id ");

        $levels = array(
            UNTRAINED_LEVEL,
            NOVICE_LEVEL,
            INTERMEDIATE_LEVEL,
            ADVANCED_LEVEL,
            ELITE_LEVEL,
        );

        $male = array();
        if ($contain != "female") {
            $gender = 'Male';

            // get top 3 results for each exercises of gender 'Male'
            foreach ($testExercises as $exercise) {
                $exercise_info = (object)[];
                $exercise_info->id = $exercise->exercise_id;
                $exercise_info->name = $exercise->exercise_name;

                $exercise_id = $exercise->exercise_id;
                $exercise_data = array();

                $testsQuery = "SELECT t1.*
                                FROM (
                                    SELECT id AS calendar_id
                                    FROM athlete_calendar
                                    WHERE program_id = {$program_id}
                                ) t, (
                                    SELECT * FROM athlete_workout_tests
                                    WHERE exercise = {$exercise_id}
                                        AND gender = '{$gender}'
                                ) t1
                                WHERE t.calendar_id = t1.calendar ";

                // get top 3 results for each levels
                foreach ($levels as $level) {
                    $level_info = (object)[];
                    $level_info->name = $level;

                    $level_data = array();

                    // get average data
                    $median = 0;
                    $values = DB::select("SELECT t.increased
                                        FROM (".$testsQuery.") t
                                        WHERE t.post_level = '{$level}'
                                        ORDER BY increased ASC ");

                    $cnt = count($values);

                    if ($cnt > 0) {
                        $middleIndex = intval($cnt / 2);
                        if ($cnt % 2 == 1) {
                            $median = $values[$middleIndex]->increased;
                        } else {
                            $median = ($values[$middleIndex - 1]->increased + $values[$middleIndex]->increased) / 2;
                        }
                    }

                    // get top 3 results
                    $tops = DB::select("SELECT t.post_weight, t.post_waist_hip_ratio, t.age, t.height, t.muscle_type, t.increased
                                        FROM (".$testsQuery.") t
                                        WHERE t.post_level = '{$level}'
                                        ORDER BY increased DESC
                                        LIMIT 3");

                    foreach ($tops as $athlete) {
                        $cellData = (object)[];
                        $cellData->value = $athlete->increased;
                        $cellData->average = $median;

                        $minMaxWeight = $this->getMinMaxWeight($athlete->post_weight, $gender);
                        $cellData->body_weight = $minMaxWeight->min." - ".$minMaxWeight->max;

                        $minMaxWHR = $this->getMinMaxWaistHipRatio($athlete->post_waist_hip_ratio, $gender);
                        $cellData->waist_hip_ratio = $minMaxWHR->min." - ".$minMaxWHR->max;

                        $minMaxAge = $this->getMinMaxAge($athlete->age, $gender);
                        $cellData->age = $minMaxAge->min." - ".$minMaxAge->max;

                        $minMaxHeight = $this->getMinMaxHeight($athlete->height, $gender);
                        $cellData->height = $minMaxHeight->min." - ".$minMaxHeight->max;

                        $cellData->muscle_type = $athlete->muscle_type;

                        // get mirror
                        $mirrors = DB::select("SELECT t.increased
                                            FROM (".$testsQuery.") t
                                            WHERE t.post_level = '{$level}'
                                                AND {$minMaxWeight->min} <= ROUND(t.post_weight) AND ROUND(t.post_weight) <= {$minMaxWeight->max}
                                                AND {$minMaxWHR->min} <= t.post_waist_hip_ratio AND t.post_waist_hip_ratio <= {$minMaxWHR->max}
                                                AND {$minMaxAge->min} <= t.age AND t.age <= {$minMaxAge->max}
                                                AND {$minMaxHeight->min} <= t.height AND t.height <= {$minMaxHeight->max}
                                                AND t.muscle_type = '{$athlete->muscle_type}'
                                            ORDER BY increased ASC ");

                        $mirror_value = -1;
                        $cnt = count($mirrors);

                        if ($cnt > 0) {
                            $middleIndex = intval($cnt / 2);
                            if ($cnt % 2 == 1) {
                                $mirror_value = $mirrors[$middleIndex]->increased;
                            } else {
                                $mirror_value = ($mirrors[$middleIndex - 1]->increased + $mirrors[$middleIndex]->increased) / 2;
                            }
                        }

                        $cellData->mirror = $mirror_value;

                        array_push($level_data, $cellData);
                    }

                    $level_info->data = $level_data;
                    array_push($exercise_data, $level_info);
                }

                $exercise_info->data = $exercise_data;
                array_push($male, $exercise_info);
            }
        }

        $female = array();
        if ($contain != "male") {
            $gender = 'Female';

            // get top 3 results for each exercises of gender 'Female'
            foreach ($testExercises as $exercise) {
                $exercise_info = (object)[];
                $exercise_info->id = $exercise->exercise_id;
                $exercise_info->name = $exercise->exercise_name;

                $exercise_id = $exercise->exercise_id;
                $exercise_data = array();

                $testsQuery = "SELECT t1.*
                                FROM (
                                    SELECT id AS calendar_id
                                    FROM athlete_calendar
                                    WHERE program_id = {$program_id}
                                ) t, (
                                    SELECT * FROM athlete_workout_tests
                                    WHERE exercise = {$exercise_id}
                                        AND gender = '{$gender}'
                                ) t1
                                WHERE t.calendar_id = t1.calendar ";

                // get top 3 results for each levels
                foreach ($levels as $level) {
                    $level_info = (object)[];
                    $level_info->name = $level;

                    $level_data = array();

                    // get average data
                    $median = 0;
                    $values = DB::select("SELECT t.increased
                                        FROM (".$testsQuery.") t
                                        WHERE t.post_level = '{$level}'
                                        ORDER BY increased ASC ");

                    $cnt = count($values);

                    if ($cnt > 0) {
                        $middleIndex = intval($cnt / 2);
                        if ($cnt % 2 == 1) {
                            $median = $values[$middleIndex]->increased;
                        } else {
                            $median = ($values[$middleIndex - 1]->increased + $values[$middleIndex]->increased) / 2;
                        }
                    }

                    // get top 3 results
                    $tops = DB::select("SELECT t.post_weight, t.post_waist_hip_ratio, t.age, t.height, t.muscle_type, t.increased
                                        FROM (".$testsQuery.") t
                                        WHERE t.post_level = '{$level}'
                                        ORDER BY increased DESC
                                        LIMIT 3");

                    foreach ($tops as $athlete) {
                        $cellData = (object)[];
                        $cellData->value = $athlete->increased;
                        $cellData->average = $median;

                        $minMaxWeight = $this->getMinMaxWeight($athlete->post_weight, $gender);
                        $cellData->body_weight = $minMaxWeight->min." - ".$minMaxWeight->max;

                        $minMaxWHR = $this->getMinMaxWaistHipRatio($athlete->post_waist_hip_ratio, $gender);
                        $cellData->waist_hip_ratio = $minMaxWHR->min." - ".$minMaxWHR->max;

                        $minMaxAge = $this->getMinMaxAge($athlete->age, $gender);
                        $cellData->age = $minMaxAge->min." - ".$minMaxAge->max;

                        $minMaxHeight = $this->getMinMaxHeight($athlete->height, $gender);
                        $cellData->height = $minMaxHeight->min." - ".$minMaxHeight->max;

                        $cellData->muscle_type = $athlete->muscle_type;

                        // get mirror
                        $mirrors = DB::select("SELECT t.increased
                                            FROM (".$testsQuery.") t
                                            WHERE t.post_level = '{$level}'
                                                AND {$minMaxWeight->min} <= ROUND(t.post_weight) AND ROUND(t.post_weight) <= {$minMaxWeight->max}
                                                AND {$minMaxWHR->min} <= t.post_waist_hip_ratio AND t.post_waist_hip_ratio <= {$minMaxWHR->max}
                                                AND {$minMaxAge->min} <= t.age AND t.age <= {$minMaxAge->max}
                                                AND {$minMaxHeight->min} <= t.height AND t.height <= {$minMaxHeight->max}
                                                AND t.muscle_type = '{$athlete->muscle_type}'
                                            ORDER BY increased ASC ");


                        $mirror_value = -1;
                        $cnt = count($mirrors);

                        if ($cnt > 0) {
                            $middleIndex = intval($cnt / 2);
                            if ($cnt % 2 == 1) {
                                $mirror_value = $mirrors[$middleIndex]->increased;
                            } else {
                                $mirror_value = ($mirrors[$middleIndex - 1]->increased + $mirrors[$middleIndex]->increased) / 2;
                            }
                        }

                        $cellData->mirror = $mirror_value;

                        array_push($level_data, $cellData);
                    }

                    $level_info->data = $level_data;
                    array_push($exercise_data, $level_info);
                }

                $exercise_info->data = $exercise_data;
                array_push($female, $exercise_info);
            }
        }

        $result->male = $male;
        $result->female = $female;

        return response()->json([
            "success" => 1,
            "result" => $result,
        ]);
    }

    public function saveProfile(Request $request) {

        $user_name = $request->get('user_name', '');
        $phone = $request->get('phone', '');
        $email = $request->get('email', '');

        $user = auth()->user();

        // save user information
        if ($user_name != '') {
            $user->name = $user_name;
        }

        if ($phone != '') {
            $user->phone = $phone;
        }

        if ($email != '') {
            $user->email = $email;
        }

        $user->save();

        // save profile information
        $personInfo = $user->getPersonInfo();

        $gender = $request->get('gender', '');
        $birth = $request->get('birth', '');
        $education = $request->get('education', '');
        $special = $request->get('special', '');
        $height = $request->get('height', '');
        $muscle_type = $request->get('muscle_type', '');
        $interest = $request->get('interest', '');
        $experience = $request->get('experience', '');
        $country = $request->get('country', '');
        $location = $request->get('location', '');
        $place = $request->get('place', '');
        $workplace_address = $request->get('workplace_address', '');
        $postal_code = $request->get('postal_code', '');
        $description = $request->get('description', '');

        if ($gender != '')       $personInfo->gender = $gender;

        if ($birth != '')        $personInfo->birth = $birth;

        // this is for PD, PT
        if ($education != '')    $personInfo->education = $education;

        // this is for PD, PT
        if ($special != '')      $personInfo->special = $special;

        // this is for SA
        if ($height != '')       $personInfo->height = $height;

        // this is for SA
        if ($muscle_type != '')  $personInfo->muscle_type = $muscle_type;

        // this is for SA
        if ($interest != '')     $personInfo->interest = $interest;

        // this is for PD, PT, SA
        if ($experience != '')   $personInfo->experience = $experience;

        // this is for PD, PT, SA
        if ($country != '')      $personInfo->country = $country;

        // this is for PT
        if ($location != '')     $personInfo->location = $location;

        // this is for PT
        if ($workplace_address != '') $personInfo->workplace_address = $workplace_address;

        // this is for PD, PT, SA
        if ($postal_code != '')  $personInfo->postal_code = $postal_code;

        // this is for PD, PT, SA
        if ($place != '')        $personInfo->place = $place;

        // this is for PD, PT, SA
        if ($description != '')  $personInfo->description = $description;

        $avatar_url = '';
        if ($request->file('avatar') && $request->file('avatar')->isValid()) {
            $fileName = time().'.'.$request->file('avatar')->extension();
            $request->file('avatar')->move(public_path('assets/uploads/profile_logo'), $fileName);
            $avatar_url = './assets/uploads/profile_logo/'.$fileName;
        }
        // this is for PD, PT, SA
        if ($avatar_url != '')   $personInfo->avatar = $avatar_url;

        $personInfo->save();

        return response()->json([
            "success" => 1,
        ]);
    }
}
