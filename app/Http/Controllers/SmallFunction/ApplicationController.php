<?php

namespace App\Http\Controllers\SmallFunction;

use App\Http\Controllers\Controller;
use App\Models\Misc\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ApplicationController extends Controller
{
    public function index()
    {
        $applications = Application::all();

        $applications->transform(function ($application) {
            $application->icon_path = $application->icon_path ? Storage::url($application->icon_path) : null;
            return $application;
        });

        return response()->json($applications);
    }
}
