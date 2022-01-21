<?php

namespace App\Http\Controllers;
use App\Models\TrainerOffer;
use App\Models\TrainerAvailDate;
use App\Models\TrainerBooking;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

const TRAINER_DATE_AVAILABLE = "available";
const TRAINER_DATE_BUSY = "busy";
const TRAINER_DATE_UNKNOWN = "unknown";
const GYM_START_TIME = 10;
const GYM_END_TIME = 22;

class TrainerProfileController extends Controller
{
    /**
     * get offers for logged trainer
     *
     * @param Request $request
     * @return void
     */
    public function getOffers(Request $request) {
        $trainer_id = $request->get('trainer_id', auth()->user()->id);
        $offers = DB::select("SELECT id, title, hours, price, image_url FROM trainer_offers WHERE user_id = {$trainer_id}");

        return response()->json([
            'success' => 1,
            'result' => $offers
        ]);
    }

    /**
     * update offer data
     *
     * @param Request $request
     * @return void
     */
    public function updateOffer(Request $request) {
        $id = $request->get('id', -1);
        $title = $request->get('title', '');
        $hours = $request->get('hours', 5);
        $price = $request->get('price', 2500);

        $image_url = '';
        if ($request->file('image') && $request->file('image')->isValid()) {
            $fileName = time().'.'.$request->file('image')->extension();
            $request->file('image')->move(public_path('assets/uploads/newsfeeds'), $fileName);
            $image_url = './assets/uploads/newsfeeds/'.$fileName;
        }

        if ($id == -1) {
            return response()->json([
                'success' => 0
            ]);
        }

        $trainerOffer = TrainerOffer::find($id);
        $trainerOffer->title = $title;
        $trainerOffer->hours = $hours;
        $trainerOffer->price = $price;
        if ($image_url != '')
            $trainerOffer->image_url = $image_url;
        $trainerOffer->save();

        return response()->json([
            'success' => 1
        ]);
    }

    /**
     * get calendar data for trainer
     *
     * @param Request $request
     * @return void
     */
    public function getCalendar(Request $request) {
        $user_id = $request->get('user_id', auth()->user()->id);
        $start = $request->start;
        $end = $request->end;

        $query = "SELECT t.date, t.status, t1.booked
                FROM (
                    SELECT date, status
                    FROM trainer_avail_dates
                    WHERE user_id = {$user_id}
                        AND date BETWEEN '{$start}' AND '{$end}'
                ) t
                LEFT JOIN (
                    SELECT date, COUNT(id) AS booked
                    FROM trainer_bookings
                    WHERE trainer_id = {$user_id}
                    GROUP BY date
                ) t1 ON t.date = t1.date
                ORDER BY date ASC ";

        $calendar = DB::select($query);

        return response()->json([
            'success' => 1,
            'result' => $calendar
        ]);
    }

    /**
     * update calendar
     *
     * @param Request $request
     * @return void
     */
    public function updateDateStatus(Request $request) {
        $user_id = $request->get('user_id', auth()->user()->id);
        $date = $request->date;
        $status = $request->status;
        $oldIgnore = $request->get('old_ignore', 1);

        $availDate = TrainerAvailDate::where('user_id', $user_id)->where('date', $date)->first();
        if ($availDate == null) {
            $availDate = new TrainerAvailDate();
            $availDate->user_id = $user_id;
            $availDate->date = $date;
        }
        $availDate->status = $status;
        $availDate->save();

        // if the user choose 'available' and ignore old bookings
        if ($status == TRAINER_DATE_AVAILABLE && $oldIgnore) {
            TrainerBooking::where('user_id', $user_id)->where('date', $date)->delete();
        }

        $bookings = TrainerBooking::where('user_id', $user_id)->where('date', $date)->get();

        return response()->json([
            'success' => 1,
            'result' => count($bookings)
        ]);
    }

    /**
     * update booking (this is triggered by strength athletes)
     *
     * @param Request $request
     * @return void
     */
    public function updateBooking(Request $request) {
        $trainer_id = $request->trainer_id;
        $user_id = auth()->user()->id;
        $date = $request->date;
        $time = $request->time;
        $booked = $request->booked;

        if ($booked) {
            $booking = new TrainerBooking();
            $booking->user_id = $user_id;
            $booking->trainer_id = $trainer_id;
            $booking->date = $date;
            $booking->time = $time;
            $booking->save();

        } else {
            TrainerBooking::where('user_id', $user_id)->where('trainer_id', $trainer_id)->where('date', $date)->where('time', $time)->delete();
        }

        return response()->json([
            'success' => 1
        ]);
    }

    /**
     * get booking data for trainer
     *
     * @param Request $request
     * @return void
     */
    public function getBookingData(Request $request) {
        $trainer_id = $request->get('trainer_id', auth()->user()->id);
        $date = $request->date;

        $bookings = DB::select("SELECT t.time, t.user_id, t1.name AS user_name
                                FROM trainer_bookings t
                                LEFT JOIN users t1 ON t.user_id = t1.id
                                WHERE t.trainer_id = {$trainer_id} AND date = '{$date}'
                                ORDER BY time ASC ");

        return response()->json([
            'success' => 1,
            'result' => $bookings
        ]);
    }

    /**
     * get experience bank data of clients of the trainer
     *
     * @param Request $request
     * @return void
     */
    public function getExpBankData(Request $request) {
        $trainer_id = $request->get('trainer_id', auth()->user()->id);
        $gender = $request->gender;
        $category = $request->category;

        $bodyWeightMinMaxList = MEN_BODY_WEIGHT_MIN_MAX_LIST;
        if ($gender != "male") {
            $bodyWeightMinMaxList = WOMEN_BODY_WEIGHT_MIN_MAX_LIST;
        }

        $result = (object)[];
        $result->data = array();
        $result->athletes = (object)[];
        $result->programs = (object)[];

        // first, get experience bank data (the median values per body weight/level)
        foreach ($bodyWeightMinMaxList as $minMax) {
            $rowResult = (object)[];
            $rowResult->weight_min = $minMax["min"];
            $rowResult->weight_max = $minMax["max"];

            foreach (ATHLETE_LEVEL_LIST as $level) {
                $query = "SELECT t1.increased
                        FROM athlete_workout_tests t1, athlete_calendar t2, programs t3
                        WHERE t1.pre_rm IS NOT NULL
                            AND t1.calendar = t2.id
                            AND t2.program_id = t3.id
                            AND t2.trainer = {$trainer_id}
                            AND t1.gender = '{$gender}'
                            AND t3.category = '{$category}'
                            AND t1.post_level = '{$level}'
                            AND ROUND(t1.post_weight) BETWEEN {$rowResult->weight_min} AND {$rowResult->weight_max}
                        ORDER BY increased ASC ";
                $values = DB::select($query);

                // get median data
                $median = "";
                $cnt = count($values);

                if ($cnt > 0) {
                    $middleIndex = intval($cnt / 2);
                    if ($cnt % 2 == 1) {
                        $median = $values[$middleIndex]->increased;
                    } else {
                        $median = ($values[$middleIndex - 1]->increased + $values[$middleIndex]->increased) / 2;
                    }
                }

                switch ($level) {
                    case UNTRAINED_LEVEL:
                        $rowResult->untrained = $median;
                        break;
                    case NOVICE_LEVEL:
                        $rowResult->novice = $median;
                        break;
                    case INTERMEDIATE_LEVEL:
                        $rowResult->intermediate = $median;
                        break;
                    case ADVANCED_LEVEL:
                        $rowResult->advanced = $median;
                        break;
                    case ELITE_LEVEL:
                        $rowResult->elite = $median;
                        break;
                }
            }

            array_push($result->data, $rowResult);
        }

        // second, get athletes count per level
        foreach (ATHLETE_LEVEL_LIST as $level) {
            $query = "SELECT count(t.user) AS athletes
                        FROM (
                            SELECT DISTINCT(t2.user) AS user
                            FROM athlete_workout_tests t1, athlete_calendar t2, programs t3
                            WHERE t1.pre_rm IS NOT NULL
                                AND t1.calendar = t2.id
                                AND t2.program_id = t3.id
                                AND t2.trainer = {$trainer_id}
                                AND t1.gender = '{$gender}'
                                AND t3.category = '{$category}'
                                AND t1.post_level = '{$level}'
                        ) t ";
            $values = DB::select($query);

            switch ($level) {
                case UNTRAINED_LEVEL:
                    $result->athletes->untrained = $values[0]->athletes;
                    break;
                case NOVICE_LEVEL:
                    $result->athletes->novice = $values[0]->athletes;
                    break;
                case INTERMEDIATE_LEVEL:
                    $result->athletes->intermediate = $values[0]->athletes;
                    break;
                case ADVANCED_LEVEL:
                    $result->athletes->advanced = $values[0]->athletes;
                    break;
                case ELITE_LEVEL:
                    $result->athletes->elite = $values[0]->athletes;
                    break;
            }
        }

        // last, get program names per level
        foreach (ATHLETE_LEVEL_LIST as $level) {
            $query = "SELECT t2.name
                        FROM (
                            SELECT DISTINCT(t2.program_id) AS program_id
                            FROM athlete_workout_tests t1, athlete_calendar t2, programs t3
                            WHERE t1.pre_rm IS NOT NULL
                                AND t1.calendar = t2.id
                                AND t2.program_id = t3.id
                                AND t2.trainer = {$trainer_id}
                                AND t1.gender = '{$gender}'
                                AND t3.category = '{$category}'
                                AND t1.post_level = '{$level}'
                        ) t1, programs t2
                        WHERE t1.program_id = t2.id ";
            $values = DB::select($query);
            $names = array();
            foreach ($values as $value) {
                array_push($names, $value->name);
            }

            switch ($level) {
                case UNTRAINED_LEVEL:
                    $result->programs->untrained = $names;
                    break;
                case NOVICE_LEVEL:
                    $result->programs->novice = $names;
                    break;
                case INTERMEDIATE_LEVEL:
                    $result->programs->intermediate = $names;
                    break;
                case ADVANCED_LEVEL:
                    $result->programs->advanced = $names;
                    break;
                case ELITE_LEVEL:
                    $result->programs->elite = $names;
                    break;
            }
        }


        return response()->json([
            'success' => 1,
            'result' => $result
        ]);
    }
}
