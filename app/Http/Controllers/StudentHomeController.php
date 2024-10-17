<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StudentHomeController extends Controller
{
    public function index()
    {
        $studentCount = User::where('role', 'student')->count();
        $instructorCount = User::where('role', 'instructor')->count();

        return Inertia::render('Student/Dashboard', [
            'studentCount' => $studentCount,
            'instructorCount' => $instructorCount,
        ]);
    }

    public function registration()
    {
        return Inertia::render('Student/Registration');
    }

    public function course()
    {
        return Inertia::render('Student/Course');
    }

    public function certificate()
    {
        return Inertia::render('Student/Certificate');
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
