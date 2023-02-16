<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Portfolio;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DetailPortfolioController extends Controller
{
    public function show(Portfolio $portfolio)
    {
        return Inertia::render('User/Show', [
            'portfolio' => $portfolio
        ]);
    }
}
