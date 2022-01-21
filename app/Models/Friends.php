<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property int $from_user_id
 * @property int $to_user_id
 * @property int $is_allow
 * @property string $created_at
 * @property string $updated_at
 */
class Friends extends Model
{
    /**
     * @var array
     */
    protected $fillable = ['from_user_id', 'to_user_id', 'is_allow', 'created_at', 'updated_at'];

}
