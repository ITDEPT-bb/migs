<?php

namespace App\Models;

use App\CourseLevel;
use App\Http\Enums\CourseLevel as EnumsCourseLevel;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Course extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        "code",
        "name",
        "description",
        "slug",
        "duration",
        "level",
        "outcomes",
    ];

    protected $casts = [
        "level" => EnumsCourseLevel::class,
    ];

    public function subjects()
    {
        return $this->hasMany(Subject::class);
    }
}
