<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Log;
use Symfony\Component\CssSelector\Parser\Tokenizer\TokenizerEscaping;

class Test extends Model
{
    use HasFactory;
    protected  $table='test';
    protected $fillable=['ad','soyad'];

  /*  public  static function boot()
    {
        parent::boot();

        static::creating(function(Test $test){
            Log::info('Test Modeli Oluşturuluyor Yeni Bir Kayıt',[$test]);
        });

        static::created(function (Test $test){
            Log::info('Test Modeli Oluşturulduı Yeni Bir Kayıt',[$test]);

        });
        static::deleting(function(Test $test){
            Log::info('Kayıt Siliniyor',[$test->id]);
            // test tablosundan bi kayıt silinirken
            // test_yedek ?????
            //abc database laravel db silinenn kayıtları
            Test::create(['ad'=>'mahmut','soyad'=>'Koc']);
            // test-> kutuları ??*
        });
        static::deleted(function(Test $test){
            Log::info('Kayıt Silindi',[$test->id]);
        });
    }*/
}
