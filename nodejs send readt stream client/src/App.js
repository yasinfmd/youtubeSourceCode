import './App.css';
import socketClient from 'socket.io-client'
import {useEffect, useState} from "react";
let socket
function App() {
    const [data,setData]=useState('')
  useEffect(()=>{
    socket=socketClient('http://localhost:5000')
    socket.on('connection',()=>{
      console.log('socket',socket.id)
    })
    socket.on('text',(txt)=>{
        console.log('gelen',txt)
        setTimeout(()=>{
            setData((prevState => prevState.concat(txt)))
        },1000)

    })
  },[])
  return (
    <div className="App">
      <button onClick={()=>{
        socket.emit('readFile')
      }}>Oku</button>
      <header className="App-header">
          {data}
      </header>
    </div>
  );
}

export default App;
