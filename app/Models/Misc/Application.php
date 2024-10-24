<?php

namespace App\Models\Misc;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Application extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = ['name', 'url', 'icon_path'];

    public function userApplications()
    {
        return $this->hasMany(UserApplication::class, 'application_id');
    }
}
