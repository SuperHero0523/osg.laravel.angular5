<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property integer $id
 * @property integer $interview_id
 * @property string $category
 * @property string $training_days
 * @property string $intensity
 * @property integer $duration_hour
 * @property integer $duration_minute
 * @property string $created_at
 */
class InterviewActivity extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'interview_activity';

    /**
     * The "type" of the auto-incrementing ID.
     *
     * @var string
     */
    protected $keyType = 'integer';

    /**
     * @var array
     */
    protected $fillable = ['interview_id', 'category', 'training_days', 'intensity', 'duration_hour', 'duration_minute', 'created_at'];
}
