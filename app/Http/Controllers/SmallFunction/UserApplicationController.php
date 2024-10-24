<?php

namespace App\Http\Controllers\SmallFunction;

use App\Http\Controllers\Controller;
use App\Models\Misc\UserApplication;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class UserApplicationController extends Controller
{
    public function index()
    {
        $user = Auth::user();

        $userApplications = UserApplication::where('user_id', $user->id)
            ->with(['application'])
            ->get()
            ->map(function ($userApplication) {
                if ($userApplication->application && $userApplication->application->icon_path) {
                    $userApplication->application->icon_path = Storage::url($userApplication->application->icon_path);
                }

                return $userApplication;
            });

        return response()->json($userApplications);
    }

    public function store(Request $request)
    {
        $user = Auth::user();
        $applicationIds = $request->input('application_ids');

        $request->validate([
            'application_ids' => 'array',
            'application_ids.*' => 'exists:applications,id',
        ]);

        $currentApplications = UserApplication::where('user_id', $user->id)->pluck('application_id')->toArray();

        $applicationsToAdd = array_diff($applicationIds, $currentApplications);

        $applicationsToRemove = array_diff($currentApplications, $applicationIds);

        // Add new applications
        foreach ($applicationsToAdd as $appId) {
            UserApplication::create([
                'user_id' => $user->id,
                'application_id' => $appId,
            ]);
        }

        // Remove unselected applications
        UserApplication::where('user_id', $user->id)
            ->whereIn('application_id', $applicationsToRemove)
            ->delete();

        return response()->json(['message' => 'Applications updated successfully!']);
    }
}
