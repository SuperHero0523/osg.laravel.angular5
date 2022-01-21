<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property string $user_name
 * @property integer $program_id
 * @property string $content_text
 * @property string $createdAt
 * @property string $updatedAt
 * @property integer $score
 */
class Reviews extends Model
{
    /**
     * @var array
     */
    protected $fillable = ['user_name', 'program_id', 'content_text', 'createdAt', 'updatedAt', 'score'];

}
