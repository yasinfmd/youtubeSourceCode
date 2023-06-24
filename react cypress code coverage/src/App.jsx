import { useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState('Merhaba')
  const sayHello=()=>{
    alert('Say Hello')
  }
  return (
    <>
     <input id='inputEl' onChange={(e)=>{setText(e.target.value)}}  value={text} />
     <p id='pEl'>{text}</p>
    </>
  )
}

export default App
