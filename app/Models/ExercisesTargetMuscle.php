<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property integer $id
 * @property int $muscle_id
 * @property int $exercise_id
 * @property string $created_at
 * @property string $updated_at
 */
class ExercisesTargetMuscle extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'exercises_target_muscle';

    /**
     * The "type" of the auto-incrementing ID.
     *
     * @var string
     */
    protected $keyType = 'integer';

    /**
     * @var array
     */
    protected $fillable = ['muscle_id', 'exercise_id', 'created_at', 'updated_at'];

}
