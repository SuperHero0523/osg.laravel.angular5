<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property integer $id
 * @property string $name
 * @property string $picture
 * @property int $movement
 * @property string $created_at
 * @property string $updated_at
 * @property string $exercise_info
 * @property string $temp_id
 */
class Exercises extends Model
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
    protected $fillable = ['name', 'picture', 'movement', 'created_at', 'updated_at', 'exercise_info', 'temp_id'];

}
