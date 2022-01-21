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
 * @property string $rm
 * @property string $method
 * @property string $tempo
 * @property string $rest
 * @property string $created_at
 * @property string $updated_at
 */
class WorkoutDetails extends Model
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
    protected $fillable = ['plan', 'workout', 'user', 'reps', 'rtf', 'rm', 'method', 'tempo', 'rest', 'created_at', 'updated_at'];

}
