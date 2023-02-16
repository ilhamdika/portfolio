<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Portfolio;

class PortfolioController extends Controller
{
    public function portfolio()
    {
        $portfolio = Portfolio::all();
        return Inertia::render('User/Portfolio', [
            'portfolios' => $portfolio
        ]);
    }
}
