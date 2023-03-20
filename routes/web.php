<?php

use App\Http\Controllers\DeveloperController;
use App\Http\Controllers\SkillController;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Support\Facades\Route;

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
use Inertia\Inertia;

Route::get('/pdf', function () {
    $data['name'] = 'Ian Hadrien';

    $pdf = Pdf::loadView('welcome', $data);
    // return $pdf->download('invoice.pdf');
    return $pdf->stream();

    // return view('welcome');

    // return Inertia::render('Home');
    // return Inertia::render('Home');
});

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::resource('/developers', DeveloperController::class);
Route::resource('/skills', SkillController::class);
Route::post('/developers/{developer}/skills', [DeveloperController::class, 'skill'])->name('developers.skill');

