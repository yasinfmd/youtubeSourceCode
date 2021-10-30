import './App.css';
import React, { useState } from "react"
require("@tensorflow/tfjs")
const toxicty = require("@tensorflow-models/toxicity")
function App() {
  const [state, setState] = useState("")

  const onValidate = async () => {

    const threshold = 0.9
    const result = await toxicty.load(threshold)
    const result2 = await result.classify([state, "idiot"])
    console.log("result", result2)
  }
  return (
    <div className="App">
      <header className="App-header">

        <textarea value={state} onChange={(e) => {
          setState(e.target.value)
        }}></textarea>

        <button onClick={() => {
          onValidate()
        }}>Tıkla ve Kontrol Et</button>
      </header>
    </div>
  );
}

export default App;
