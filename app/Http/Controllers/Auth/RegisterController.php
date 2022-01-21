<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use App\Services\UserService;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\URL;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

use App\Mail\UserRegister;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = '/';

    protected $service;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(UserService $service)
    {
        $this->middleware('guest');
        $this->service = $service;
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6|confirmed'
        ]);
    }

    /**
     *
     * @param [type] $user_id
     * @return void
     */
    protected function registerTrainerOffers($user_id) {
        DB::statement("INSERT INTO trainer_offers(user_id, offer_type, title, hours, price, image_url)
                            VALUES ({$user_id}, 1, 'pt basic', 5, 2500, ''),
                                    ({$user_id}, 2, 'pt premium', 10, 4700, ''),
                                    ({$user_id}, 3, 'pt pro', 15, 6750, ''),
                                    ({$user_id}, 4, 'pt business', 20, 8600, '');");
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\User
     */
    protected function register(Request $request) {
        $data = $request->all();
        $rules = array(
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        );
        $validator = Validator::make($data, $rules);
        if ($validator->fails()) {
            return Redirect::back()->withErrors($validator);
        } else {
            $user = $this->service->register($data);
            if ($user->role == 'PersonalTrainer') {
                $this->registerTrainerOffers($user->id);
            }
            $link = URL::route('account-activate', $user->api_token);
            Mail::to($data['email'])->send(new UserRegister($data['name'], $link));
            toast('Thank you for your registration we will inform you once our web app is ready to go live.','success');
            return Redirect::to('/');
        }
    }
}
