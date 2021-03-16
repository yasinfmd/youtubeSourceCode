<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use \Firebase\JWT\JWT;

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

Route::post('/login', function (Request $request) {
    if ($request->name == 'yasin' && $request->password == '123123123') {
        $token = JWT::encode([
            'name' => 'Yasin',
            'email' => 'ysndlklc1234@gmail.com',
            'iat' => time(),
            'exp' => time() + 60 * 60 * 1
        ], env('TOKEN_KEY'));
        return response()->json(['token' => $token]);
    }
});

Route::post('/task', function (Request $request) {

    return response()->json('Tasklar');
})->middleware(['jwt']);
