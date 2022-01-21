<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TrainerBooking extends Model
{
          /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'trainer_bookings';

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
        'user_id', 'date', 'time', 'athlete_id', 'created_at', 'updated_at'
    ];
}
