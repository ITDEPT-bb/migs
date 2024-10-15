<?php

use App\Http\Controllers\InstructorHomeController;
use App\Http\Controllers\LandingPageController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\StudentHomeController;
use App\Http\Middleware\Instructor;
use App\Http\Middleware\Student;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });
Route::get('/', [LandingPageController::class, 'index'])->name('landing.show');

Route::get('/terms', action: [LandingPageController::class, 'terms'])
    ->name('terms.show');

Route::get('/policy', [LandingPageController::class, 'policy'])
    ->name('policy.show');

Route::get('/copyright', [LandingPageController::class, 'copyright'])
    ->name('copyright.show');

Route::get('/faqs', [LandingPageController::class, 'faqs'])
    ->name('faqs.show');

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Student Routes
Route::middleware(['auth', 'verified', 'student'])->prefix('student')->group(function () {
    Route::get('/dashboard', [StudentHomeController::class, 'index'])
        ->name('dashboard');

    Route::get('/course', [StudentHomeController::class, 'course'])
        ->name('course');

    Route::get('/registration', [StudentHomeController::class, 'registration'])
        ->name('registration');

    Route::get('/projects', [StudentHomeController::class, 'projects'])
        ->name('projects');

    Route::get('/folder', [StudentHomeController::class, 'folder'])
        ->name('folder');

    Route::get('/charts', [StudentHomeController::class, 'charts'])
        ->name('charts');

    Route::get('/reports', [StudentHomeController::class, 'reports'])
        ->name('reports');

    Route::get('/archive', [StudentHomeController::class, 'archive'])
        ->name('archive');
});

// Instructor Routes
Route::middleware(['auth', 'verified', 'instructor'])->prefix('instructor')->group(function () {
    Route::get('/dashboard', [InstructorHomeController::class, 'index'])
        ->name('instructorDashboard');

    Route::get('/course', [StudentHomeController::class, 'course'])
        ->name('instructorCourse');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
