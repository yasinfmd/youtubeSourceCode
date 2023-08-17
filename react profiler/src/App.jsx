import React , {Profiler, useEffect} from 'react';
import Counter from './counter'
import './App.css'

function App() {
  useEffect(()=>{
    window.addEventListener('cancel',()=>{})
    window.addEventListener('click',()=>{})
    window.addEventListener('mousedown',()=>{})
    window.addEventListener('message',()=>{})

  },[])

  return (
    <>
    <Profiler id='CounterComponent' onRender={(id,phase,actualDuration,baseDuration,startTime,commitTime)=>{
      console.log('id',id)
      console.log('phase',phase)
      console.log('actualDuration',actualDuration)
      console.log('baseDuration',baseDuration)
      console.log('startTime',startTime)
      console.log('commitTime',commitTime)

    }}>
    <Counter />

    </Profiler>
    </>
  )
}

export default App
