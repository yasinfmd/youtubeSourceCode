import {useState} from "react";

export default function Stepper ({initialCount=0,backgroundColor='',onTest=()=>{}}){
    const [count,setcount]=useState(initialCount)

    const increment=()=>{
            const newCount=count+1
        setcount(newCount)
        onTest()
    }
    const decrement=()=>{
        const newCount=count-1
        setcount(newCount)
        onTest()
    }

    return(
        <div>
            <button style={{backgroundColor:backgroundColor}} id="decrementbtn" onClick={decrement}>- Azalt</button>
            <span id="countText">{count}</span>
            <button id="incrementbtn" onClick={increment}>+ Arttır</button>

        </div>
    )
}
