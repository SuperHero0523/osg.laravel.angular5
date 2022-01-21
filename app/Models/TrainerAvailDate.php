<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TrainerAvailDate extends Model
{
          /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'trainer_avail_dates';

    /**
     * The primary key for the model.
     *
     * @var string
     */
    protected $primaryKey = 'id';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id', 'date', 'status', 'created_at', 'updated_at'
    ];
}
