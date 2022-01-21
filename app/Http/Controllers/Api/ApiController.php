<?php

namespace App\Http\Controllers\Api;

use App\Models\Friends;
use Illuminate\Http\Request;

use App\Http\Controllers\Controller;
use App\Models\Athletes;
use App\Models\Trainers;
use App\Models\Designers;
use App\Models\User;
use Illuminate\Support\Facades\DB;

class ApiController extends Controller
{
    public function uploadPhoto(Request $request) {
        if ($request->file('file')->isValid()){
			$url = url("/assets/uploads/profile_logo") ."/" . $request->file->store('', 'profile_logo');
			$arr = explode("/", $url);
			$path = "/".$arr[3]."/".$arr[4]."/".$arr[5]."/".$arr[6];
			return response()->json($path);
		} else {
			return ["error" => "No image attached"];
		}
	}

    public function alreadyEmail(Request $request) {
        $email = $request->get('email', "");
        $users = User::where('email', '=', $email);
        return $users->count();
    }

	public function getUserProfile(Request $request) {

		$req = $request->user();
        if (isset($request->id))
            $user = User::find($request->id);

        $is_friend = 0;

        if (isset($user)) {
            if ($req->id == $user->id) {
                $is_friend = 2;
                $friend_id = $user->id;
            } else {
                $my_id = $req->id;
                $friend_id = $user->id;
                $friend = Friends::where('is_allow', '>', 0)
                            ->where(function($query) use ($my_id, $friend_id) {
                                $query->where(function($query) use ($my_id, $friend_id) {
                                                $query->where('from_user_id', $my_id)
                                                    ->where('to_user_id', $friend_id);
                                        })->orWhere(function($query) use ($my_id, $friend_id) {
                                                $query->where('to_user_id', $my_id)
                                                    ->where('from_user_id', $friend_id);
                                        });
                            })->first();

                if (isset($friend))
                    $is_friend = $friend->is_allow;
                else
                    $is_friend = 0;
            }

            if ($user->role == "PersonalTrainer") {
                $result = Trainers::where('user_id', $friend_id)->first();
            } else if ($user->role == "ProgramDesigner") {
                $result = Designers::where('user_id', $friend_id)->first();
            } else {
                $result = Athletes::where('user_id', $friend_id)->first();
            }
        } else {
            $is_friend = 2;
            if ($req->role == "PersonalTrainer") {
                $result = Trainers::where('user_id', $req->id)->first();
            } else if ($req->role == "ProgramDesigner") {
                $result = Designers::where('user_id', $req->id)->first();
            } else {
                $result = Athletes::where('user_id', $req->id)->first();
            }
        }

        $result['is_friend'] = $is_friend;
        $req['profile'] = $result;

		return $req;
	}

    public function searchProfile(Request $request) {
        $searchText = $request->searchText;
        $searchText = "okok";
        return $searchText;
    }

    public function getMainMuscleGroups(Request $request) {
        $muscleGroups = DB::select("SELECT id, name FROM body_parts WHERE id IN (2, 3, 4, 5, 7, 9)");
        return response()->json([
            "success" => 1,
            "muscleGroups" => $muscleGroups,
        ]);
    }

    public function getExercisesByBodypart(Request $request) {
        $bodypart_id = $request->bodypart_id;

        $bodypartWhere = " AND t1.bodypart_id = {$bodypart_id}";
        if ($bodypart_id == -1) {
            $bodypartWhere = "";
        }

        $exercises = DB::select("SELECT t.id, t.name
        FROM exercises t,
            (
                SELECT t.exercise
                FROM (SELECT DISTINCT(exercise) AS exercise FROM strength_standard_values) t, exercises_bodypart t1
                WHERE t.exercise = t1.exercise_id {$bodypartWhere}
            ) t1
        WHERE t.id = t1.exercise");


        return response()->json([
            "success" => 1,
            "exercises" => $exercises,
        ]);
    }
}
