<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use \App\Models\UserOldPassword;
class User extends Model
{
    use HasFactory;
    protected $table="user";

    public function old_passwords(){
        return $this->hasMany(UserOldPassword::class);
    }
}
