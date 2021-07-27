import React,{useRef} from 'react';
import './App.css';
import Button from './components/Button'
function App() {
  const btnRef=useRef()
  return (
    <div className="App">
      <header className="App-header">
        <Button ref={btnRef} onClick={()=>{
          alert("butona tıklandı")
        }} />

        <button onClick={()=>{
          debugger
          console.log("btnRef",btnRef)
        }}>Referansa Bak</button>
      </header>
    </div>
  );
}

export default App;
