<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class InstructorHomeController extends Controller
{
    public function index()
    {
        $studentCount = User::where('role', 'student')->count();
        $instructorCount = User::where('role', 'instructor')->count();

        return Inertia::render('Instructor/Dashboard', [
            'studentCount' => $studentCount,
            'instructorCount' => $instructorCount,
        ]);
    }

    public function registration()
    {
        return Inertia::render('Instructor/Registration');
    }

    public function certifications()
    {
        return Inertia::render('Instructor/Certification');
    }

    public function course()
    {
        return Inertia::render('Instructor/Course');
    }

    public function lesson()
    {
        return Inertia::render('Instructor/Lesson');
    }

    public function documents()
    {
        return Inertia::render('Instructor/Document');
    }

    public function folder()
    {
        return Inertia::render('Instructor/Folder');
    }

    public function charts()
    {
        return Inertia::render('Instructor/Chart');
    }

    public function reports()
    {
        return Inertia::render('Instructor/Report');
    }

    public function archive()
    {
        return Inertia::render('Instructor/Archive');
    }
}
