<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class StudentHomeController extends Controller
{
    public function index()
    {
        return Inertia::render('Student/Dashboard');
    }

    public function course()
    {
        return Inertia::render('Student/Course');
    }

    public function registration()
    {
        return Inertia::render('Student/Registration');
    }

    public function projects()
    {
        return Inertia::render('Student/Project');
    }

    public function folder()
    {
        return Inertia::render('Student/Folder');
    }

    public function charts()
    {
        return Inertia::render('Student/Chart');
    }

    public function reports()
    {
        return Inertia::render('Student/Report');
    }

    public function archive()
    {
        return Inertia::render('Student/Archive');
    }
}
