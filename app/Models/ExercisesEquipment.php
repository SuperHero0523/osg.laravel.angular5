<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property integer $id
 * @property int $equipment_id
 * @property int $exercise_id
 * @property string $created_at
 * @property string $updated_at
 */
class ExercisesEquipment extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'exercises_equipment';

    /**
     * The "type" of the auto-incrementing ID.
     *
     * @var string
     */
    protected $keyType = 'integer';

    /**
     * @var array
     */
    protected $fillable = ['equipment_id', 'exercise_id', 'created_at', 'updated_at'];

}
