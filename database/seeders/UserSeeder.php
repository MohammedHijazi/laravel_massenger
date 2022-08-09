<?php

namespace Database\Seeders;
use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = User::create([
            'name' => 'Mohammed',
            'email' => 'admin@demo.com',
            'password' => \Illuminate\Support\Facades\Hash::make('password'),
        ]);
    }
}
