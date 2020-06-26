<?php

namespace App\Http\Controllers;

use App\ExerciseFull;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ExerciseController extends Controller
{

    public function search(Request $request){

        $user = auth()->user();
        $keyword = $request->get('keyword', '');
        $single = null;
        $multi = null;
        $exercise = [];
        if($keyword) {

            $movements = DB::table("movements")->get();
            foreach($movements as $i=>$movement){
                $exercises = DB::select("
                select '' as target_muscles, exercises.id as exercise_code, exercises.`name` exercise_name, exercises.temp_id, exercises.picture, exercises.movement, movements.`name` movement_name
                from (select * from exercises where movement = ".$movement->code." and exercise_info like '%".$keyword."%') exercises left join movements on movements.code = exercises.movement limit 0, 50");


                foreach($exercises as &$exer){
                    $exer->target_muscles = json_encode(DB::select("select muscle_id from exercises_target_muscle where exercise_id = ".$exer->exercise_code));
                    if(!file_exists(public_path()."/images/exercise/".$exer->temp_id.".png")){
                        $exer->picture = "/images/exercise/default.jpg";
                    }else{
                        $exer->picture = "/images/exercise/".$exer->temp_id.".png";
                    }
                }
                array_push($exercise, array("movement"=>$movement->name, "data"=>$exercises));
            }
        } else {

            $movements = DB::table("movements")->get();
            foreach($movements as $i=>$movement){
                $exercises = DB::select("
                select '' as target_muscles, exercises.id as exercise_code, exercises.`name` exercise_name, exercises.temp_id, exercises.picture, exercises.movement, movements.`name` movement_name
                from (select * from exercises where movement = ".$movement->code.") exercises left join movements on movements.code = exercises.movement limit 0, 50");

                foreach($exercises as &$exer){
                    $exer->target_muscles = json_encode(DB::select("select muscle_id from exercises_target_muscle where exercise_id = ".$exer->exercise_code));
                    if(!file_exists(public_path()."/images/exercise/".$exer->temp_id.".png")){
                        $exer->picture = "/images/exercise/default.jpg";
                    }else{
                        $exer->picture = "/images/exercise/".$exer->temp_id.".png";
                    }
                }
                array_push($exercise, array("movement"=>$movement->name, "data"=>$exercises));
            }
        }
        $program_record = DB::table("programs")->where(["user"=>$user->id])->count();
        $program = array();
        if($program_record==0){
            $program = [
                'name' => '',
                'category' => '',
                'split' => '',
                'description' => ''
            ];
        }
        else{
            $program_record = DB::table("programs")->where(["user"=>$user->id])->first();
            $program = [
                'name' => $program_record->name,
                'category' => $program_record->category,
                'split' => $program_record->split,
                'description' => $program_record->description
            ];
        }
        return response()->json([
            "success" => 0,
            "data" => [
                "exercise" => $exercise,
                "program" => $program
            ]
        ]);
    }

    public function removeWorkout(Request $request){
        $workoutId = $request->get('workoutId', null);
        if ($workoutId != null) {
            DB::table('workout')->where(['plan' => $workoutId])->delete();
            DB::table('workout_details')->where(['plan' => $workoutId])->delete();
            DB::table('plan')->where('id', $workoutId)->delete();
        }
        return response()->json([
            "success" => 0
        ]);
    }
    public function addWorkout(Request $request){
        $data = $request->get('data', '');
        $planId = $request->get('planId', null);
        $body_parts = 'temp_parts';

        $user = auth()->user();
        if($planId == null) {
            DB::table('plan')->insert(['body_parts' => $body_parts, 'user' => $user->id]);
            $planId = DB::getPdo()->lastInsertId();
        } else {
            DB::table('workout')->where(['plan' => $planId])->delete();
            DB::table('workout_details')->where(['plan' => $planId])->delete();
        }

        $workoutIds = array();
        foreach($data as $workout){
            array_push($workoutIds, $workout['exercise_code']);
            DB::table('workout')->insert(['exercise' => $workout['exercise_code'], 'plan' => $planId, 'user' => $user->id]);
            $workout_id = DB::getPdo()->lastInsertId();
            foreach($workout['data'] as $workout_details){
                $workout_details['workout'] = $workout_id;
                $workout_details['plan'] = $planId;
                $workout_details['user'] = $user->id;
                DB::table('workout_details')->insert($workout_details);
            }
        }

        $body_parts = DB::select("SELECT B.name FROM exercises_bodypart as A ".
            "LEFT JOIN body_parts as B ON B.id = A.bodypart_id ".
            "WHERE A.exercise_id in (".
            implode(",", $workoutIds).
            ") GROUP BY B.name");

        $body = array();
        foreach($body_parts as $body_part) {
            array_push($body, $body_part->name);
        }

        DB::table('plan')->where("id", $planId)->update(['body_parts' => implode("/", $body)]);

        return response()->json([
            "success" => 0
        ]);
    }

    public function restapi(Request $request){
        $info = $request->get('info', '');
        $user = auth()->user();
        if($info == "get-workout"){
            $workoutId = $request->get('workoutId', null);
            $workouts = DB::select("select workout.id, name, exercise exercise_code, false selected  from (select * from workout where plan = ".$workoutId.") workout LEFT JOIN exercises on exercises.id = workout.exercise");
            $workouts = json_decode(json_encode($workouts), true);
            $result = array();
            foreach($workouts as &$workout){
                $workout_details = DB::table('workout_details')->where(['workout' => $workout['id']])->get();
                $data = array();
                foreach($workout_details as $workout_detail){
                    array_push($data, [
                        'reps' => $workout_detail->reps,
                        'rtf' => $workout_detail->rtf,
                        'rm' => $workout_detail->rm,
                        'method' => $workout_detail->method,
                        'tempo' => $workout_detail->tempo,
                        'rest' => $workout_detail->rest
                    ]);
                }
                $workout['target_muscles'] = json_encode(DB::select("select muscle_id from exercises_target_muscle where exercise_id = ".$workout['exercise_code']));

                $workout['data'] = $data;
            }
            return response()->json([
                "success" => 0,
                "data" => $workouts
            ]);
        }else if($info == "get-plan"){
            $rtn = array();
            $workouts = DB::select("select id, body_parts from plan where user = ".$user->id);
            $calendars = DB::select("select data from calendar where user = ".$user->id);

            $calendar = array();
            foreach($calendars as $cal){
                $data = json_decode($cal->data);
                array_push($calendar, $data);
            }
            return response()->json([
                "success" => 0,
                "calendar" => $calendar,
                "workouts" => $workouts
            ]);
        }else if ($info == "save-program"){
            $calendar = $request->get('calendar', '');
            $program = $request->get('program', '');

            DB::table('programs')->where(['user' => $user->id])->delete();
            DB::table('calendar')->where(['user' => $user->id])->delete();

            $program['user'] = $user->id;
            DB::table('programs')->insert($program);

            foreach($calendar as $data){
                DB::table('calendar')->insert(['data' => json_encode($data), 'user' => $user->id]);
            }
            return response()->json([
                "success" => 0
            ]);
        }

    }
    public function test(Request $request){
        $exercises = DB::select("select * from exercises");

        foreach($exercises as &$exer){
            if(!file_exists(public_path()."/images/exercise/".$exer->temp_id.".png")){
                // $exer->picture = "/images/exercise/default.jpg";
                echo $exer->temp_id." ".$exer->name."<br/>";
            }
        }
        // $exercises = DB::table('list')->get();
        // $bodypart_data = DB::table('body_parts')->get();
        // $bodypart_data_arr = array();
        // foreach($bodypart_data as $data){
        //     $bodypart_data_arr[$data->name] = $data->code;
        // }

        // $equipment_data = DB::table('equipment_types')->get();
        // $equipment_data_arr = array();
        // foreach($equipment_data as $data){
        //     $equipment_data_arr[$data->name] = $data->code;
        // }

        // $muscle_data = DB::table('muscles')->get();
        // $muscle_data_arr = array();
        // foreach($muscle_data as $data){
        //     $muscle_data_arr[$data->name] = $data->code;
        // }
        // $muscle = array();
        // $bodypart = array();
        // $equipment = array();
        // $cnt = 0;
        // foreach($exercises as $exer){
        //     if($exer->Name != ""){
        //         $cnt++;
        //         $exer->Target = str_replace(" , ",", ",$exer->Target);
        //         $exer->Synergist = str_replace(" , ",", ",$exer->Synergist);
        //         if(substr($exer->Synergist, strlen($exer->Synergist) - 1, 1) == " "){
        //             $exer->Synergist = substr($exer->Synergist, 0, strlen($exer->Synergist) - 1);
        //         }
        //         if(substr($exer->Target, strlen($exer->Target) - 1, 1) == " "){
        //             $exer->Target = substr($exer->Target, 0, strlen($exer->Target) - 1);
        //         }

        //         // $movement = 4;
        //         // if($exer->Equipment == "Barbell" || $exer->Equipment == "EZ Barbell" || $exer->Equipment == "Olympic barbell" ){
        //         //     $movement = 1;
        //         // }else if($exer->Equipment == "Dumbbell"){
        //         //     $movement = 2;
        //         // }else if($exer->Equipment == "Cable" || $exer->Equipment == "Leverage machine" || $exer->Equipment == "Leverage machine, Resistance Band" || $exer->Equipment == "Sled machine" || $exer->Equipment == "Smith machine"){
        //         //     $movement = 3;
        //         // }
        //         // $picture = "images/exercise/".$exer->tempID."1103-".str_replace(" ","-",$exer->Name)."_".str_replace(" ","_",$exer->BodyPart)."_VIEW.jpg";
        //         // DB::table('exercises')->insert(array('name'=>$exer->Name, 'picture'=>$picture, 'temp_id'=>$exer->tempID, 'movement'=>$movement, 'exercise_info'=>($exer->Name." ".$exer->BodyPart." ".$exer->Target)));
        //         // echo $picture."<br/>";
        //         // $exer->Target = str_replace("arms", "Arms", $exer->Target);
        //         // $exer->Synergist = str_replace("arms", "Arms", $exer->Synergist);
        //         $exer->BodyPart = str_replace("Upper arms", "Upper Arms", $exer->BodyPart);
        //         if($exer->Target != ""){
        //             $temp = explode(", ", $exer->Target);
        //             foreach($temp as $t){
        //                 DB::table('exercises_target_muscle')->insert(array('exercise_id'=>$cnt, 'muscle_id'=>$muscle_data_arr[$t]));
        //                 $muscle[$t] = $exer->tempID;
        //             }
        //         }

        //         if($exer->Synergist != ""){
        //             $temp = explode(", ", $exer->Synergist);
        //             foreach($temp as $t){
        //                 DB::table('exercises_synergist_muscle')->insert(array('exercise_id'=>$cnt, 'muscle_id'=>$muscle_data_arr[$t]));
        //                 $muscle[$t] = $exer->tempID;
        //             }
        //         }
        //         if($exer->BodyPart != ""){
        //             $temp = explode(", ", $exer->BodyPart);
        //             foreach($temp as $t){
        //                 DB::table('exercises_bodypart')->insert(array('exercise_id'=>$cnt, 'bodypart_id'=>$bodypart_data_arr[$t]));
        //                 $bodypart[$t] = 1;
        //             }
        //         }


        //         if($exer->Equipment != ""){
        //             $temp = explode(", ", $exer->Equipment);
        //             foreach($temp as $t){
        //                 DB::table('exercises_equipment')->insert(array('exercise_id'=>$cnt, 'equipment_id'=>$equipment_data_arr[$t]));
        //                 $equipment[$t] = 1;
        //             }
        //         }
        //     }
        // }
        // $cnt = 0;
        // foreach($equipment as $i=>$data){
        //     if($i != ""){
        //         $cnt++;
        //         DB::table('equipment_types')->insert(array('name'=>$i, 'code'=>$cnt));
        //         echo $i."<br/>";
        //     }
        // }
        // foreach($bodypart as $i=>$data){
        //     if($i != ""){
        //         $cnt++;
        //         DB::table('body_parts')->insert(array('name'=>$i, 'code'=>$cnt));
        //         echo $i."<br/>";
        //     }
        // }
        // foreach($muscle as $i=>$data){
        //     if($i != ""){
        //         $cnt++;
        //         DB::table('muscles')->insert(array('name'=>$i, 'code'=>$cnt));
        //         echo $i."k".$data."<br/>";
        //     }
        // }

    }
}
