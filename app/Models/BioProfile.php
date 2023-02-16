<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BioProfile extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'thumbnail',
        'from',
        'hoby',
        'description',
        'instagram_url',
        'twitter_url',
        'github_url',
        'whatsapp_url',
    ];
}
