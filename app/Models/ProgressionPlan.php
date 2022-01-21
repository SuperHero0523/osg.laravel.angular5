<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property integer $id
 * @property string $body_parts
 * @property integer $user
 * @property integer $program_id
 * @property string $created_at
 * @property string $updated_at
 */
class ProgressionPlan extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'progression_plan';

    /**
     * The "type" of the auto-incrementing ID.
     *
     * @var string
     */
    protected $keyType = 'integer';

    /**
     * @var array
     */
    protected $fillable = ['body_parts', 'user', 'program_id', 'created_at', 'updated_at'];

}
