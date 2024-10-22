<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class EmailVerificationPromptController extends Controller
{
    /**
     * Display the email verification prompt.
     */
    public function __invoke(Request $request): RedirectResponse|Response
    {
        if ($request->user()->hasVerifiedEmail()) {
            $user = $request->user();
            if ($user->role === 'instructor') {
                return redirect()->intended(route('instructorDashboard', [], absolute: false));
            } else {
                return redirect()->intended(route('dashboard', [], absolute: false)); // Assuming 'studentDashboard' is your student route
            }
        }

        // Render the email verification prompt
        return Inertia::render('Auth/VerifyEmail', ['status' => session('status')]);
    }
}
