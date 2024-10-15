<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class InstructorHomeController extends Controller
{
    public function index()
    {
        return Inertia::render('Instructor/Dashboard');
    }
}
