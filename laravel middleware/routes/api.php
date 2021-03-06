<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use \App\Models\Personel;
use \App\Http\Resources\PersonelDto;
use \App\Http\Middleware\AgeControlMiddleware;
use \App\Http\Middleware\NameControlMiddleware;
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
//  Route::post('/test',function (Request  $request){
//         return response()->json('Yaş ve Ad  Kontrolünden Başarıyla Geçtiniz',200);
//  })->middleware(['age','name']);

//  Route::post('/test2',function (Request  $request){
//     return response()->json('Ad Kontrolünden Başarıyla Geçtiniz',200);
// })->middleware(['age','name']);



Route::middleware([AgeControlMiddleware::class,NameControlMiddleware::class])->group(function(){
    Route::post('/test',function (Request  $request){
        return response()->json('Yaş ve Ad  Kontrolünden Başarıyla Geçtiniz',200);
    });

    Route::post('/test2',function (Request  $request){
    return response()->json('Ad Kontrolünden Başarıyla Geçtiniz',200);
    });
});


