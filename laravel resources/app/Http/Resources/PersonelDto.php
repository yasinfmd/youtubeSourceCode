<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PersonelDto extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'tam_ad'=>$this->ad.'-'.$this->soyad,
            'personel_yasi'=>$this->yas,
            'aktiflik_durumu'=> ($this->aktiflik == 0 ?'Personel Aktif':'Personel Pasif' )
        ];
    }
}
