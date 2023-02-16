<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\BioProfile;

class BioProfileTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $bioProfile = [
            [
                'name' => 'Ilham Dika Permana',
                'thumbnail' => 'https://i.imgur.com/1ZQZ7Zm.png',
                'from' => 'Indonesia',
                'hoby' => 'Coding, Reading, and Traveling',
                'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquet nisl nisl eget nisl. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquet nisl nisl eget nisl.',
                'instagram_url' => 'https://www.instagram.com/ilhamdikapermana/',
                'twitter_url' => 'https://twitter.com/ilhamdikaperma1',
                'github_url' => 'https://twitter.com/ilhamdikaperma1',
                'whatsapp_url' => 'https://twitter.com/ilhamdikaperma1',
            ]
        ];
        BioProfile::insert($bioProfile);
    }
}
