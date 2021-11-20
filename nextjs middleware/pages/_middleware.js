import { NextRequest, NextResponse } from "next/server"


export function middleware(req) {
    // console.log("req", req.url)
    let url = req.nextUrl
    url.search = "?ad=Mahmut&soyad=Ucan"
    console.log("url", url)
    return NextResponse.rewrite(url)
    // return new Response(JSON.stringify({ ad: "Yasin", soyad: "Dalkılıç" }), {
    //     status: 200,
    //     statusText: "Hata"
    // })
}