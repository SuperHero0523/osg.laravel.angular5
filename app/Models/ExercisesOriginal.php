<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property string $tempID
 * @property string $Name
 * @property string $Equipment
 * @property string $BodyPart
 * @property string $Target
 * @property string $Synergist
 */
class ExercisesOriginal extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'exercises_original';

    /**
     * @var array
     */
    protected $fillable = ['tempID', 'Name', 'Equipment', 'BodyPart', 'Target', 'Synergist'];

}
