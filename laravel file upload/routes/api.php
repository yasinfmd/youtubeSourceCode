<?php

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post("/fileUpload",[\App\Http\Controllers\FileController::class,"upload"]);

Route::get("/fileDownload",[\App\Http\Controllers\FileController::class,"download"]);

Route::get("/fileDelete",[\App\Http\Controllers\FileController::class,"deleteFile"]);



