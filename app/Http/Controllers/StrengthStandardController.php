<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class StrengthStandardController extends Controller
{
    public function getStrengthStandardValues(Request $request) {

        $exercise_id = $request->exercise_id;
        $for_men = $request->gender == 'male' ? 1 : 0;

        $query = "SELECT weight_min, weight_max, MAX(elite_value) as elite
                    FROM strength_standard_values
                    WHERE exercise = {$exercise_id} AND for_men = {$for_men}
                    GROUP BY weight_min, weight_max
                    ORDER BY weight_min ASC ";

        $standardValues = DB::select($query);

        return response()->json([
            "success" => 1,
            "result" => $standardValues
        ]);
    }
    public function getStrengthStandardExercises(Request $request) {

        $query = "SELECT DISTINCT(exercise) as exercise_id
                    FROM strength_standard_values
                    ORDER BY exercise_id ASC ";

        $exerciseValues = DB::select($query);

        $exerciseIDList = array();

        foreach ($exerciseValues as $value) {
            array_push($exerciseIDList, $value->exercise_id);
        }

        return response()->json([
            "success" => 1,
            "result" => $exerciseIDList
        ]);
    }

    function getIndexOfRmValue($searchVal, $rmObjs) {
        $index = 0;
        foreach ($rmObjs as $obj) {
            if ($obj->rm == $searchVal) {
                return $index;
            }
            $index++;
        }

        return -1;
    }

    public function getPercentageValuesByFilter(Request $request) {

        $exercise_id = $request->exercise_id;
        $filter = json_decode($request->filter);
        $gender = $filter->gender;
        $rm = $request->rm;

        $combinedWhereQuery = " WHERE t.rm IS NOT NULL AND t.exercise = {$exercise_id} AND t.gender = '{$gender}' ";

        $result = (object)[];
        if (isset($filter->age_min)) {
            $values = DB::select("SELECT t.rm FROM (
                                            SELECT exercise, gender, age, IF(post_rm IS NULL, pre_rm, post_rm) AS rm
                                            FROM athlete_workout_tests
                                        ) t
                                        WHERE t.rm IS NOT NULL AND t.exercise = {$exercise_id} AND t.gender = '{$gender}'
                                            AND {$filter->age_min} <= t.age AND t.age <= {$filter->age_max}
                                        ORDER BY rm ASC ");
            $index = $this->getIndexOfRmValue($rm, $values);
            if ($index === -1) {
                $result->age_ratio = 0;
            } else {
                $result->age_ratio = floor($index * 100 / count($values));
            }

            $combinedWhereQuery .= " AND {$filter->age_min} <= t.age AND t.age <= {$filter->age_max}";
        }

        if (isset($filter->height_min)) {
            $values = DB::select("SELECT t.rm FROM (
                                            SELECT exercise, gender, height, IF(post_rm IS NULL, pre_rm, post_rm) AS rm
                                            FROM athlete_workout_tests
                                        ) t
                                        WHERE t.rm IS NOT NULL AND t.exercise = {$exercise_id} AND t.gender = '{$gender}'
                                            AND {$filter->height_min} <= t.height AND t.height <= {$filter->height_max}
                                        ORDER BY rm ASC ");
            $index = $this->getIndexOfRmValue($rm, $values);
            if ($index === -1) {
                $result->height_ratio = 0;
            } else {
                $result->height_ratio = floor($index * 100 / count($values));
            }

            $combinedWhereQuery .= " AND {$filter->height_min} <= t.height AND t.height <= {$filter->height_max} ";
        }

        if (isset($filter->muscle_type)) {
            $values = DB::select("SELECT t.rm FROM (
                                            SELECT exercise, gender, muscle_type, IF(post_rm IS NULL, pre_rm, post_rm) AS rm
                                            FROM athlete_workout_tests
                                        ) t
                                        WHERE t.rm IS NOT NULL AND t.exercise = {$exercise_id}
                                            AND t.gender = '{$gender}' AND t.muscle_type = '{$filter->muscle_type}'
                                        ORDER BY rm ASC ");
            $index = $this->getIndexOfRmValue($rm, $values);
            if ($index === -1) {
                $result->muscle_type_ratio = 0;
            } else {
                $result->muscle_type_ratio = floor($index * 100 / count($values));
            }

            $combinedWhereQuery .= " AND t.muscle_type = '{$filter->muscle_type}' ";
        }

        if (isset($filter->weight_min)) {
            $values = DB::select("SELECT t.rm FROM (
                                            SELECT exercise, gender,
                                                IF(post_weight IS NULL, ROUND(pre_weight), ROUND(post_weight)) AS weight,
                                                IF(post_rm IS NULL, pre_rm, post_rm) AS rm
                                            FROM athlete_workout_tests
                                        ) t
                                        WHERE t.rm IS NOT NULL AND t.exercise = {$exercise_id} AND t.gender = '{$gender}'
                                            AND {$filter->weight_min} <= t.weight AND t.weight <= {$filter->weight_max}
                                        ORDER BY rm ASC ");
            $index = $this->getIndexOfRmValue($rm, $values);
            if ($index === -1) {
                $result->weight_ratio = 0;
            } else {
                $result->weight_ratio = floor($index * 100 / count($values));
            }

            $combinedWhereQuery .= " AND {$filter->weight_min} <= t.weight AND t.weight <= {$filter->weight_max} ";
        }

        if (isset($filter->waist_hip_ratio_min)) {
            $values = DB::select("SELECT t.rm FROM (
                                            SELECT exercise, gender,
                                                IF(post_waist_hip_ratio IS NULL, pre_waist_hip_ratio, post_waist_hip_ratio) AS waist_hip_ratio,
                                                IF(post_rm IS NULL, pre_rm, post_rm) AS rm
                                            FROM athlete_workout_tests
                                        ) t
                                        WHERE t.rm IS NOT NULL AND t.exercise = {$exercise_id} AND t.gender = '{$gender}'
                                            AND {$filter->waist_hip_ratio_min} <= t.waist_hip_ratio AND t.waist_hip_ratio <= {$filter->waist_hip_ratio_max}
                                        ORDER BY rm ASC ");
            $index = $this->getIndexOfRmValue($rm, $values);
            if ($index === -1) {
                $result->waist_hip_ratio_ratio = 0;
            } else {
                $result->waist_hip_ratio_ratio = floor($index * 100 / count($values));
            }

            $combinedWhereQuery .= " AND {$filter->waist_hip_ratio_min} <= t.waist_hip_ratio AND t.waist_hip_ratio <= {$filter->waist_hip_ratio_max} ";
        }

        if (isset($filter->level)) {
            $values = DB::select("SELECT t.rm FROM (
                                            SELECT exercise, gender,
                                                IF(post_level IS NULL, pre_level, post_level) AS level,
                                                IF(post_rm IS NULL, pre_rm, post_rm) AS rm
                                            FROM athlete_workout_tests
                                        ) t
                                        WHERE t.rm IS NOT NULL AND t.exercise = {$exercise_id} AND t.gender = '{$gender}' AND t.level = '{$filter->level}'
                                        ORDER BY rm ASC ");
            $index = $this->getIndexOfRmValue($rm, $values);
            if ($index === -1) {
                $result->level_ratio = 0;
            } else {
                $result->level_ratio = floor($index * 100 / count($values));
            }

            $combinedWhereQuery .= " AND t.level = '{$filter->level}' ";
        }

        // at least one property exists in the result
        $arrResult = (array)$result;
        $query = "";
        if ($arrResult) {
            $query = "SELECT t.rm FROM (
                            SELECT exercise, gender, age, height, muscle_type,
                                IF(post_weight IS NULL, ROUND(pre_weight), ROUND(post_weight)) AS weight,
                                IF(post_waist_hip_ratio IS NULL, pre_waist_hip_ratio, post_waist_hip_ratio) AS waist_hip_ratio,
                                IF(post_level IS NULL, pre_level, post_level) AS level,
                                IF(post_rm IS NULL, pre_rm, post_rm) AS rm
                            FROM athlete_workout_tests
                        ) t "
                        .$combinedWhereQuery;

            $values = DB::select($query);
            $index = $this->getIndexOfRmValue($rm, $values);
            if ($index === -1) {
                $result->combined_ratio = 0;
            } else {
                $result->combined_ratio = floor($index * 100 / count($values));
            }
        }

        return response()->json([
            "success" => 1,
            "result" => $result,
            "query" => $query
        ]);
    }

    public function getLatestPerformResult(Request $request) {
        $user = auth()->user();

        $query = "SELECT IF(post_weight IS NULL, ROUND(pre_weight), ROUND(post_weight)) AS weight,
                    IF(post_waist_hip_ratio IS NULL, pre_waist_hip_ratio, post_waist_hip_ratio) AS waist_hip_ratio,
                    IF(post_level IS NULL, pre_level, post_level) AS level
                FROM athlete_workout_tests
                WHERE user = {$user->id} AND pre_weight IS NOT NULL AND pre_rm IS NOT NULL
                ORDER BY updated_at DESC
                LIMIT 1 ";
        $results = DB::select($query);

        return response()->json([
            "success" => 1,
            "result" => count($results) > 0 ? $results[0] : []
        ]);
    }
}
