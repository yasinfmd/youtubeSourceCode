import React,{useEffect, useState} from "react"

import {useStore} from 'storeApp/storeRemote'
const RemoteApp=React.lazy(()=>import('remoteSecondApp/remoteSecondApp'))
import { changeText, appStore } from "./appstore"
const HomePage=()=>{
    const [t,setT]=useState(appStore.getState().general.text)
    const {dispatch,getState}=appStore
    const { count,increment,decrement,incrementByAmount}=useStore()
    useEffect(()=>{
        console.log('effect',count)
    },[count])
    useEffect(()=>{
        appStore.subscribe(()=>{
            setT(appStore.getState().general.text)
        })
    },[appStore])
    return(
        <>
        <h1>{t}</h1>
        <button onClick={()=>{
           dispatch(changeText("apppp"))
        }}>Değiştir</button>

        <button onClick={increment}>Arttır</button>
        <button onClick={decrement}>
            Azalt
        </button>
        <button onClick={()=>incrementByAmount(5)}>Değer gönder</button>

           Home Page !
           {count}
           <RemoteApp />
        </>
    )
}
export default HomePage