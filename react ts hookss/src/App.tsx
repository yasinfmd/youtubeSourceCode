import React, {useRef, useEffect, useState, useLayoutEffect, useMemo} from 'react';
import './App.css';
import AppFooter from "./components/AppFooter";

/*const AppFooter=()=>{
    console.log('AppFooter Çalıstı')
    return(
        <div>
            Selam Ben Bir Footer
        </div>
    )
}*/

function App() {
    const inputRef:any=useRef();
    const [value,setValue]=useState('')
    const [value2,setValue2]=useState('')
    const showMessage=()=>{
        const inputValue=inputRef.current.value;
        const custumInput:any=document.getElementById('customInput')
        console.log('refValue',inputValue)
        console.log('idValue',custumInput.value)
        console.log('refValueDisabled',inputRef.current.disabled)
    }
    //asenkron işlemler için dom point ediltek sonra çalısıyo
    useEffect(()=>{
        //component did mount
        console.log('useEffect çalıştı')
        //componenDidUpdate
        //console.log('Çalıstı')
    },[value])
    //senkron ve dom oint edilmenden önce calısır useffectgende önce
    useLayoutEffect(()=>{
        console.log('useLayoutEffect')
    },[])

/*    const renderAppFooter=useMemo(()=>{
        return <AppFooter />
    },[value2])*/
  return (
    <div className="App">
      <header className="App-header">
          <div>
              <label>Ref </label>

              <input  ref={inputRef} id='customInput' />
          </div>
          <div>
              <label>Value 1</label>
              <input value={value} onChange={(e)=>{setValue(e.target.value) }}/>
          </div>
          <div>
              <label>Value 2</label>
              <input value={value2} onChange={(e)=>{setValue2(e.target.value) }}/>
          </div>
          <div>
              <button onClick={()=>{showMessage()}}>Mesaj Ver</button>
          </div>
      </header>
        <AppFooter />
    </div>
  );
}

export default App;
