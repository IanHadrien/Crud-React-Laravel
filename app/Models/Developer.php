<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphMany;

class Developer extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'positions',
    ];

    public function comments(): MorphMany
    {
        return $this->morphMany(Skill::class, 'commentable')->latest();
    }
}
