<?php

namespace App\Http\Controllers;

use App\Models\AthleteWorkoutSummary;
use App\Models\AthleteWorkoutTests;
use App\Models\AthleteCalendar;
use App\Models\Notifications;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class WorkoutLogController extends Controller
{
    public function getInprogressData(Request $request) {
        $calendar_id = $request->calendar_id;

        // get plan id list from calendar
        $calendar = AthleteCalendar::find($calendar_id);
        $planData = json_decode($calendar->data);
        $planIds = "";
        foreach ($planData as $week) {
            foreach ($week as $planId) {
                if (isset($planId) && $planId != '') {
                    $planIds .= ($planIds == "" ? "": ",");
                    $planIds .= $planId;
                }
            }
        }

        // get information for total, completed
        $info = DB::select("SELECT COUNT(id) AS total, SUM(completed) AS completed
                            FROM athlete_plan
                            WHERE id in ({$planIds}) ");

        return response()->json([
            'success' => 1,
            'result' => $info[0]
        ]);
    }

    /**
     * get athlete workouts
     *
     * @param Request $request
     * @return void
     */
    public function getAthleteWorkouts(Request $request) {
        $plan_id = $request->plan_id;
        $workouts = DB::select("SELECT t.id, t2.bodypart_name, t2.exercise_name, t2.picture, t.*, t1.exercise as exercise_id
                                FROM athlete_workout_details t, athlete_workout t1,
                                    (SELECT t.id as exercise_id, t.name as exercise_name, t2.name as bodypart_name, t.picture
                                    FROM exercises t
                                    LEFT JOIN exercises_bodypart t1 on t.id = t1.exercise_id
                                    LEFT JOIN body_parts t2 on t1.bodypart_id = t2.id
                                    ) t2
                                WHERE t.workout = t1.id AND t1.exercise = t2.exercise_id AND t.plan = {$plan_id}
                                ORDER BY t.id ASC");

        return response()->json([
            'success' => 1,
            'result' => $workouts
        ]);
    }

    /**
     * udpate rm
     *
     * @param Request $request
     * @return void
     */
    public function updateRm(Request $request) {
        $user = auth()->user();
        $plan_id = $request->plan_id;
        $detail_id = $request->detail_id;
        $exercise_id = $request->exercise_id;
        $updated_rm = $request->updated_rm;

        // get plans
        $calendars = DB::select("SELECT data FROM athlete_calendar WHERE user = ".$user->id);

        $plans = "";
        foreach ($calendars as $calendar) {
            if (!str_contains($calendar->data, "\"$plan_id\""))  continue;

            $weeks = json_decode($calendar->data);
            foreach ($weeks as $week) {
                foreach ($week as $day) {
                    if ($day == null)   continue;

                    $plans .= empty($plans) ? "" : ",";
                    $plans .= $day;
                }
            }
        }

        // update rm
        $updateQuery = "UPDATE athlete_workout_details t, athlete_workout t1
                        SET t.updated_rm = '{$updated_rm}', t.autoreg_load = ROUND({$updated_rm} * CAST(t.intensity AS DECIMAL(4, 2)) / 100, 2)
                        WHERE t.workout = t1.id
                            AND t1.exercise = {$exercise_id}
                            AND t.plan IN ({$plans})
                            AND t.id > {$detail_id}";
        DB::statement($updateQuery);

        return response()->json([
            'success' => 1,
            'plans' => $plans,
            'updateQuery' => $updateQuery
        ]);
    }

    /**
     * reset workout logs
     *
     * @param Request $request
     * @return void
     */
    public function resetWorkoutLogs(Request $request) {
        $plan_id = $request->plan_id;
        DB::statement("UPDATE athlete_workout_details SET autoreg_load = ROUND(rm * CAST(intensity AS DECIMAL(4, 2)) / 100, 2),
                                                        performed_rtf = null, performed_reps = null, performed_rm = null
                                                      WHERE plan = {$plan_id} ");

        return response()->json([
            'success' => 1
        ]);
    }

    /**
     * save workout logs
     *
     * @param Request $request
     * @return void
     */
    public function saveWorkoutLogs(Request $request) {
        $logs = json_decode($request->workout_logs);
        foreach ($logs as $log) {
            $id = $log->id;
            $autoreg_load = $log->autoreg_load;
            $performed_rtf = $log->performed_rtf;
            $performed_reps = $log->performed_reps;
            $performed_rm = $log->performed_rm;
            DB::statement("UPDATE athlete_workout_details SET autoreg_load = {$autoreg_load}, performed_rtf = {$performed_rtf},
                                                            performed_reps = {$performed_reps}, performed_rm = {$performed_rm} WHERE id = {$id} ");
        }

        return response()->json([
            'success' => 1
        ]);
    }

    /**
     * save workout log
     *
     * @param Request $request
     * @return void
     */
    public function saveWorkoutLog(Request $request) {
        $log = json_decode($request->workout_log);

        $id = $log->id;
        $autoreg_load = $log->autoreg_load;
        $performed_rtf = $log->performed_rtf;
        $performed_reps = $log->performed_reps;
        $performed_rm = $log->performed_rm;
        DB::statement("UPDATE athlete_workout_details SET autoreg_load = {$autoreg_load}, performed_rtf = {$performed_rtf},
                                                        performed_reps = {$performed_reps}, performed_rm = {$performed_rm} WHERE id = {$id} ");

        return response()->json([
            'success' => 1
        ]);
    }

    /**
     * get level of the workout
     *
     * @param Request $request
     * @return void
     */
    public function getLevel(Request $request) {
        $exercise = $request->exercise;
        $rm = $request->rm;
        $weight = round($request->weight);
        $forMen = $request->gender == 'male' ? 1 : 0;

        // get standard elite values
        $eliteValues = DB::select("SELECT elite_value FROM strength_standard_values
                                    WHERE exercise = {$exercise} AND for_men = {$forMen} AND weight_min <= {$weight} AND {$weight} <= weight_max
                                    ORDER BY created_at DESC ");

        $level = UNTRAINED_LEVEL;
        if (count($eliteValues)) {
            $eliteVal = $eliteValues[0]->elite_value;
            $eliteUpdateVal = $eliteVal * ELITE_UPDATE_PERCENT;
            $advancedVal = $eliteVal * ADVANCED_PERCENT;
            $intermediateVal = $eliteVal * INTERMEDIATE_PERCENT;
            $noviceVal = $eliteVal * NOVICE_PERCENT;
            $untrainedVal = $eliteVal * UNTRAINED_PERCENT;

            if ($rm >= $eliteVal) {
                if ($rm < $eliteUpdateVal) {
                    DB::statement("INSERT INTO strength_standard_values(exercise, for_men, weight_min, weight_max, elite_value)
                                    VALUE ({$exercise}, {$forMen}, {$eliteValues[0]->weight_min}, {$eliteValues[0]->weight_max}, {$rm})");
                }
                $level = ELITE_LEVEL;

            } else if ($advancedVal <= $rm && $rm < $eliteVal) {
                $level = ADVANCED_LEVEL;

            } else if ($intermediateVal <= $rm && $rm < $advancedVal) {
                $level = INTERMEDIATE_LEVEL;

            } else if ($noviceVal <= $rm && $rm < $intermediateVal) {
                $level = NOVICE_LEVEL;

            }
        }

        return response()->json([
            'success' => 1,
            'level' => $level
        ]);
    }

    /**
     * save workout testing
     *
     * @param Request $request
     * @return void
     */
    public function saveWorkoutTesting(Request $request) {

        $calendar = $request->calendar;
        $exercise = $request->exercise;
        $is_pre_test = $request->is_pre_test;
        $rm = $request->rm;
        $level = isset($request->level) ? $request->level : null;
        $age = $request->age;
        $weight = isset($request->weight) ? round($request->weight) : null;
        $waist_hip_ratio = isset($request->waist_hip_ratio) ? $request->waist_hip_ratio : null;

        if ($is_pre_test) {
            $updateQuery = "UPDATE athlete_workout_tests SET pre_rm = {$rm}, pre_level = '{$level}', pre_weight = {$weight}, pre_waist_hip_ratio = {$waist_hip_ratio}
                            WHERE calendar = {$calendar} AND exercise = {$exercise}";
            DB::statement($updateQuery);

        } else {    // we can't know weight, waist, hip, level when the athlete performs post test exercises. we can know only after post interview has performed.

            $updateQuery = "UPDATE athlete_workout_tests SET post_rm = {$rm}, increased = FLOOR({$rm} * 100 / pre_rm) - 100 WHERE calendar = {$calendar} AND exercise = {$exercise}";
            DB::statement($updateQuery);
        }

        DB::statement($updateQuery);

        return response()->json([
            'success' => 1,
            'updateQuery' => $updateQuery
        ]);
    }

    /**
     * save workout summary
     *
     * @param Request $request
     * @return void
     */
    public function saveWorkoutSummary(Request $request) {
        $summary = new AthleteWorkoutSummary;
        if (isset($request->id)) {
            $summary = AthleteWorkoutSummary::find($request->id);
        }
        $summary->plan_id = $request->plan_id;
        $summary->load_data = $request->load_data;
        $summary->sleep_level = $request->sleep_level;
        $summary->energy_level = $request->energy_level;
        $summary->stress_level = $request->stress_level;
        $summary->injuries = $request->injuries;
        $summary->notes = $request->notes;
        $summary->save();

        DB::statement("UPDATE athlete_plan SET completed = 1 WHERE id = {$request->plan_id}");

        return response()->json([
            'success' => 1,
            'result' => $summary->id
        ]);
    }

    /**
     * find workout summary
     *
     * @param Request $request
     * @return void
     */
    public function findWorkoutSummary(Request $request) {
        $plan_id = $request->plan_id;

        $summaries = AthleteWorkoutSummary::where('plan_id', $plan_id)->get();
        if (count($summaries)) {
            return response()->json([
                'success' => 1,
                'result' => $summaries[0]
            ]);
        }

        return response()->json([
            'success' => 0
        ]);
    }
}
