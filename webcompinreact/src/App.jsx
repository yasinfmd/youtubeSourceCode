import { useState } from 'react';
import './counter'
import { useRef } from 'react';
import { useEffect } from 'react';
const App = () => {
  const [countVal,setCountVal]=useState(0)
  const webComponentRef=useRef()

  useEffect(()=>{
      if(webComponentRef.current){
          console.log(webComponentRef.current),
          webComponentRef.current.count=countVal
      }
  },[countVal])
  return (
    <div>
      <h1>React Web Components</h1>
    
    <my-counter ref={webComponentRef}></my-counter>

    <button onClick={()=>{
    setCountVal(countVal+1)
    }}>Artır</button>
    <button onClick={()=>{
      setCountVal(countVal-1)
    }}>Azalt</button>
    
    </div>
  );
};

export default App;
