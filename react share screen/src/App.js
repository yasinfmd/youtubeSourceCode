import './App.css';
import {useRef} from "react";

const data = []
let stream;

function App() {
    const videoRef = useRef()
    const shareScreen = async () => {
        if (navigator.mediaDevices.getDisplayMedia) {
            stream = await navigator.mediaDevices.getDisplayMedia({
                audio: true,
                video: {
                    cursor: "always"
                }
            })
            const mr = new MediaRecorder(stream)

            mr.ondataavailable = (chnk) => {
                console.log(chnk.data)
                data.push(chnk.data)
            }
            mr.start(1000)

            mr.onstop = (c) => {
                console.log('cEvent', c)
                const videoUrl = URL.createObjectURL(new Blob(data, {type: 'video/mp4'}))
                alert(videoUrl)
                videoRef.current.src=videoUrl
            }
            console.log('stream', stream)
           //videoRef.current.srcObject = stream
        }
    }


    return (
        <div className="App">
            <button onClick={() => {
                shareScreen()
            }}>Ekran Paylaş
            </button>
            <button onClick={() => {
                let tracks = videoRef.current.srcObject.getTracks()
                tracks.forEach((t) => t.stop())
                videoRef.current.srcObject = null
                console.log(tracks)
            }}>Ekran Durdur
            </button>

            <header className="App-header">
                <video width={800} height={800} ref={videoRef} autoPlay controls/>
            </header>
        </div>
    );
}

export default App;
