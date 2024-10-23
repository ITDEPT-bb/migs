<?php

namespace App\Models\Misc;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class UserSocialAccount extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = ['user_id', 'platform_id', 'account_url'];

    public function platform()
    {
        return $this->belongsTo(SocialMediaPlatform::class, 'platform_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
