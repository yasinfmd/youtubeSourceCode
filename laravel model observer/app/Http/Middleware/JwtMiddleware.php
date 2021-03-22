<?php

namespace App\Http\Middleware;

use Closure;
use Exception;
use Firebase\JWT\ExpiredException;
use Firebase\JWT\JWT;
use Illuminate\Http\Request;

class JwtMiddleware
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
        $headers = explode(' ', $request->header('Authorization'));
        $bearer = isset($headers[0]) ? $headers[0] : false;
        $token = isset($headers[1]) ? $headers[1] : false;
        $secretKey = env('TOKEN_KEY');

        if (!$token || !$bearer) {
            return response()->json(['status' => -1, 'msg' => 'Yetkisiz Erişim'], 401);
        }
        try {

            $decoded = JWT::decode($token, $secretKey, array('HS256'));
            return $next($request);
        } catch (ExpiredException $e) {
            $decoded = JWT::decode($token, $secretKey, array('HS256'));
            $decoded->iat = time();
            $decoded->exp = time() + 60;
            return response()->json(JWT::encode($decoded, $secretKey));
        } catch (Exception $e) {
            return response()->json(['status' => -1, 'msg' => 'Yetkisiz Erişim'], 401);
        }
    }
}
