<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property integer $id
 * @property integer $user
 * @property integer $program_id
 * @property string $week_type
 * @property string $data
 * @property string $created_at
 * @property string $updated_at
 * @property User $user
 */
class ProgressionCalendar extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'progression_calendar';

    /**
     * The "type" of the auto-incrementing ID.
     *
     * @var string
     */
    protected $keyType = 'integer';

    /**
     * @var array
     */
    protected $fillable = ['user', 'program_id', 'week_type', 'data', 'created_at', 'updated_at'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo('App\User', 'user');
    }
}
