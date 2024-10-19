<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * The current password being used by the factory.
     */
    protected static ?string $password;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $roles = ['student', 'instructor', 'admin'];
        $role = $this->faker->randomElement($roles);
        $roleId = $this->generateRoleId($role);

        return [
            'role' => $role,
            'role_id' => $roleId,
            'name' => $this->faker->firstName(),
            'middlename' => $this->faker->lastName(),
            'surname' => $this->faker->lastName(),
            'username' => $this->faker->unique()->userName(),
            'email' => $this->faker->unique()->safeEmail(),
            'email_verified_at' => now(),
            'phone' => $this->faker->phoneNumber(),
            'bio' => $this->faker->text(500),
            'quote' => $this->faker->text(),
            'birthday' => $this->faker->date(),
            'gender' => $this->faker->randomElement(['male', 'female', 'other']),
            'cover_path' => $this->faker->optional()->imageUrl(),
            'avatar_path' => $this->faker->optional()->imageUrl(),
            'country' => $this->faker->country(),
            'city' => $this->faker->city(),
            'profession' => $this->faker->word(),
            'password' => static::$password ??= Hash::make('password'),
            'remember_token' => Str::random(10),
        ];
    }

    /**
     * Generate a unique role-based ID.
     */
    private function generateRoleId(string $role): string
    {
        $prefix = match ($role) {
            'instructor' => 'INS',
            'admin' => 'ADM',
            default => 'STU',
        };

        $year = date('Y');

        $lastUser = User::where('role_id', 'LIKE', "{$prefix}{$year}%")
            ->orderBy('role_id', 'desc')
            ->first();

        if ($lastUser) {
            $lastNumber = (int) substr($lastUser->role_id, -4);
            $newNumber = $lastNumber + 1;
        } else {
            $newNumber = 1;
        }

        return "{$prefix}{$year}" . str_pad($newNumber, 4, '0', STR_PAD_LEFT);
    }

    /**
     * Indicate that the model's email address should be unverified.
     */
    public function unverified(): static
    {
        return $this->state(fn(array $attributes) => [
            'email_verified_at' => null,
        ]);
    }
}
