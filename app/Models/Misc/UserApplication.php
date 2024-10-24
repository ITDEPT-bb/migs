<?php

namespace App\Models\Misc;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class UserApplication extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = ['user_id', 'platform_id', 'account_url', 'application_id'];

    public function application()
    {
        return $this->belongsTo(Application::class, 'application_id');
    }
}
