<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProgramDesignsController extends Controller
{
    public function getRecommendedPrograms(Request $request) {
        $user_id = auth()->user()->id;

        $condition = json_decode($request->condition);

        $category = $condition->category;
        $split = $condition->split;
        $bSplitMax = false;
        if (str_contains($split, '+')) {
            $split = explode("+", $split)[0];
            $bSplitMax = true;
        }

        $workoutsPerWeek = $condition->workoutsPerWeek;
        $workoutsPerWeekMin = 0;
        $workoutsPerWeekMax = 100;
        if (!empty($workoutsPerWeek)) {
            if (str_contains($workoutsPerWeek, '+')) {
                $workoutsPerWeekMin = explode('+', $workoutsPerWeek)[0];
            } else if (str_contains($workoutsPerWeek, '-')) {
                $workoutsPerWeekMin = explode('-', $workoutsPerWeek)[0];
                $workoutsPerWeekMax = explode('-', $workoutsPerWeek)[1];
            }
        }

        $weeks = $condition->weeks;
        $weeksMin = 0;
        $weeksMax = 100;
        if (!empty($weeks)) {
            if (str_contains($weeks, '+')) {
                $weeksMin = explode('+', $weeks)[0];
            } else if (str_contains($weeks, '-')) {
                $weeksMin = explode('-', $weeks)[0];
                $weeksMax = explode('-', $weeks)[1];
            }
        }

        $bodyPart = $condition->bodyPart;
        $bodyPartName = $condition->bodyPartName;
        $testExercise = $condition->testExercise;
        $exerciseType = $condition->exerciseType;
        $progressionModel = $condition->progressionModel;

        $result = array();
        $nonReviewPrograms = array();

        // first, get programs from programs table according to category, split conditions
        // $programsWhereQuery = "WHERE user = {$user_id} ";
        $programsWhereQuery = "WHERE is_published = 1 ";
        if (!empty($category)) {
            $categoryWhere = "";
            if ($category->strength) {
                $categoryWhere .= "category = 'strength'";
            }
            if ($category->hypertrophy) {
                $categoryWhere .= empty($categoryWhere) ? "" : " OR ";
                $categoryWhere .= "category = 'hypertrophy'";
            }
            if ($category->muscular) {
                $categoryWhere .= empty($categoryWhere) ? "" : " OR ";
                $categoryWhere .= "category = 'muscular'";
            }
            if ($category->power) {
                $categoryWhere .= empty($categoryWhere) ? "" : " OR ";
                $categoryWhere .= "category = 'power'";
            }
            if (!empty($categoryWhere))
                $programsWhereQuery .= " AND ({$categoryWhere}) ";
        }
        if (!empty($split)) {
            if ($bSplitMax)
                $programsWhereQuery .= " AND split >= {$split} ";
            else
                $programsWhereQuery .= " AND split = {$split} ";
        }

        $programsQuery = "SELECT id, name, user FROM programs " . $programsWhereQuery;
        $programs = DB::select($programsQuery);

        // next, filter programs from workouts per week, weeks, bodypart conditions
        for ($i = count($programs) - 1; $i >= 0; $i--) {
            $programId = $programs[$i]->id;

            // filter by workouts per week and weeks
            if (!empty($workoutsPerWeek) || !empty($weeks)) {
                $calendar = DB::select("SELECT data FROM progression_calendar WHERE program_id = {$programId}");

                // filter by weeks
                if (!empty($weeks)
                    && (count($calendar) < $weeksMin || $weeksMax < count($calendar))) {
                    // array_splice($programs, $i, 1);
                    continue;
                }

                // filter by workouts per week
                if (!empty($workoutsPerWeek)) {
                    $totalWorkouts = 0;
                    foreach ($calendar as $week) {
                        $data = json_decode($week->data);
                        foreach ($data as $id) {
                            if ($id == null || $id == 'null')   continue;

                            $totalWorkouts++;
                        }
                    }
                    $averageWorkouts = ceil($totalWorkouts / count($calendar));
                    $programs[$i]->averageWorkouts = $averageWorkouts;
                    if ($averageWorkouts < $workoutsPerWeekMin || $workoutsPerWeekMax < $averageWorkouts) {
                        // array_splice($programs, $i, 1);
                        continue;
                    }
                }
            }

            $planIds = "";
            $bodyParts = DB::select("SELECT id, body_parts FROM progression_plan WHERE program_id = {$programId}");
            foreach ($bodyParts as $record) {
                $planIds .= empty($planIds) ? $record->id : ",".$record->id;
            }

            // next, filter by test exercises
            if ($bodyPart != -1) {
                $contained = false;
                foreach ($bodyParts as $record) {
                    if (str_contains($record->body_parts, $bodyPartName))
                        $contained = true;
                }

                if (!$contained) {
                    // array_splice($programs, $i, 1);
                    continue;
                }

                // method 3 is test exercise
                if ($testExercise != -1) {
                    $daysQuery = "SELECT t1.exercise
                                FROM progression_workout t1, progression_workout_details t2
                                WHERE t1.plan IN ({$planIds}) AND t1.id = t2.workout AND t2.method = '3' AND t1.exercise = {$testExercise}";
                    $workoutDays = DB::select($daysQuery);
                    if (count($workoutDays) == 0) {
                        // array_splice($programs, $i, 1);
                        continue;
                    }
                }
            }

            // next, filter by exercise type
            $movements = "";
            if ($exerciseType->barbell) {
                $movements = "1";
            }
            if ($exerciseType->dumbbell) {
                $movements .= empty($movements) ? "" : ",";
                $movements .= "2";
            }
            if ($exerciseType->cableMachine) {
                $movements .= empty($movements) ? "" : ",";
                $movements .= "3";
            }
            if ($exerciseType->other) {
                $movements .= empty($movements) ? "" : ",";
                $movements .= "4";
            }

            if (!empty($movements)) {
                $exerciseTypeQuery = "SELECT t.id
                                    FROM exercises t, progression_workout t1
                                    WHERE t1.plan IN ({$planIds}) AND t1.exercise = t.id AND t.movement IN ({$movements}) ";
                $exercises = DB::select($exerciseTypeQuery);
                if (count($exercises) == 0) {
                    // array_splice($programs, $i, 1);
                    continue;
                }
            }

            // last, filter by progression model
            $whereQuery = " WHERE program_id = {$programId} ";
            $modelWhereQuery = "";
            if ($progressionModel->intensity) {
                $modelWhereQuery = "progression_model LIKE '%Intensity%' ";
            }
            if ($progressionModel->volume) {
                $modelWhereQuery .= empty($modelWhereQuery) ? "" : " OR ";
                $modelWhereQuery .= " progression_model LIKE '%Volume%' ";
            }
            if ($progressionModel->frequency) {
                $modelWhereQuery .= empty($modelWhereQuery) ? "" : " OR ";
                $modelWhereQuery .= " progression_model LIKE '%Frequency%' ";
            }

            if (!empty($modelWhereQuery)) {
                $whereQuery .= " AND (" . $modelWhereQuery . ") ";

                $models = DB::select("SELECT id FROM programs_progression_model ".$whereQuery);
                if (count($models) == 0) {
                    array_splice($programs, $i, 1);
                    continue;
                }
            }

            // get reviews
            $reviews = DB::select("SELECT user_name, content_text, score, updatedAt FROM reviews WHERE program_id = {$programId}");

            $programInfo = (object)[];
            $programInfo->designer_id = $programs[$i]->user;
            $programInfo->name = $programs[$i]->name;
            $programInfo->reviews = $reviews;

            if (count($reviews)) {
                // get average score
                $average = DB::select("SELECT CEIL(AVG(score)) AS avg_score FROM reviews WHERE program_id = {$programId}");
                $programInfo->average = $average[0]->avg_score;

                // array_push($result, $programInfo);

                $index = -1;
                for ($j = count($result) - 1; $j >= 0; $j--) {
                    if ($result[$j]->average < $programInfo->average) {
                        $index = $j;
                        break;
                    }
                }
                if ($index == -1)
                    array_push($result, $programInfo);
                else
                    array_splice($result, $index - 1, 0, array($programInfo));
            } else {
                array_push($nonReviewPrograms, $programInfo);
            }
        }

        $result = array_merge($result, $nonReviewPrograms);
        array_splice($result, 3);

        return response()->json([
            "success" => 1,
            "result" => $result,
            "programs" => $programs
        ]);
    }
}
