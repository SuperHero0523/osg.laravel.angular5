<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property integer $exercise
 * @property integer $for_men
 * @property integer $weight_min
 * @property integer $weight_max
 * @property integer $elite_value
 * @property string $createdAt
 * @property string $updatedAt
 */
class StrengthStandardValues extends Model
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
    protected $fillable = ['exercise', 'for_men', 'weight_min', 'weight_max', 'elite_value', 'createdAt', 'updatedAt'];

}
