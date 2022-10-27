import React from "react";
import {useCounter} from "./store/counter";


const HelloWorld=()=>{
    const {count}=useCounter()
    return(
        <div>Sayı :{count} </div>
    )
}
export default HelloWorld
