<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property integer $id
 * @property integer $exercise
 * @property integer $plan
 * @property integer $user
 * @property string $created_at
 * @property string $updated_at
 * @property integer $program_id
 * @property integer $completed
 */
class AthleteWorkout extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'athlete_workout';

    /**
     * The "type" of the auto-incrementing ID.
     *
     * @var string
     */
    protected $keyType = 'integer';

    /**
     * @var array
     */
    protected $fillable = ['exercise', 'plan', 'user', 'created_at', 'updated_at', 'program_id', 'completed'];

}
