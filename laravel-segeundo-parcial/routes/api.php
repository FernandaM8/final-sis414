<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\productsController;


Route::get('/products', [productsController::class, 'index']);

Route::get('/products/{id}', [productsController::class, 'show']);

Route::post('/products', [productsController::class, 'store']);

Route::put('/products/{id}', [productsController::class, 'update']);

Route::patch('/products/{id}', [productsController::class, 'updatePartial']);

Route::delete('/products/{id}', [productsController::class, 'destroy']);
