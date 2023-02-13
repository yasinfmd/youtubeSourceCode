import { useState } from "react"
import './counter.css'

interface PropTypes{
    count:number
}
const ShowCount=(props:PropTypes)=>{
    return(
        <span className="h3">{props.count}</span>
    )
}

const Counter=()=>{
    const [count,setCount]=useState<number>(0)
    return(
        <div className="counter">
            <ShowCount count={count} />
            <span className="h3">h333</span>
            <p>
            Merhaba Ben Bir React Bileşeniyim
            </p>
            <div onClick={()=>{
                setCount((prev)=>prev+1)
            }}>{count}</div>
        </div>
    )
}
export default Counter