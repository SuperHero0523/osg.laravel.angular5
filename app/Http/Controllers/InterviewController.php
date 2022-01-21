<?php

namespace App\Http\Controllers;

use App\Models\AthleteCalendar;
use App\Models\Notifications;
use App\Models\Interview;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class InterviewController extends Controller
{
    public function saveInterviewData(Request $request) {

        $calendar_id = $request->calendar_id;
        $waist = $request->waist;
        $hip = $request->hip;
        $weight = $request->weight;
        $injury = $request->injury;

        DB::table('interview')->insert([
            'calendar_id' => $calendar_id,
            'waist' => $waist,
            'hip' => $hip,
            'weight' => $weight,
            'injury' => $injury,
        ]);

        $insertedId = DB::getPdo()->lastInsertId();

        return response()->json([
            "success" => 1,
            "insertedId" => $insertedId
        ]);
    }

    public function saveOtherActivityData(Request $request) {

        $interview_id = $request->interview_id;
        $category = $request->category;
        $training_days = $request->training_days;
        $intensity = $request->intensity;
        $duration_hour = $request->duration_hour;
        $duration_minute = $request->duration_minute;

        DB::table('interview_activity')->insert([
            'interview_id' => $interview_id,
            'category' => $category,
            'training_days' => $training_days,
            'intensity' => $intensity,
            'duration_hour' => $duration_hour,
            'duration_minute' => $duration_minute,
        ]);

        $insertedId = DB::getPdo()->lastInsertId();

        return response()->json([
            "success" => 1,
            "insertedId" => $insertedId
        ]);
    }

    public function getInterviewData(Request $request) {
        if (isset($request->calendar_id)) {
            $interviews = DB::table('interview')->where('calendar_id', $request->calendar_id)->get();

            return response()->json([
                "success" => 1,
                "data" => $interviews
            ]);
        }

        if (isset($request->id)) {
            $interviews = DB::table('interview')->where('id', $request->id)->get();
            if (count($interviews)) {
                return response()->json([
                    "success" => 1,
                    "data" => $interviews[0]
                ]);
            }
        }

        return response()->json([
            "success" => 0
        ]);
    }

    public function getExercisesWithEquipment(Request $request) {
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

        $no_rm_equipments = NO_RM_EQUIPMENTS;

        $sqlQuery = "SELECT b.*
                    FROM (
                        SELECT DISTINCT(exercise) AS exercise_id
                        FROM athlete_workout WHERE plan IN ({$planIds})
                    ) a, (
                        SELECT t.exercise_id, t1.name AS exercise_name, t2.name AS equipment_name
                        FROM exercises_equipment t
                        LEFT JOIN exercises t1 ON t.exercise_id = t1.id
                        LEFT JOIN equipment_types t2 on t.equipment_id = t2.id
                        -- WHERE t.equipment_id NOT IN ({$no_rm_equipments})
                    ) b
                    WHERE a.exercise_id = b.exercise_id";

        // echo $sqlQuery;

        // get exercises from plan id list
        $exercises = DB::select($sqlQuery);

        return response()->json([
            "success" => 1,
            "exercises" => $exercises
        ]);
    }

    public function updateInterviewId(Request $request) {
        $calendar_id = $request->calendar_id;
        $preinterview_id = $request->preinterview_id;
        $postinterview_id = $request->postinterview_id;

        $calendar = AthleteCalendar::find($request->calendar_id);
        if ($request->preinterview_id)
            $calendar->preinterview_id = $request->preinterview_id;

        if ($request->postinterview_id)
            $calendar->postinterview_id = $request->postinterview_id;

        $calendar->save();

        // if post interview, update the testing contents
        if ($request->postinterview_id) {
            // first get interview contents
            $interview = Interview::find($request->postinterview_id);
            $weight = $interview->weight;
            $waist_hip_ratio = number_format($interview->waist / $interview->hip, 2);

            // get level with weight and rm for each post test data and then update post test data
            $postTests = DB::select("SELECT exercise, gender, post_rm FROM athlete_workout_tests WHERE calendar = {$calendar_id}");
            foreach ($postTests as $test) {
                $exercise = $test->exercise;
                $rm = $test->post_rm;
                $forMen = $test->gender == 'male' ? 1 : 0;

                // get standard elite values
                $eliteValues = DB::select("SELECT elite_value FROM strength_standard_values
                                            WHERE exercise = {$exercise} AND for_men = {$forMen} AND weight_min <= {$weight} AND {$weight} <= weight_max
                                            ORDER BY created_at DESC");

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

                // update
                DB::statement("UPDATE athlete_workout_tests SET post_level = '{$level}', post_weight = {$weight}, post_waist_hip_ratio = {$waist_hip_ratio}
                                WHERE calendar = {$calendar_id} AND exercise = {$exercise} ");
            }
        }

        return response()->json([
            "success" => 1
        ]);
    }

    public function uploadExerciseRmsToCalendar(Request $request) {
        $calendar_id = $request->calendar_id;
        $exercise_rms = json_decode($request->exercise_rms);

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

        // update exercise rms
        foreach ($exercise_rms as $rm) {
            DB::statement("UPDATE athlete_workout_details t, athlete_workout t1
                            SET t.rm = {$rm->rm}, t.target_load = ROUND({$rm->rm} * CAST(t.intensity AS DECIMAL(4, 2)) / 100, 2), t.autoreg_load = ROUND({$rm->rm} * CAST(t.intensity AS DECIMAL(4, 2)) / 100, 2)
                            WHERE t.workout = t1.id AND t1.plan IN ({$planIds}) AND t1.exercise = {$rm->id} AND t.intensity IS NOT NULL");
        }

        return response()->json([
            "success" => 1
        ]);

    }
}
