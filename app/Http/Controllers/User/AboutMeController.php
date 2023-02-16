<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\BioProfile;

class AboutMeController extends Controller
{
    public function about()
    {
        $bioProfile = BioProfile::all();
        return Inertia::render('User/About', [
            'bioProfiles' => $bioProfile
        ]);
    }
}
