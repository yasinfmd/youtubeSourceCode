<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use \App\Models\User;
class UserOldPassword extends Model
{
    use HasFactory;
    protected $table="user_old_password";

    public function user(){
        return $this->belongsTo(User::class);
    }
}
