<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property integer $id
 * @property integer $plan
 * @property integer $workout
 * @property integer $user
 * @property string $reps
 * @property string $rtf
 * @property string $intensity
 * @property string $rm
 * @property string $updated_rm
 * @property string $target_load
 * @property string $method
 * @property string $tempo
 * @property string $rest
 * @property string $autoreg_load
 * @property string $performed_reps
 * @property string $performed_rtf
 * @property string $performed_rm
 * @property string $created_at
 * @property string $updated_at
 */
class AthleteWorkoutDetails extends Model
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
    protected $fillable = ['plan', 'workout', 'user', 'reps', 'rtf', 'intensity', 'rm', 'updated_rm', 'target_load', 'method', 'tempo', 'rest', 'autoreg_load', 'performed_reps', 'performed_rtf', 'performed_rm', 'created_at', 'updated_at'];

}
