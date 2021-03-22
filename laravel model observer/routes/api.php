<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use \App\Models\Test;
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/deneme',function (){
    //model olusuturluyor
    // ben başka bi db ye kayıt ekliycem
    //ben bi db ile ilişkisini kesicem
    // kayıt oluştu
    // mail atıcam
    //retrieved, creating, created, updating, updated, saving, saved, deleting, deleted, restoring, restored, and replicating.
    // ben gidip şunu şiunu yhapıcam
   Test::create(['ad'=>'Selin','soyad'=>'dalkılıç']);
    Test::create(['ad'=>'Efem','soyad'=>'dalkılıç']);
    Test::destroy(5);

});
