import React, { useState } from "react";

import { ExampleComponent , YoutubeButton , YoutubeInput } from 'youtube-ui'
import 'youtube-ui/dist/index.css'

const App = () => {
  const [text,setText]=useState("")
  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
      <div style={{maxWidth:"1200px", display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column" }}>
        <ExampleComponent text="Create React Library Example 😄" />
        <YoutubeInput placeholder="Enter Name .." id="my_custom_input"  size="m" value={text} onChange={(string)=>setText(string)}/>
        <br/>
        <YoutubeButton variant="dark"  onClick={()=>{
          alert("Tıklandı")
        }} text="Tıkla " />
      </div>
    </div>
  )
}

export default App
