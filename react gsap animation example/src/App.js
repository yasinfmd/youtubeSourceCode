import logo from './logo.svg';
import './App.css';
import gsap from 'gsap'
import { useEffect, useRef } from 'react';
let tween;
function App() {
  const myRef=useRef()
  useEffect(()=>{
    const el=document.getElementById('myEl')
    tween= gsap.to(el,{
      rotate:360,
      ease:"elastic",
      scale:2.5,
      translateX:500,
      duration:2,
     paused:false,
     onComplete(){
      gsap.to('.box',{
        rotate:0,
        ease:"elastic",
        scale:1,
        translateX:0,
        duration:2,
       paused:false,
      })
     }
    })
  },[])
  useEffect(()=>{
    gsap.to(myRef.current,{
      duration:10,
      textContent:"+=100M",
      roundProps:"textContent",
      ease:"none"
    })
  },[])
  return (
    <div className="App">
      <button onClick={()=>{
        tween.play()
      }}>Başlat</button>
      <button onClick={()=>{
        tween.reverse()
      }}>Geri Al</button>
      <button onClick={()=>{
        tween.pause()
      }}>Durdur</button>

      <div id='myEl' className="box"></div>

      <h1 ref={myRef}></h1>
    </div>
  );
}

export default App;
