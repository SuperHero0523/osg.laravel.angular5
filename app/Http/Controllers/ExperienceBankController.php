<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ExperienceBankController extends Controller
{
    public function getTopPrograms(Request $request) {

        $muscle_group = $request->muscle_group;
        $exercise_id = $request->exercise_id;
        $filter = json_decode($request->filter);

        if ($exercise_id == 0) {
            $query = "SELECT t2.user AS designer_id, t2.name, t.increased
                        FROM athlete_workout_tests t, athlete_calendar t1, programs t2, exercises_bodypart t3
                        WHERE t.pre_rm IS NOT NULL AND t.calendar = t1.id AND t1.program_id = t2.id
                            AND t.exercise = t3.exercise_id AND t3.bodypart_id = {$muscle_group}";
        } else {
            $query = "SELECT t2.user AS designer_id, t2.name, t.increased
                    FROM athlete_workout_tests t, athlete_calendar t1, programs t2
                    WHERE t.pre_rm IS NOT NULL AND t.calendar = t1.id AND t1.program_id = t2.id AND t.exercise = {$exercise_id} ";
        }

        if (isset($filter->gender)) {
            $query .= " AND t.gender = '{$filter->gender}'";
        }
        if (isset($filter->age_min)) {
            $query .= " AND {$filter->age_min} <= t.age AND t.age <= {$filter->age_max}";
        }
        if (isset($filter->height_min)) {
            $query .= " AND {$filter->height_min} <= t.height AND t.height <= {$filter->height_max}";
        }
        if (isset($filter->muscle_type)) {
            $query .= " AND t.muscle_type = '{$filter->muscle_type}'";
        }
        if (isset($filter->weight_min)) {
            $query .= " AND {$filter->weight_min} <= t.pre_weight AND t.pre_weight <= {$filter->weight_max}";
        }
        if (isset($filter->waist_hip_ratio_min)) {
            $query .= " AND {$filter->waist_hip_ratio_min} <= t.pre_waist_hip_ratio AND t.pre_waist_hip_ratio <= {$filter->waist_hip_ratio_max}";
        }
        if (isset($filter->level) && $filter->level != 'All') {
            $query .= " AND t.pre_level = '{$filter->level}'";
        }

        $query .= " ORDER BY increased DESC LIMIT 3";

        $topPrograms = DB::select($query);

        return response()->json([
            "success" => 1,
            "top_programs" => $topPrograms,
            // "query" => $query
        ]);
    }
}
