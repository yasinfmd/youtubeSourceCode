<?php

namespace Database\Seeders;

use App\Models\Personel;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class PersonelTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach (range(1,20) as $i){
            Personel::create([
                'ad'=>Str::random(4),
                'soyad'=>Str::random(10),
                'aktiflik'=>rand(0,1),
                'yas'=>rand(10,40),
                'tc'=>Str::random(11),
                'numara'=>Str::random(11)
            ]);
        }
    }
}
