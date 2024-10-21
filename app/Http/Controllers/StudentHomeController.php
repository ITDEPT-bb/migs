<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use App\Models\Goal;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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
        $userId = Auth::id();
        $user = User::findOrFail($userId);

        $goals = Goal::where('user_id', Auth::id())->get();

        return Inertia::render('Student/Registration', [
            'user' => new UserResource($user),
            'goals' => $goals,
        ]);
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
