<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property int $user_id
 * @property int $type
 * @property string $content
 * @property int $is_read
 * @property string $created_at
 * @property string $updated_at
 */
class Notifications extends Model
{
    /**
    * The table associated with the model.
    *
    * @var string
    */
    protected $table = 'notifications';

    /**
     * The "type" of the auto-incrementing ID.
     *
     * @var string
     */
    protected $keyType = 'integer';

    /**
     * @var array
     */
    protected $fillable = ['user_id', 'type', 'content', 'is_read', 'created_at', 'updated_at'];

}
