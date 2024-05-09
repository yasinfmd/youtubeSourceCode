import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

function App() {
  const [count, setCount] = useState(0)
  const divRef=useRef()
  const handler=useReactToPrint({
    content:() =>divRef.current,
    onPrintError:(err)=>console.error(err),
    onBeforePrint:()=>{
      console.log('onBeforePrintinggg')
    },
    onAfterPrint:()=>{
      console.log('onAfterPrintingggg')
    },
    documentTitle:"Benim Ödevim",
    bodyClass:'myBodyClass',
    removeAfterPrint:true
  })

  return (
    <>
    <button onClick={handler}>Yazdırt</button>
      <div ref={divRef}>
        
        <h1>Merhaba</h1>
        <h2>Selam</h2>
        <ul>
          <li>Eleman1</li>
          <li>Eleman2</li>
          <li>Eleman3</li>
          <li>Eleman4</li>
          <li>Eleman5</li>

        </ul>
      </div>
  

    </>
  )
}

export default App
