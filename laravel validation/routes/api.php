<?php

use App\Models\Personel;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Route;
use \Validator as Validator;
use App\Rules\CountRule;
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

Route::post('personel', function (Request $request) {
    $valid = Validator::make($request->all(), [
        'personelName' => ['required', 'unique:personel,personelAd']
    ]);
    if ($valid->fails()) {
        return response()->json(['errorData' => $valid->errors()], Response::HTTP_BAD_REQUEST);
    } else {
        Personel::create(['personelAd' => $request->personelName]);
        return response()->json(['başarılı'], Response::HTTP_CREATED);
    }
});
