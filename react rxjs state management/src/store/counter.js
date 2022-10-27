import {useEffect,useState} from "react";

import {BehaviorSubject} from "rxjs";


let subject=null


export  const useCounter=()=>{
    const [count,setCount]=useState(5)
    if(!subject){
        subject=new BehaviorSubject(count)
    }

    useEffect(()=>{
       const subs=subject.subscribe((count)=>{
           setCount(count)
       })
       return ()=>{
           if(subs){
               subs.unsubscribe()
           }
       }
    },[])
    const addCount=(count)=>{
        subject.next(count)
    }

    return {addCount,count}
}
