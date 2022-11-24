<?php

use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CategoriesController;
use Illuminate\Http\Request;
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
    Route::post('insert-product', [ProductController::class, 'insert']);
    Route::post('delete-product', [ProductController::class, 'delete']);
    Route::post('update-product', [ProductController::class, 'update']);
    Route::post('select-product', [ProductController::class, 'select']);
    Route::post('insert-category', [CategoriesController::class, 'insert']);
    Route::post('delete-category', [CategoriesController::class, 'delete']);
    Route::post('update-category', [CategoriesController::class, 'update']);
    Route::post('select-category', [CategoriesController::class, 'select']);
});
