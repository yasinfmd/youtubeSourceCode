import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useInViewport from './useInViewport'


const HelloComp=()=>{
  const [txt,settxt]=useState("notext")

  useEffect(()=>{
setTimeout(() => {
    settxt("Hello TXTTTTT")
}, 1500);
  },[])

  return (
    <h1>{txt}</h1>
  )
}

function App() {
  const [count, setCount] = useState(0)
  // if you need ! TODO :)
  const myDivRef=useRef(null)

  const [targetRef,isInViewport]=useInViewport(myDivRef)
  const viewportlist=["1.göründü"]
  return (
    <div className="wrapper">
      <div className='item1 item'>qweqwe</div>
      <div className='item2 item'>qsdfsdqq</div>
      <div ref={myDivRef} className='item3 item'>fdsfsd</div>
      <div ref={targetRef} className='item4 item'>
      {isInViewport ? <HelloComp />:<>Görünmüyor</> }
      
      </div>
      <div className='item5 item'>qfdsfsdfqq</div>
      <div className='item6 item'>qsdfsdfsqq</div>
      <div className='item7 item'>sdfsdf</div>

    </div>
  )
}

export default App
