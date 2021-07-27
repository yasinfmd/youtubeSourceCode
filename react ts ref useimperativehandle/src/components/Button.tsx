import React,{forwardRef,useImperativeHandle} from "react"

import './Button.css'
const Button=forwardRef((props:any,ref:any)=>{
    useImperativeHandle(ref,()=>({
        ButtonComponentAlert(){
            alert("Butpn Componentinden Gelen Bir Mesaj ")
        }
    }))
  /*  const ButtonComponentAlert=()=>{
        alert("Butpn Componentinden Gelen Bir Mesaj ")
    }*/
    return(
        <button className="btn" ref={ref} onClick={()=>{
            props.onClick()
        }}>Buton</button>
    )
})
export default Button