<?php

namespace Database\Seeders;

use App\Models\User;
use Database\Factories\ProjectFactory;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Project;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Jacob',
            'email' => 'jacob@example.com',
            'password' => bcrypt('admin123'),
            'email_verified_at' => time()
        ]);

        Project::Factory()
            ->count(30)
            ->hasTasks(30)
            ->create();
    }
}
