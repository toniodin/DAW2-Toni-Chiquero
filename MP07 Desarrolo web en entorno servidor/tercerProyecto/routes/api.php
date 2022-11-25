<?php

use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\StudentController;
use Illuminate\Support\Facades\Route;

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
Route::post('register', [UserController::class, 'register']);
Route::post('login', [UserController::class, 'login']);

Route::group( ['middleware' => ["auth:sanctum"]], function(){
    //rutas
    Route::get('user-profile', [UserController::class, 'userProfile']);
    Route::get('logout', [UserController::class, 'logout']);
    Route::post('select-users', [UserController::class, 'select']);
    Route::post('insert-student', [StudentController::class, 'insert']);
    Route::post('delete-student', [StudentController::class, 'delete']);
    Route::post('select-student', [StudentController::class, 'select']);
});
