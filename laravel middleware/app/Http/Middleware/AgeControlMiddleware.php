<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class AgeControlMiddleware
{
    public function handle(Request $request, Closure $next)
    {
        if($request->age>20){
            return $next($request);
        }else{
            return response()->json('Yaşınız 20den kucuk oldugun için bir yere gidemezsiniz',400);
        }
    }
}
