<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property integer $id
 * @property integer $program_id
 * @property integer $bodypart_id
 * @property string $progression_model
 * @property string $created_at
 * @property string $updated_at
 */
class ProgramsProgressionModel extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'programs_progression_model';

    /**
     * The "type" of the auto-incrementing ID.
     *
     * @var string
     */
    protected $keyType = 'integer';

    /**
     * @var array
     */
    protected $fillable = ['program_id', 'bodypart_id', 'progression_model', 'created_at', 'updated_at'];

}
