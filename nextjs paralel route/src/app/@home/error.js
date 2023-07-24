'use client'


import { useEffect } from "react"


export default function Error({error,reset}){
    useEffect(()=>{
        console.log('^hata çıktı loglama yap !',error)
    },[error])

    return(
        <div>
            <h1>Üzgünüz bir hata olustu lütfen tekrar dene !!!</h1>
            <button onClick={()=>reset()}>Tekrar dene !!!</button>
        </div>
    )
}