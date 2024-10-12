<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'middlename' => 'nullable|string|max:255',
            'surname' => 'required|string|max:255',
            'username' => 'required|string|max:255|unique:users',
            'email' => 'required|string|lowercase|email|max:255|unique:users',
            'phone' => 'nullable|string|max:20',
            'bio' => 'nullable|string',
            'birthday' => 'nullable|date',
            'gender' => 'nullable|in:male,female,other',
            'cover_path' => 'nullable|string|max:1024',
            'avatar_path' => 'nullable|string|max:1024',
            'role' => 'nullable|string|max:255',
            'country' => 'nullable|string|max:255',
            'city' => 'nullable|string|max:255',
            'profession' => 'nullable|string|max:255',
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $user = User::create([
            'name' => $request->name,
            'middlename' => $request->middlename,
            'surname' => $request->surname,
            'username' => $request->username,
            'email' => $request->email,
            'phone' => $request->phone,
            'bio' => $request->bio,
            'birthday' => $request->birthday,
            'gender' => $request->gender,
            'cover_path' => $request->cover_path,
            'avatar_path' => $request->avatar_path,
            'role' => $request->role,
            'country' => $request->country,
            'city' => $request->city,
            'profession' => $request->profession,
            'password' => Hash::make($request->password),
        ]);

        event(new Registered($user));

        Auth::login($user);

        return redirect(route('dashboard', absolute: false));
    }
}
