
import { useEffect, useState } from "react"
import {reaction,when} from 'mobx'
import { storeWithObject } from "./StoreObject"
const App2=()=>{
    const [arr,setArr]=useState([])
    reaction(()=>storeWithObject.count,()=>{
        console.log('Count değişti')
        console.log('first',storeWithObject.count)
        console.log(storeWithObject.getUsers())
        setArr([...storeWithObject.getUsers()])
    })
    when(()=>storeWithObject.count>5,()=>{
        console.log("5 den büyük oldu")
    })
    useEffect(()=>{
        storeWithObject.addUser(Math.floor(Math.random()*100))
        storeWithObject.addUser(Math.floor(Math.random()*100))
        storeWithObject.addUser(Math.floor(Math.random()*100))
        storeWithObject.addUser(Math.floor(Math.random()*100))
        storeWithObject.addUser(Math.floor(Math.random()*100))
        setTimeout(()=>{
            storeWithObject.addUser(Math.floor(Math.random()*100))
        },5000)

    },[])
    return(
        <div>
            {JSON.stringify(arr)}
            App 2
        </div>
    )
}
export default App2