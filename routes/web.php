<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::post('login', ['as' => 'login.post', 'uses' => 'Auth\LoginController@login']);
Route::post('register', ['as' => 'register', 'uses' => 'Auth\RegisterController@register']);

Route::get('/', 'Frontend\PagesController@index')->name("home");

Route::get('/register-page', 'Frontend\PagesController@register')->name("register-page");
Route::get('/login-page', 'Frontend\PagesController@login')->name("login-page");

Route::get('/about', 'Frontend\PagesController@about')->name("about");
Route::get('/how-it-works', 'Frontend\PagesController@howItWorks')->name("how-it-works");
Route::get('/features', 'Frontend\PagesController@features')->name("features");
Route::get('/tos', 'Frontend\PagesController@features')->name("tos");
Route::get('/privacy', 'Frontend\PagesController@features')->name("privacy");
Route::get('/account-activate/{code}', 'Frontend\PagesController@verify')->name('account-activate');
Route::get('/test', 'ExerciseController@test');

Auth::routes(['verify' => true]);

Route::post('/register/step1', 'Frontend\PagesController@signupStep1')->name('register-step');
Route::post('/profile-photo', 'Api\ApiController@uploadPhoto');
Route::post('/already-email', 'Api\ApiController@alreadyEmail');

Route::get('/strength-athlete', 'Frontend\PagesController@strengthAthlete')->name("strength-athlete");
Route::get('/program-designer', 'Frontend\PagesController@programDesigner')->name("program-designer");
Route::get('/personal-trainer', 'Frontend\PagesController@personalTrainer')->name("personal-trainer");

// profile apis
Route::post('/profile/search', 'ProfileController@search');
Route::post('/profile/requestFriend', 'ProfileController@requestFriend');

// program designer profile apis
Route::get('/profile/calendarWorkoutLogs', 'ProfileController@getCalendarWorkoutLogs');

// strength athlete profile apis
Route::get('/profile/calendarWorkoutLogsWithBodypartName', 'ProfileController@getCalendarWorkoutLogsWithBodypartName');
Route::post('/profile/addToAthleteCalendar', 'ProfileController@addToAthleteCalendar');
Route::get('/profile/getWorkouts', 'ProfileController@getWorkouts');
Route::get('/profile/getTrainers', 'ProfileController@getTrainers');
Route::post('/profile/setTrainer', 'ProfileController@setTrainer');
Route::post('/profile/removeTrainer', 'ProfileController@removeTrainer');
Route::post('/profile/moveCalendar', 'ProfileController@moveCalendar');

Route::get('/profile/getExperienceBank', 'ProfileController@getExperienceBank');
Route::get('/profile/getMainMuscleGroupAndExercises', 'ProfileController@getMainMuscleGroupAndExercises');
Route::get('/profile/getTrophyInformation', 'ProfileController@getTrophyInformation');
Route::get('/profile/getTimeLine', 'ProfileController@getTimeLine');
Route::get('/profile/getTopPrograms', 'ProfileController@getTopPrograms');
Route::get('/profile/getSortValuesForAthlete', 'ProfileController@getSortValuesForAthlete');
Route::get('/profile/getSortValuesForDesigner', 'ProfileController@getSortValuesForDesigner');
Route::post('/profile/getExpectedData', 'ProfileController@getExpectedData');
Route::get('/profile/getTopThreeData', 'ProfileController@getTopThreeData');
Route::post('/profile/saveProfile', 'ProfileController@saveProfile');

Route::post('/contacts/getFriends', 'ContactsController@getFriends');
Route::post('/contacts/acceptFriend', 'ContactsController@acceptFriend');
Route::post('/contacts/setNotification', 'ContactsController@setNotification');

Route::post('/search/exercise', 'ExerciseController@search');
Route::post('/add/workout', 'ExerciseController@addWorkout');
Route::post('/remove/workout', 'ExerciseController@removeWorkout');
Route::post('/program/restapi', 'ExerciseController@restapi');

Route::get('/newsfeed/getNewsfeeds', 'NewsfeedController@getNewsfeeds');
Route::post('/newsfeed/setNewsfeed', 'NewsfeedController@setNewsfeed');
Route::post('/newsfeed/deleteParentNewsfeed', 'NewsfeedController@deleteParentNewsfeed');
Route::post('/newsfeed/updateNewsfeed', 'NewsfeedController@updateNewsfeed');
Route::get('/newsfeed/loadMoreComments', 'NewsfeedController@loadMoreComments');

Route::get('/progression/getCalendarData', 'ProgressionController@getCalendarData');
Route::get('/progression/getPlan', 'ProgressionController@getPlan');
Route::get('/progression/getWorkouts', 'ProgressionController@getWorkouts');
Route::get('/progression/getProgressionCalendarData', 'ProgressionController@getProgressionCalendarData');
Route::get('/progression/getProgressionPlan', 'ProgressionController@getProgressionPlan');
Route::get('/progression/getProgressionWorkouts', 'ProgressionController@getProgressionWorkouts');
Route::post('/progression/duplicateFromCalendarBuilder', 'ProgressionController@duplicateFromCalendarBuilder');
Route::post('/progression/getCalendarExercises', 'ProgressionController@getCalendarExercises');
Route::get('/progression/getProgressionModels', 'ProgressionController@getProgressionModels');
Route::get('/progression/getWeekTypes', 'ProgressionController@getWeekTypes');

Route::post('/interview/saveData', 'InterviewController@saveInterviewData');
Route::post('/interview/saveOtherActivity', 'InterviewController@saveOtherActivityData');
Route::get('/interview/getData', 'InterviewController@getInterviewData');
Route::get('/interview/getExercises', 'InterviewController@getExercisesWithEquipment');
Route::post('/interview/updateInterviewId', 'InterviewController@updateInterviewId');
Route::post('/interview/uploadExerciseRms', 'InterviewController@uploadExerciseRmsToCalendar');

Route::get('/workoutlog/inprogress', 'WorkoutLogController@getInprogressData');
Route::get('/workoutlog/getAthleteWorkouts', 'WorkoutLogController@getAthleteWorkouts');
Route::post('/workoutlog/saveSummary', 'WorkoutLogController@saveWorkoutSummary');
Route::get('/workoutlog/findSummary', 'WorkoutLogController@findWorkoutSummary');
Route::post('/workoutlog/saveWorkoutLogs', 'WorkoutLogController@saveWorkoutLogs');
Route::post('/workoutlog/resetWorkoutLogs', 'WorkoutLogController@resetWorkoutLogs');
Route::post('/workoutlog/saveWorkoutLog', 'WorkoutLogController@saveWorkoutLog');
Route::post('/workoutlog/saveWorkoutTesting', 'WorkoutLogController@saveWorkoutTesting');
Route::get('/workoutlog/getLevel', 'WorkoutLogController@getLevel');
Route::post('/workoutlog/updateRm', 'WorkoutLogController@updateRm');

Route::get('/getMainMuscleGroups', 'Api\ApiController@getMainMuscleGroups');
Route::get('/getExercisesByBodypart', 'Api\ApiController@getExercisesByBodypart');

Route::post('/experienceBank/getTopPrograms', 'ExperienceBankController@getTopPrograms');

Route::get('/strengthstandard/getStrengthStandardValues', 'StrengthStandardController@getStrengthStandardValues');
Route::post('/strengthstandard/getPercentageValuesByFilter', 'StrengthStandardController@getPercentageValuesByFilter');
Route::get('/strengthstandard/getStrengthStandardExercises', 'StrengthStandardController@getStrengthStandardExercises');
Route::get('/strengthstandard/getLatestPerformResult', 'StrengthStandardController@getLatestPerformResult');
Route::get('/experienceBank/getLatestPerformResult', 'StrengthStandardController@getLatestPerformResult');

Route::post('/getRecommendedPrograms', 'ProgramDesignsController@getRecommendedPrograms');

Route::get('/trainer/getOffer', 'TrainerProfileController@getOffers');
Route::post('/trainer/updateOffer', 'TrainerProfileController@updateOffer');

Route::get('/trainer/getCalendar', 'TrainerProfileController@getCalendar');
Route::get('/trainer/getBookingData', 'TrainerProfileController@getBookingData');
Route::post('/trainer/updateDateStatus', 'TrainerProfileController@updateDateStatus');
Route::post('/trainer/updateBooking', 'TrainerProfileController@updateBooking');

Route::get('/trainer/getExpBankData', 'TrainerProfileController@getExpBankData');

