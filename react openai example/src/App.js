import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
const { Configuration, OpenAIApi } = require("openai");

function App() {
  const [text,setText]=useState("")
  const configuration = new Configuration({
    apiKey: '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',
  });
  const [result,setResult]=useState('')
  const openai = new OpenAIApi(configuration);

  const callOpenAI=()=>{
    openai.createCompletion({
      model: "text-davinci-003",
      prompt: text,
      temperature: 0.3,
      max_tokens: 60,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    }).then((res)=>{
      setResult(res.data.choices[0].text)
      console.log('res', res.data.choices[0].text)
    })
  }
  useEffect(()=>{
     // callOpenAI()
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <input value={text} onChange={(e)=>{
          setText(e.target.value)
        }} />
        <button onClick={()=>{
            callOpenAI()
        }}>İstediğini ara</button>
          <h1 style={{color:'#fff'}}>
          {result}
      </h1>
      </header>
    
    </div>
  );
}

export default App;
