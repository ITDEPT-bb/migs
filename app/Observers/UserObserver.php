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
            case 'admin':
                $roleCode = 1;
                break;
            case 'instructor':
                $roleCode = 2;
                break;
            default:
                $roleCode = 3;
                break;
        }

        $year = date('y');

        $lastUser = User::where('role_id', 'LIKE', "{$roleCode}-{$year}-%")
            ->orderBy('role_id', 'desc')
            ->first();

        if ($lastUser) {
            $lastNumber = (int) substr($lastUser->role_id, -4);
            $newNumber = $lastNumber + 1;
        } else {
            $newNumber = 1;
        }

        return "{$roleCode}-{$year}-" . str_pad($newNumber, 4, '0', STR_PAD_LEFT);
    }
}
