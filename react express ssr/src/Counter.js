import React, { useState } from "react";


const Counter=()=>{
    const [count,setCount]=useState(0)
    const handleClick=()=>{
        let c=count
        c++
        setCount(c)
    }
    return (
        <>
        <h3>{count}</h3>
        <button  onClick={handleClick}>Tıkla</button>
        </>
    )
}
export default Counter