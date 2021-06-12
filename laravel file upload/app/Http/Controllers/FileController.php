<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class FileController extends Controller
{
    //
    public  function upload(Request  $request){
        $filename=$request->file('dosya')->getClientOriginalName();
        $fileSize=$request->file("dosya")->getSize();
        $mimeType=$request->file("dosya")->getMimeType();
        $filePath=$request->file("dosya")->storeAs("public/dosyalar",$filename);
        return  response()->json([asset("storage/dosyalar/".$filename)]);
        return response()->json([$filename,$fileSize,$mimeType]);
    }

    public  function deleteFile(Request  $request){
        $result=Storage::disk("public")->delete("dosyalar/1_Yw-ougCcIkqi2r3ukcbfAg.jpeg");
        return response()->json([$result]);
    }

    public  function download(){
        return Storage::disk("public")->download("dosyalar/1_Yw-ougCcIkqi2r3ukcbfAg.jpeg");
    }
}
