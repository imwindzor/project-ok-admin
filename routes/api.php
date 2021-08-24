<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\TestController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\AdminChedController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\CounselorController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//TEST ROUTE
Route::resource('test', TestController::class, );

//ROUTE FOR AUTH
Route::post('auth/login', [LoginController::class, 'login']);

//ROUTE FOR ADMIN
Route::resource('admins', AdminController::class);

//ROUTE FOR ADMINCHED
Route::resource('adminsched', AdminChedController::class);

//STUDENTS
Route::get('student', [StudentController::class, 'index']);

//COUNSELORS
Route::get('counselor', [CounselorController::class, 'index']);
