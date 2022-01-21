<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property integer $id
 * @property integer $plan_id
 * @property string $load_data
 * @property integer $sleep_level
 * @property integer $energy_level
 * @property integer $stress_level
 * @property string $injuries
 * @property string $notes
 * @property string $created_at
 * @property string $updated_at
 */
class AthleteWorkoutSummary extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'athlete_workout_summary';

    /**
     * The "type" of the auto-incrementing ID.
     *
     * @var string
     */
    protected $keyType = 'integer';

    /**
     * @var array
     */
    protected $fillable = ['plan_id', 'load_data', 'sleep_level', 'energy_level', 'stress_level', 'injuries', 'notes'];
}
