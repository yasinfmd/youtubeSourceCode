import logo from './logo.svg';
import './App.css';
import {useEffect} from "react";

function App() {
   useEffect(()=>{
       window.addEventListener('message',(e)=>{
           if(e.origin !== window.location.origin){
               console.log('React',e)
           }
       })
    },[])
  return (
    <div className="App">
      <header className="App-header">
        React To Iframe

          <iframe id="myifrm" src="http://127.0.0.1:5500/index.html" />

          <button onClick={()=>{
                const ifr=document.getElementById('myifrm')
              ifr.contentWindow.postMessage({id:1,data:"React"},"http://127.0.0.1:5500/index.html")
          }}>İframe Veri Gönder</button>
      </header>
    </div>
  );
}

export default App;
