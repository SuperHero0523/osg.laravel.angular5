<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property string $user_id
 * @property string $createdAt
 * @property string $updatedAt
 * @property string $content_text
 * @property string $content_photoUrls
 * @property string $content_videoUrls
 * @property int $parent_id
 */
class Newsfeeds extends Model
{
    /**
     * @var array
     */
    protected $fillable = ['user_id', 'createdAt', 'updatedAt', 'content_text', 'content_photoUrls', 'content_videoUrls', 'parent_id'];

}
