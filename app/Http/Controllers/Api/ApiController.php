<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;

use App\Http\Controllers\Controller;
use App\Models\Athletes;
use App\Models\Trainers;
use App\Models\Designers;

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
	
	public function getUserProfile(Request $request) {
		$req = $request->user();
		if ($req->role == "PersonalTrainer") {
			$req['profile'] = Trainers::where('user_id', $req->id)->first();
		} else if ($req->role == "ProgramDesigner") {
			$req['profile'] = Designers::where('user_id', $req->id)->first();
		} else {
			$req['profile'] = Athletes::where('user_id', $req->id)->first();
		}
		return $req;
	}
}
