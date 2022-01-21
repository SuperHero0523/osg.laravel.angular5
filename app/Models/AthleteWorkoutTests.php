<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property integer $id
 * @property integer $calendar
 * @property integer $exercise
 * @property integer $user
 * @property string $gender
 * @property integer $age
 * @property integer $height
 * @property string $muscle_type
 * @property integer $pre_rm
 * @property string $pre_level
 * @property integer $pre_weight
 * @property float $pre_waist_hip_ratio
 * @property integer $post_rm
 * @property string $post_level
 * @property integer $post_weight
 * @property float $post_waist_hip_ratio
 * @property string $created_at
 * @property string $updated_at
 */
class AthleteWorkoutTests extends Model
{
    /**
     * The "type" of the auto-incrementing ID.
     *
     * @var string
     */
    protected $keyType = 'integer';

    /**
     * @var array
     */
    protected $fillable = ['calendar', 'exercise', 'user', 'gender', 'age', 'height', 'muscle_type', 'pre_rm', 'pre_level', 'pre_weight', 'pre_waist_hip_ratio', 'post_rm', 'post_level', 'post_weight', 'post_waist_hip_ratio', 'created_at', 'updated_at'];

}
