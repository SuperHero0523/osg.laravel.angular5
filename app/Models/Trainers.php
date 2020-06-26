<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Trainers extends Model
{
          /**
     * The table associated with the model.
     * 
     * @var string
     */
    protected $table = 'trainers';

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
        'user_id', 'gender', 'birth', 'education', 'special', 'experience', 'country', 'postal_code', 'place', 'workplace_address', 'location', 'description', 'avatar'
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
