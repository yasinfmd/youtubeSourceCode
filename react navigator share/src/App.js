import './App.css';
import {useState} from "react";

function App() {
    const [files,setFiles]=useState([])
    const shareData=async ()=>{
        if(navigator.share && navigator.canShare({files:files})){
            await navigator.share({
                title:"Bu sayfayı çok beğendim",
                text:"Bu sayfanın iiçeriğine bir bakmalısın",
                url:"https://www.youtube.com/",
                files:files
            })
        }else{
            alert('Destek yok paylaşım olmaz')
        }
    }
    return (
        <div className="App">

            <header className="App-header">
                <input type="file" multiple onChange={(e)=>{setFiles(e.target.files)}} />
                <button onClick={()=>{
                    shareData()
                }}>Paylaş</button>
            </header>
        </div>
    );
}

export default App;
