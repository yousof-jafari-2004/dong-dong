<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\GroupController;
use App\Http\Controllers\PeopleController;
use App\Http\Controllers\ExpenseController;
use App\Http\Controllers\TotalCalculation;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::prefix('/auth')->group(function() {
    Route::post('register', [AuthController::class, 'register']);
    Route::post('login', [AuthController::class, 'login']);
});

Route::middleware('auth:sanctum')->group(function(){
    Route::prefix('/groups')->group(function(){
        Route::get('/', [GroupController::class, 'index']);
        Route::post('create', [GroupController::class, 'create']);
        Route::delete('delete/{group}', [GroupController::class, 'delete']);
    });

    Route::prefix('/expenses')->group(function() {
        Route::post('create', [ExpenseController::class, 'create']);
        Route::get('/', [ExpenseController::class, 'index']);
        Route::delete('delete/{expenses}', [ExpenseController::class, 'delete']);
    });

    Route::prefix('total')->group(function() {
        Route::get('/all/{id}', [TotalCalculation::class, 'index']);
        Route::get('/all', [TotalCalculation::class, 'steps']);
    });

    Route::post('user/create', [PeopleController::class, 'create']);
    Route::get('user', [PeopleController::class, 'index']);
    Route::delete('user/delete/{people}', [PeopleController::class, 'delete']);
});