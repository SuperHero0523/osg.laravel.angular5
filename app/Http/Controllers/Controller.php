<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

define('ELITE_UPDATE_PERCENT',  1.1);
define('ELITE_PERCENT',         1);
define('ADVANCED_PERCENT',      0.8);
define('INTERMEDIATE_PERCENT',  0.61);
define('NOVICE_PERCENT',        0.49);
define('UNTRAINED_PERCENT',     0.34);

define('UNTRAINED_LEVEL',       'Untrained');
define('NOVICE_LEVEL',          'Novice');
define('INTERMEDIATE_LEVEL',    'Intermediate');
define('ADVANCED_LEVEL',        'Advanced');
define('ELITE_LEVEL',           'Elite');

define('ATHLETE_LEVEL_LIST', array(
    UNTRAINED_LEVEL, NOVICE_LEVEL, INTERMEDIATE_LEVEL, ADVANCED_LEVEL, ELITE_LEVEL
));

const MEN_BODY_WEIGHT_MIN_MAX_LIST = array(
    [ "min" => 50, "max" => 59 ],
    [ "min" => 60, "max" => 69 ],
    [ "min" => 70, "max" => 79 ],
    [ "min" => 80, "max" => 89 ],
    [ "min" => 90, "max" => 99 ],
    [ "min" => 100, "max" => 109 ],
    [ "min" => 110, "max" => 119 ],
    [ "min" => 120, "max" => 200 ]
);

const WOMEN_BODY_WEIGHT_MIN_MAX_LIST = array(
    [ "min" => 40, "max" => 49 ],
    [ "min" => 50, "max" => 59 ],
    [ "min" => 60, "max" => 69 ],
    [ "min" => 70, "max" => 79 ],
    [ "min" => 80, "max" => 89 ],
    [ "min" => 90, "max" => 99 ],
    [ "min" => 100, "max" => 109 ],
    [ "min" => 110, "max" => 200 ]
);

// const NO_RM_EQUIPMENTS = "17, 16, 1, 14, 2, 13, 19, 18, 20, 10, 5, 22, 9";
const NO_RM_EQUIPMENTS = "17, 16, 1, 14, 13, 18, 5, 22, 9";
class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    function getMinMaxHeight($height) {
        $minMaxInfo = (object)[];
        $minMaxInfo->min = floor($height / 10) * 10;
        $minMaxInfo->max = $minMaxInfo->min + 9;
        if ($height >= 220) {
            $minMaxInfo->max = 300;
        } else if ($height < 140) {
            $minMaxInfo->min = 0;
        }
        return $minMaxInfo;
    }

    function getMinMaxAge($age) {
        if ($age % 10 == 0)
            $age--;

        $minMaxInfo = (object)[];
        $minMaxInfo->min = floor($age / 10) * 10 + 1;
        $minMaxInfo->max = $minMaxInfo->min + 9;
        if ($age >= 60) {
            $minMaxInfo->max = 80;
        } else if ($age < 20) {
            $minMaxInfo->min = 0;
        }
        return $minMaxInfo;
    }

    function getMinMaxWeight($weight, $gender) {
        $minMaxInfo = (object)[];
        $minMaxInfo->min = floor(round($weight) / 10) * 10;
        $minMaxInfo->max = $minMaxInfo->min + 9;
        if ($gender == 'male') {
            if ($weight >= 120) {
                $minMaxInfo->max = 300;
            } else if ($weight < 50) {
                $minMaxInfo->min = 0;
            }
        } else {
            if ($weight >= 110) {
                $minMaxInfo->max = 300;
            } else if ($weight < 40) {
                $minMaxInfo->min = 0;
            }
        }

        return $minMaxInfo;
    }

    function getMinMaxWaistHipRatio($waist_hip_ratio, $gender) {
        $temp = $waist_hip_ratio * 100;
        if ($temp % 10 == 0)    $temp--;

        $minMaxInfo = (object)[];
        $minMaxInfo->min = floor($temp / 10) * 10 + 1;
        $minMaxInfo->max = $minMaxInfo->min + 9;
        if ($gender == 'male') {
            if ($temp >= 111) {
                $minMaxInfo->max = 200;
            } else if ($temp <= 80) {
                $minMaxInfo->min = 0;
            }
        } else {
            if ($temp >= 101) {
                $minMaxInfo->max = 200;
            } else if ($temp <= 70) {
                $minMaxInfo->min = 0;
            }
        }

        $minMaxInfo->min /= 100;
        $minMaxInfo->max /= 100;

        return $minMaxInfo;
    }

    function getIndexOfIncreasedValue($searchVal, $increaseObjs) {
        $index = 0;
        foreach ($increaseObjs as $obj) {
            if ($obj->increased == $searchVal) {
                return $index;
            }
            $index++;
        }

        return -1;
    }
}
