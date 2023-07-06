import React, { useEffect, useState } from "react"

const RemoteApp=React.lazy(()=>import('remoteSecondApp/remoteSecondApp'))
const UsersPage=()=>{
    const [number,setNumber]=useState(0)
    const [text,setText]=useState("Merhaba")
    useEffect(()=>{
    },[])
    useEffect(()=>{
        if(number!==0){
            const ce=new CustomEvent('ADD_NUMBER',{detail:{count:number}})
            window.dispatchEvent(ce)
        }
    },[number])
    return(
        <>
            <div>Users Page !</div>
            <div>
            <button onClick={()=>{
                setNumber((prevState)=>prevState+1)
            }}>Tıkla ve 2.app veri gönder {number} </button>

                <button onClick={()=>setText(Math.random().toString(16))}>Metin değiştir !!! </button>

                <React.Suspense fallback={<div>Bekle biraz geliyor...</div>}>
                    <RemoteApp text={text} />
                </React.Suspense>
            </div>
        </>
    )
}
export default UsersPage