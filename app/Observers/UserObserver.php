<?php

namespace App\Observers;

use App\Models\User;

class UserObserver
{
    public function creating(User $user)
    {
        $user->role_id = $this->generateRoleId($user->role);
    }

    private function generateRoleId($role)
    {
        switch ($role) {
            case 'instructor':
                $prefix = 'INS';
                break;
            case 'admin':
                $prefix = 'ADM';
                break;
            default:
                $prefix = 'STU';
                break;
        }

        $year = date('y');

        $lastUser = User::where('role_id', 'LIKE', $prefix . $year . '%')->orderBy('role_id', 'desc')->first();

        if ($lastUser) {
            $lastNumber = (int) substr($lastUser->role_id, -4);
            $newNumber = $lastNumber + 1;
        } else {
            $newNumber = 1;
        }

        // return $prefix . $year . str_pad($newNumber, 4, '0', STR_PAD_LEFT);
        return "{$prefix}{$year}-" . str_pad($newNumber, 4, '0', STR_PAD_LEFT);
    }
}
