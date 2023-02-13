<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/






Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::prefix('prototype')->name('prototype.')->group(function () {
    Route::get('/home', function () {
        return Inertia::render('Prototype/Home');
    })->name('home');
    Route::get('/portfolio', function () {
        return Inertia::render('Prototype/Portfolio');
    })->name('portfolio');
    route::get('/show/{name}', function () {
        return inertia::render('Prototype/Show');
    })->name('show');
    Route::get('/about', function () {
        return Inertia::render('Prototype/About');
    })->name('about');
});

Route::prefix('admin')->name('admin.')->group(function () {
    route::get('/login', function () {
        return inertia::render('Prototype/Admin/Login');
    })->name('login');
    Route::get('/dashboard', function () {
        return inertia::render('Prototype/Admin/Dashboard');
    })->name('dashboard');
});


require __DIR__ . '/auth.php';
