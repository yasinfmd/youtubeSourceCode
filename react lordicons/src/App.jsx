import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';

// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
      <lord-icon
    src="https://cdn.lordicon.com/lxotnbfa.json"
    trigger="hover"
    style={{width:"200px",height:"200px"}}
    >
</lord-icon>
<lord-icon
    src="https://cdn.lordicon.com/wlpxtupd.json"
    trigger="hover"
    colors="primary:#121331,secondary:#08a88a"
    stroke="40"
    state="hover-1"
    style={{width:"200px",height:"200px"}}
    >
</lord-icon>
      <lord-icon
    src="https://cdn.lordicon.com/dfxesbyu.json"
    trigger="hover"
    colors="primary:#4be1ec,secondary:#cb5eee"
    state="hover-1"
    style={{width:"200px",height:"200px"}}
    >
</lord-icon>

        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
