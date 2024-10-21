<?php

namespace App\Http\Controllers\SmallFunction;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Goal;
use Illuminate\Support\Facades\Auth;

class GoalController extends Controller
{
    public function index()
    {
        $goals = Goal::where('user_id', Auth::id())->get();
        return response()->json($goals);
    }

    public function store(Request $request)
    {
        $request->validate([
            'goal' => 'required|string|max:255',
        ]);

        $goal = Goal::create([
            'goal' => $request->goal,
            'user_id' => Auth::id(),
        ]);

        return response()->json($goal, 201);
    }

    public function update(Request $request, Goal $goal)
    {
        $request->validate([
            'goal' => 'required|string|max:255',
        ]);

        $goal->update(['goal' => $request->goal]);

        return response()->json($goal);
    }

    public function destroy(Goal $goal)
    {
        $goal->delete();

        return response()->json(null, 204);
    }
}
