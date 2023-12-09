import { useState } from 'react'
import './App.css'
import {create} from 'zustand'



const useCounterStore=create((set)=>({
  count:0,
  inc:()=>set((state)=>({count:state.count+1})),
  dec:()=>set((state)=>({count:state.count-1})),
  reset:()=>set((state)=>({count:0}))

}))


const useTextStore=create((set)=>({
  text:"Metinsel İFade",
  setText:(t)=>set((state)=>{
    return {text:t}
  })

}))

const CounterInfoComponent=()=>{
  const {count,inc,dec}=useCounterStore()

  return(
      <h1>{count}</h1>
  )
}

const ChangeTextBtn=()=>{
  const {setText}=useTextStore()
  return(
    <div>
      <button onClick={()=>{
        setText(Math.random().toString(16))
      }}>Change Text </button>
    </div>
  )
}


function App() {
  const {inc,dec}=useCounterStore()
  const {text}=useTextStore()
  return (
    <>
      <div className="card">
        <button  onClick={inc}>
          Inc
        </button>
        <button  onClick={dec}>
          Dec
        </button>
        <CounterInfoComponent />
        <h1>{text}</h1>
        <ChangeTextBtn />
      </div>

    </>
  )
}

export default App
