<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TrainerOffer extends Model
{
          /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'trainer_offers';

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
        'user_id', 'offer_type', 'title', 'hours', 'price', 'image_url', 'created_at', 'updated_at'
    ];
}
