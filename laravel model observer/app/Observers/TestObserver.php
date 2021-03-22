<?php

namespace App\Observers;

use App\Models\Test;
use Illuminate\Support\Facades\Log;

class TestObserver
{
    /**
     * Handle the Test "created" event.
     *
     * @param  \App\Models\Test  $test
     * @return void
     */
    public function created(Test $test)
    {
        //email atılacak
        //git bunu kuyruga yaz

        Log::info('Test Modeli Oluşturulduı Yeni Bir Kayıt',[$test]);

        //
    }

    public function creating(Test $test)
    {
        Log::info('Test Modeli Oluşturuluyor Yeni Bir Kayıt',[$test]);

        //
    }

    /**
     * Handle the Test "updated" event.
     *
     * @param  \App\Models\Test  $test
     * @return void
     */
    public function updated(Test $test)
    {
        //
    }

    /**
     * Handle the Test "deleted" event.
     *
     * @param  \App\Models\Test  $test
     * @return void
     */
    public function deleted(Test $test)
    {
        Log::info('Kayıt Silindi',[$test->id]);
        //
    }

    public  function  deleting(Test  $test){
        Log::info('Kayıt Siliniyor',[$test->id]);
    }

    /**
     * Handle the Test "restored" event.
     *
     * @param  \App\Models\Test  $test
     * @return void
     */
    public function restored(Test $test)
    {
        //
    }

    /**
     * Handle the Test "force deleted" event.
     *
     * @param  \App\Models\Test  $test
     * @return void
     */
    public function forceDeleted(Test $test)
    {
        //
    }
}
