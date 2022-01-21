<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property integer $id
 * @property integer $calendar_id
 * @property integer $waist
 * @property integer $hip
 * @property integer $weight
 * @property string $injury
 * @property string $created_at
 * @property string $updated_at
 */
class Interview extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'interview';

    /**
     * The "type" of the auto-incrementing ID.
     *
     * @var string
     */
    protected $keyType = 'integer';

    /**
     * @var array
     */
    protected $fillable = ['user', 'calendar_id', 'waist', 'hip', 'weight', 'injury', 'created_at'];
}
