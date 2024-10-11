<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        return Inertia::render('Dashboard/Dashboard');
    }

    public function course()
    {
        return Inertia::render('Dashboard/Course');
    }

    public function registration()
    {
        return Inertia::render('Dashboard/Registration');
    }

    public function projects()
    {
        return Inertia::render('Dashboard/Project');
    }

    public function folder()
    {
        return Inertia::render('Dashboard/Folder');
    }

    public function charts()
    {
        return Inertia::render('Dashboard/Chart');
    }

    public function reports()
    {
        return Inertia::render('Dashboard/Report');
    }

    public function archive()
    {
        return Inertia::render('Dashboard/Archive');
    }
}
