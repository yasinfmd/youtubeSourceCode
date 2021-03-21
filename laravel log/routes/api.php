<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use \Illuminate\Support\Facades\Log;



Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/deneme/{id}',function (Request $request,$id){
        // db de sorguluyorum
    try {
        Log::critical('Kritik Log',['Kritik']);
        Log::alert('Alert',['Alert Log']);
        Log::info('INfo Mesajı');
        if($id<20){
            Log::warning('ID NOT FOUND',['id'=>$id]);
        }else{
            Log::info('ID FOUNDED',['ad'=>'Yasin'.$id]);
            return response()->json(['ad'=>'Yasin'.$id]);
        }
    }catch (Error $error){
            Log::error('Error Bulundu',['message'=>$error->getMessage()]);
    }


});





