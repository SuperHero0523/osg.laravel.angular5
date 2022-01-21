<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property integer $id
 * @property integer $user
 * @property string $name
 * @property string $category
 * @property int $split
 * @property string $description
 * @property boolean $is_saved
 * @property boolean $is_published
 * @property string $created_at
 * @property string $updated_at
 */
class Programs extends Model
{
    /**
     * The "type" of the auto-incrementing ID.
     *
     * @var string
     */
    protected $keyType = 'integer';

    /**
     * @var array
     */
    protected $fillable = ['user', 'name', 'category', 'split', 'description', 'is_saved', 'is_published', 'created_at', 'updated_at'];

}
