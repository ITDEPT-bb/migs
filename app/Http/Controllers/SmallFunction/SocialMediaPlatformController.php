<?php

namespace App\Http\Controllers\SmallFunction;

use App\Http\Controllers\Controller;
use App\Models\Misc\SocialMediaPlatform;
use Illuminate\Http\Request;

class SocialMediaPlatformController extends Controller
{
    public function index()
    {
        $platforms = SocialMediaPlatform::all();
        return response()->json($platforms);
    }
}
