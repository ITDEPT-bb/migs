<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(50)->create();

        User::factory()->create([
            'name' => 'Christian',
            'middlename' => 'Agu',
            'surname' => 'Aguas',
            'username' => 'christianaguas',
            'email' => 'test@example.com',
            'phone' => '09201172065',
            'birthday' => '2000-10-14',
            'gender' => 'male',
            'cover_path' => null,
            'avatar_path' => null,
            'role' => 'admin',
            'password' => bcrypt('password'),
        ]);

        // User::factory()->create([
        //     'name' => 'Christian',
        //     'surname' => 'Aguas',
        //     'email' => 'test@example.com',
        //     'phone' => '09201172065',
        //     'birthday' => '2000-10-14',
        //     'gender' => 'male',
        //     'cover_path' => null,
        //     'avatar_path' => null,
        //     'role' => 'admin',
        //     'password' => bcrypt('password'),
        // ]);
    }
}
