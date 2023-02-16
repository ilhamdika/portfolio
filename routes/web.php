<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use PHPUnit\TextUI\XmlConfiguration\Group;
use App\Http\Controllers\User\HomeController;
use App\Http\Controllers\User\PortfolioController;
use App\Http\Controllers\User\DetailPortfolioController;
use App\Http\Controllers\User\AboutMeController;
use App\Http\Controllers\Admin\AdminPortfolioController;



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





Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/portfolio', [PortfolioController::class, 'portfolio'])->name('portfolio');
Route::get('/show/{portfolio:title}', [DetailPortfolioController::class, 'show'])->name('show');
Route::get('/about', [AboutMeController::class, 'about'])->name('about');



Route::redirect('/admin', '/login');
Route::middleware(['auth', 'role:admin'])->prefix('admin')->name('admin.')->group(function () {

    Route::resource('portfolio-admin', AdminPortfolioController::class);
});


// Route::get('/dashboard', function () {
//     return Inertia::render('Admin/HomeAdmin');
// })->middleware(['auth', 'role:admin'])->name('dashboard');

// Route::get('/portfolio-admin', function () {
//     return Inertia::render('Admin/PortfolioAdmin');
// })->middleware(['auth', 'role:admin'])->name('portfolio-admin');

// Route::get('/add-portfolio-admin', function () {
//     return Inertia::render('Admin/PortfolioAdd');
// })->middleware(['auth', 'role:admin'])->name('add-portfolio-admin');

// Route::get('/about-admin', function () {
//     return Inertia::render('Admin/AboutAdmin');
// })->middleware(['auth', 'verified'])->name('about-admin');

// Route::resource('/portfolio-admin', AdminPortfolioController::class)->name('portfolio-admin');




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

// Route::prefix('admin')->name('admin.')->group(function () {
//     route::get('/login', function () {
//         return inertia::render('Prototype/Admin/Login');
//     })->name('login');
//     Route::get('/dashboard', function () {
//         return inertia::render('Prototype/Admin/Dashboard');
//     })->name('dashboard');
// });


require __DIR__ . '/auth.php';
