<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Portfolio;

class PortfolioTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $portfolio = [
            [
                'title' => 'Netflix',
                'thumbnail' => 'https://i.imgur.com/1ZQZ7Zm.png',
                'url_demo' => 'https://netflix-clone-1c8b7.web.app/',
                'use' => 'ReactJS, Redux, Firebase',
                'description' => 'Netflix clone with ReactJS, Redux, Firebase',
            ],
            [
                'title' => 'Amazon',
                'thumbnail' => 'https://i.imgur.com/1ZQZ7Zm.png',
                'url_demo' => 'https://netflix-clone-1c8b7.web.app/',
                'use' => 'ReactJS, Redux, Firebase',
                'description' => 'Netflix clone with ReactJS, Redux, Firebase',
            ],
            [
                'title' => 'Facebook',
                'thumbnail' => 'https://i.imgur.com/1ZQZ7Zm.png',
                'url_demo' => 'https://netflix-clone-1c8b7.web.app/',
                'use' => 'ReactJS, Redux, Firebase',
                'description' => 'Netflix clone with ReactJS, Redux, Firebase',
            ],
            [
                'title' => 'Instagram',
                'thumbnail' => 'https://i.imgur.com/1ZQZ7Zm.png',
                'url_demo' => 'https://netflix-clone-1c8b7.web.app/',
                'use' => 'ReactJS, Redux, Firebase',
                'description' => 'Netflix clone with ReactJS, Redux, Firebase',
            ]
        ];
        Portfolio::insert($portfolio);
    }
}
