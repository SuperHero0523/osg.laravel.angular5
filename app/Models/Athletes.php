<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Athletes extends Model
{
          /**
     * The table associated with the model.
     * 
     * @var string
     */
    protected $table = 'athletes';

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
        'user_id', 'gender', 'birth', 'height', 'muscle_type', 'interest', 'experience', 'country', 'postal_code', 'place', 'description', 'avatar'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];
}
