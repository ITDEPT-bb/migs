<?php

namespace App\Models\Misc;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class SocialMediaPlatform extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = ['name', 'icon_path'];

    public function userSocialAccounts()
    {
        return $this->hasMany(UserSocialAccount::class, 'platform_id');
    }
}
