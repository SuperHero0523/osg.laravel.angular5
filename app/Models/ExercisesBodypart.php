<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property integer $id
 * @property int $bodypart_id
 * @property int $exercise_id
 * @property string $created_at
 * @property string $updated_at
 */
class ExercisesBodypart extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'exercises_bodypart';

    /**
     * The "type" of the auto-incrementing ID.
     *
     * @var string
     */
    protected $keyType = 'integer';

    /**
     * @var array
     */
    protected $fillable = ['bodypart_id', 'exercise_id', 'created_at', 'updated_at'];

}
