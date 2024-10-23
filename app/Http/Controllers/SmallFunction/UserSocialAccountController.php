<?php

namespace App\Http\Controllers\SmallFunction;

use App\Http\Controllers\Controller;
use App\Models\Misc\SocialMediaPlatform;
use App\Models\Misc\UserSocialAccount;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class UserSocialAccountController extends Controller
{
    // Fetch the user's social accounts
    public function index()
    {
        $user = Auth::user();
        $socialAccounts = UserSocialAccount::where('user_id', $user->id)
            ->with('platform')
            ->get()
            ->map(function ($account) {
                $account->platform->icon_path = Storage::url($account->platform->icon_path);
                return $account;
            });

        return response()->json($socialAccounts);
    }

    // Store a new social account
    public function store(Request $request)
    {
        $user = Auth::user();

        $request->validate([
            'platform_id' => 'required|exists:social_media_platforms,id',
            'account_url' => 'required|url',
        ]);

        // Check if an account for this platform already exists
        $existingAccount = UserSocialAccount::where('user_id', $user->id)
            ->where('platform_id', $request->platform_id)
            ->first();

        if ($existingAccount) {
            return response()->json(['message' => 'You already have an account for this platform.'], 422);
        }

        // Create the new social account
        $socialAccount = UserSocialAccount::create([
            'user_id' => $user->id,
            'platform_id' => $request->platform_id,
            'account_url' => $request->account_url,
        ]);

        $createdAccount = UserSocialAccount::where('id', $socialAccount->id)
            ->with('platform')
            ->first();

        $createdAccount->platform->icon_path = Storage::url($createdAccount->platform->icon_path);

        return response()->json([
            'message' => 'Social account added successfully',
            'socialAccount' => $createdAccount,
        ], 201);
    }


    // Update an existing social account
    public function update(Request $request, $id)
    {
        $socialAccount = UserSocialAccount::findOrFail($id);

        $validatedData = $request->validate([
            'platform_id' => 'required|exists:social_media_platforms,id',
            'account_url' => 'required|url',
        ]);

        $socialAccount->update($validatedData);

        $updatedAccount = UserSocialAccount::where('id', $id)
            ->with('platform')
            ->first();

        $updatedAccount->platform->icon_path = Storage::url($updatedAccount->platform->icon_path);

        return response()->json([
            'message' => 'Social account updated successfully',
            'socialAccount' => $updatedAccount,
        ]);
    }


    // Delete a social account
    public function destroy($id)
    {
        $socialAccount = UserSocialAccount::findOrFail($id);
        $socialAccount->delete();

        return response()->json([
            'message' => 'Social account deleted successfully',
        ]);
    }
}
