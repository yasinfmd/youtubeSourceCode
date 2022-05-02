import './App.css';
import {useEffect, useRef, useState} from "react";
import * as SOCKET from './socket'
function App() {
    const [otherSocketId,setOtherSocketId]=useState('')
    const [file, setFile] = useState();
    useEffect(()=>{
        SOCKET.CreateConnection()
    },[])
    const selectFile=(e)=>{
        setFile(e.target.files[0])
    }
    return (
        <div className="App">
            <header className="App-header">
                <input onChange={selectFile} type="file" />

                <input value={otherSocketId} onChange={(e)=>{setOtherSocketId(e.target.value)}}/>
                <button onClick={()=>{
                    SOCKET.connectOtherUser(otherSocketId)
                }}>Bağlan</button>

                <button onClick={()=>{SOCKET.shareFile(file,otherSocketId)}}>Gönder</button>
            </header>
        </div>
    );
}

export default App;
