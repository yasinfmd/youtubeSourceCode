import React , {useState,useEffect} from "react"
import './App.css';
import axios from "axios";
function App() {
  const [text,setText]=useState("")

    useEffect(()=>{
        let cancel
        if(text.length>0){
            axios({
                method:"GET",
                url:"http://jsonplaceholder.typicode.com/posts",
                cancelToken:new axios.CancelToken((c)=>cancel=c)


            }).then((response)=>{
                        console.log("res",response)
            }).catch((e)=>{
                if(axios.isCancel(e))return
                console.log("e",e)
            })
        }
        return ()=>{
            if(cancel){
                cancel()
            }
        }
    },[text])
  return (
    <div className="App">
      <header className="App-header">
        {text.length}
        <input value={text} onChange={(e)=>{setText(e.target.value)}}/>
      </header>
    </div>
  );
}

export default App;
