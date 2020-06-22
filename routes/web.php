<?php

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

Route::get('/', function () {
    return view('welcome');
});

Route::get('skills',function(){
    return ['Javascript','React js','Vue Js','Laravel'];
});

Route::resource('/project','\\App\\Http\\Controllers\\ProjectController');
// Route::get('/project/create','\\App\\Http\\Controllers\\ProjectController@create');
// Route::post('/project','\\App\\Http\\Controllers\\ProjectController@store');