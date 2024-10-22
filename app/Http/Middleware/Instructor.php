<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class Instructor
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (Auth::check()) {
            $user = Auth::user();

            if ($user->role === 'instructor') {
                if (!$user->approved_instructor) {
                    Auth::logout();
                    return redirect()->route('login')->withErrors(['email' => 'Your instructor account is not approved.']);
                }

                return $next($request);
            }
        }

        abort(403, 'Unauthorized');
    }
}
