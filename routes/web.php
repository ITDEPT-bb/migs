<?php

use App\Http\Controllers\InstructorHomeController;
use App\Http\Controllers\LandingPageController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SmallFunction\ApplicationController;
use App\Http\Controllers\SmallFunction\GoalController;
use App\Http\Controllers\SmallFunction\SocialMediaPlatformController;
use App\Http\Controllers\SmallFunction\UserApplicationController;
use App\Http\Controllers\SmallFunction\UserSocialAccountController;
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

    Route::get('/registration', [StudentHomeController::class, 'registration'])
        ->name('registration');

    Route::get('/certificate', [StudentHomeController::class, 'certificate'])
        ->name('certificate');

    Route::get('/course', [StudentHomeController::class, 'course'])
        ->name('course');

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

    Route::get('/registration', [InstructorHomeController::class, 'registration'])
        ->name('instructorRegistration');

    Route::get('/certifications', [InstructorHomeController::class, 'certifications'])
        ->name('instructorCertifications');

    Route::get('/course', [InstructorHomeController::class, 'course'])
        ->name('instructorCourse');

    Route::get('/lesson', [InstructorHomeController::class, 'lesson'])
        ->name('instructorLesson');

    Route::get('/documents', [InstructorHomeController::class, 'documents'])
        ->name('instructorDocuments');

    Route::get('/folder', [InstructorHomeController::class, 'folder'])
        ->name('instructorFolder');

    Route::get('/charts', [InstructorHomeController::class, 'charts'])
        ->name('instructorCharts');

    Route::get('/reports', [InstructorHomeController::class, 'reports'])
        ->name('instructorReports');

    Route::get('/archive', [InstructorHomeController::class, 'archive'])
        ->name('instructorArchive');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware(['auth'])->group(function () {
    Route::resource('goals', GoalController::class);
    Route::resource('social-accounts', controller: UserSocialAccountController::class);
    Route::get('/social-media-platforms', [SocialMediaPlatformController::class, 'index']);

    Route::get('/applications', [ApplicationController::class, 'index']);
    Route::resource('user-applications', UserApplicationController::class);
});

require __DIR__ . '/auth.php';
