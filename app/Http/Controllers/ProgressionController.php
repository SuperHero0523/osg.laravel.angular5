<?php

namespace App\Http\Controllers;

use App\Models\AthleteCalendar;
use App\Models\Programs;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProgressionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    public function getCalendarData(Request $request) {
        $program_id = $request['program_id'];
        $user = auth()->user();

        if (isset($request['user_id']))
            $user->id = $request['user_id'];

        $result = DB::table('calendar')->where('user', $user->id)->where('program_id', $program_id)->get();
        return response()->json([
            'weeks' => $result,
            'program_id' => $program_id
        ]);
    }

    public function getPlan(Request $request) {
        $program_id = $request['program_id'];
        $user = auth()->user();

        if (isset($request['user_id']))
            $user->id = $request['user_id'];

        $result = DB::table('plan')->where('user', $user->id)->where('program_id', $program_id)->get();
        return response()->json([
            'data' => $result,
            'program_id' => $program_id
        ]);
    }

    public function getWorkouts(Request $request) {

        $program_id = $request['program_id'];
        $user = auth()->user();

        if (isset($request['user_id']))
            $user->id = $request['user_id'];

        $exercises = DB::table('exercises')
            ->leftJoin('exercises_bodypart', 'exercises.id', '=', 'exercises_bodypart.exercise_id')
            ->leftJoin('exercises_equipment', 'exercises.id', '=', 'exercises_equipment.exercise_id')
            ->select('exercises.*', 'exercises_bodypart.bodypart_id', 'exercises_equipment.equipment_id');

        $bodyparts = DB::table('body_parts')
            ->rightJoinSub($exercises, 'exercises', function($join){
                $join->on('exercises.bodypart_id', '=', 'body_parts.id');
            })
            ->select('exercises.*', 'body_parts.name as bodypart_name');

        $equipments = DB::table('equipment_types')
            ->rightJoinSub($bodyparts, 'exercises', function($join){
                $join->on('exercises.equipment_id', '=', 'equipment_types.id');
            })
            ->select('exercises.*', 'equipment_types.name as equipment_name');

        $sub = DB::table('workout')
            ->leftJoinSub($equipments, 'exercises', function($join){
                $join->on('workout.exercise', '=', 'exercises.id');
            })
            ->select('workout.*', 'exercises.name', 'exercises.movement', 'exercises.bodypart_name', 'exercises.equipment_name')
            ->where('workout.program_id', $program_id);

        $result = DB::table('workout_details')
            ->rightJoinSub($sub, 'sub', function($join) {
                $join->on('workout_details.workout', '=', 'sub.id');
            })
            ->select('workout_details.*', 'workout_details.id as detail_id', 'sub.*')
            ->where('workout_details.user', $user->id)
            ->get();

        return response()->json([
            'data' => $result
        ]);
    }

    public function getProgressionCalendarData(Request $request) {
        $program_id = $request['program_id'];
        $user = auth()->user();

        if (isset($request['user_id']))
            $user->id = $request['user_id'];

        $result = DB::table('progression_calendar')->where('user', $user->id)->where('program_id', $program_id)->get();
        return response()->json([
            'weeks' => $result,
            'program_id' => $program_id
        ]);
    }

    public function getProgressionModels(Request $request) {
        $program_id = $request['program_id'];

        $query = "  SELECT t.bodypart_id, t1.name AS bodypart_name, t.progression_model
                    FROM programs_progression_model t, body_parts t1
                    WHERE t.bodypart_id = t1.id AND t.program_id = {$program_id}";

        $result = DB::select($query);

        return response()->json([
            'result' => $result,
            'success' => true
        ]);
    }

    public function getProgressionPlan(Request $request) {
        $program_id = $request['program_id'];
        $user = auth()->user();

        if (isset($request['user_id']))
            $user->id = $request['user_id'];

        $result = DB::table('progression_plan')->where('user', $user->id)->where('program_id', $program_id)->get();
        return response()->json([
            'data' => $result,
            'program_id' => $program_id
        ]);
    }

    public function getProgressionWorkouts(Request $request) {
        $program_id = $request['program_id'];
        $user = auth()->user();

        if (isset($request['user_id']))
            $user->id = $request['user_id'];


        $exercises = DB::table('exercises')
            ->leftJoin('exercises_bodypart', 'exercises.id', '=', 'exercises_bodypart.exercise_id')
            ->leftJoin('exercises_equipment', 'exercises.id', '=', 'exercises_equipment.exercise_id')
            ->select('exercises.*', 'exercises_bodypart.bodypart_id', 'exercises_equipment.equipment_id');

        $bodyparts = DB::table('body_parts')
            ->rightJoinSub($exercises, 'exercises', function($join){
                $join->on('exercises.bodypart_id', '=', 'body_parts.id');
            })
            ->select('exercises.*', 'body_parts.name as bodypart_name');

        $equipments = DB::table('equipment_types')
            ->rightJoinSub($bodyparts, 'exercises', function($join){
                $join->on('exercises.equipment_id', '=', 'equipment_types.id');
            })
            ->select('exercises.*', 'equipment_types.name as equipment_name');

        $sub = DB::table('progression_workout')
            ->leftJoinSub($equipments, 'exercises', function($join){
                $join->on('progression_workout.exercise', '=', 'exercises.id');
            })
            ->select('progression_workout.*', 'exercises.name', 'exercises.movement', 'exercises.bodypart_name', 'exercises.equipment_name')
            ->where('progression_workout.program_id', $program_id);

        $result = DB::table('progression_workout_details')
            ->rightJoinSub($sub, 'sub', function($join) {
                $join->on('progression_workout_details.workout', '=', 'sub.id');
            })
            ->select('progression_workout_details.*', 'progression_workout_details.id as detail_id', 'sub.*')
            ->where('progression_workout_details.user', $user->id)
            ->get();

        return response()->json([
            'data' => $result
        ]);
    }

    public function getWeekTypes(Request $request) {
        $program_id = $request['program_id'];
        $user = auth()->user();

        $weekTypes = array();
        $result = DB::table('progression_calendar')->where('program_id', $program_id)->get();
        foreach($result as $weekInfo) {
            array_push($weekTypes, $weekInfo->week_type);
        }

        return response()->json([
            'week_types' => $weekTypes
        ]);
    }

    public function getCalendarExercises(Request $request) {

        $program_id = $request['program_id'];
        $user = auth()->user();

        $weeks = DB::table('calendar')
                ->select('data')
                ->where('user', $user->id)
                ->where('program_id', $program_id)
                ->get();

        $workouts = DB::table('workout')
            ->select('workout.id', 'workout.exercise', 'workout.plan')
            ->where('workout.program_id', $program_id)->get();

        return response()->json([
            'weeks' => $weeks,
            'workouts' => $workouts,
        ]);
    }

    public function duplicateFromCalendarBuilder(Request $request) {
        $program_id = $request['program_id'];
        $user = auth()->user();

        $result = DB::table('progression_calendar')->where('program_id', $program_id)->get();

        $program_info = Programs::find($program_id);
        if ($program_info->is_saved == 1) {

            // remove all existing workouts
            if ($result->count() > 0) {

                $plans = "";
                foreach ($result as $week) {
                    $weekData = json_decode($week->data);
                    foreach ($weekData as $plan) {
                        if ($plan == null || $plan == "null" || $plan == "")    continue;

                        if (strpos($plans, chr($plan)) === false) {
                            $plans .= ($plans === "") ? "" : ",";
                            $plans .= $plan;
                        }
                    }
                }

                DB::statement("DELETE FROM progression_workout_details WHERE plan IN ({$plans})");
                DB::statement("DELETE FROM progression_workout WHERE program_id = {$program_id}");
                DB::statement("DELETE FROM progression_calendar WHERE program_id = {$program_id}");
            }

            // make new workouts
            $weeks = DB::table('calendar')->where('user', $user->id)->where('program_id', $program_id)->get();
            foreach($weeks as $tmp) {
                $week = json_decode($tmp->data);
                $data = [];
                foreach ($week as $day) {
                    if ($day != null) {
                        $plan = DB::table('plan')->where('id', $day)->get()->first();
                        $plan_id = DB::table('progression_plan')->insertGetId([
                            'body_parts' => $plan->body_parts,
                            'user' => $plan->user,
                            'program_id' => $program_id
                        ]);
                        $data[] = $plan_id;

                        $workouts = DB::table('workout')->where('user', $user->id)->where('plan', $plan->id)->get();
                        foreach($workouts as $workout) {
                            $workout_id = DB::table('progression_workout')->insertGetId([
                                'exercise' => $workout->exercise,
                                'plan' => $plan_id,
                                'user' => $user->id,
                                'program_id' => $program_id
                            ]);

                            $workout_details = DB::table('workout_details')->where('user', $user->id)->where('workout', $workout->id)->get();
                            foreach($workout_details as $workout_detail) {
                                DB::table('progression_workout_details')->insert([
                                    'plan' => $plan_id,
                                    'workout' => $workout_id,
                                    'user' => $user->id,
                                    'reps' => $workout_detail->reps,
                                    'rtf' => $workout_detail->rtf,
                                    'rm' => $workout_detail->rm,
                                    'method' => $workout_detail->method,
                                    'tempo' => $workout_detail->tempo,
                                    'rest' => $workout_detail->rest
                                ]);
                            }
                        }
                    } else {
                        $data[] = null;
                    }
                }
                $tmp->data = json_encode($data);

                DB::table('progression_calendar')->insert([
                    'user' => $user->id,
                    'program_id' => $program_id,
                    'data' => $tmp->data,
                    'week_type' => $tmp->week_type
                ]);
            }
        }

        $weeks = DB::table('progression_calendar')->where('user', $user->id)->where('program_id', $program_id)->get();
        $plans = DB::table('progression_plan')->where('user', $user->id)->where('program_id', $program_id)->get();
        // $workouts = DB::table('progression_workout')->where('user', $user->id)->where('program_id', $program_id)->get();

        $exercises = DB::table('exercises')
            ->leftJoin('exercises_bodypart', 'exercises.id', '=', 'exercises_bodypart.exercise_id')
            ->leftJoin('exercises_equipment', 'exercises.id', '=', 'exercises_equipment.exercise_id')
            ->select('exercises.*', 'exercises_bodypart.bodypart_id', 'exercises_equipment.equipment_id');

        $bodyparts = DB::table('body_parts')
            ->rightJoinSub($exercises, 'exercises', function($join){
                $join->on('exercises.bodypart_id', '=', 'body_parts.id');
            })
            ->select('exercises.*', 'body_parts.name as bodypart_name');

        $equipments = DB::table('equipment_types')
            ->rightJoinSub($bodyparts, 'exercises', function($join){
                $join->on('exercises.equipment_id', '=', 'equipment_types.id');
            })
            ->select('exercises.*', 'equipment_types.name as equipment_name');

        $sub = DB::table('progression_workout')
            ->leftJoinSub($equipments, 'exercises', function($join){
                $join->on('progression_workout.exercise', '=', 'exercises.id');
            })
            ->select('progression_workout.*', 'exercises.name', 'exercises.movement', 'exercises.bodypart_name', 'exercises.equipment_name')
            ->where('progression_workout.program_id', $program_id);

        $workouts = DB::table('progression_workout_details')
            ->rightJoinSub($sub, 'sub', function($join) {
                $join->on('progression_workout_details.workout', '=', 'sub.id');
            })
            ->select('progression_workout_details.*', 'progression_workout_details.id as detail_id', 'sub.*')
            ->where('progression_workout_details.user', $user->id)
            ->get();

        return response()->json([
            'program_id' => $program_id,
            'weeks' => $weeks,
            'plans' => $plans,
            'workouts' => $workouts,
            'result' => $result
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
