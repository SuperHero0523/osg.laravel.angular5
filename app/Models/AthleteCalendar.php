<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property integer $id
 * @property integer $user
 * @property integer $program_id
 * @property string $start_date
 * @property integer $weeks
 * @property string $data
 * @property integer $preinterview_id
 * @property integer $postinterview_id
 * @property integer $trainer
 * @property string $created_at
 * @property string $updated_at
 * @property User $user
 */
class AthleteCalendar extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'athlete_calendar';

    /**
     * The "type" of the auto-incrementing ID.
     *
     * @var string
     */
    protected $keyType = 'integer';

    /**
     * @var array
     */
    protected $fillable = ['user', 'program_id', 'start_date', 'weeks', 'data', 'preinterview_id', 'postinterview_id', 'trainer', 'created_at', 'updated_at'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo('App\User', 'user');
    }
}
