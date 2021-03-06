<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class NameControlMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        if($request->name=="ahmet"){
            return $next($request);
        }else{
            return response()->json("İsminiz Ahmet Değil Geçemezsiniz", 400);
        }
    }
}
