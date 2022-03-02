import './App.css';
import ReCAPTCHA from "react-google-recaptcha";
import {useRef} from "react";

const key = "6LcNoqweAAAAAD-2InkJlqEKl8uxYTwpdqTlUkWO"

function App() {
    const captchaRef=useRef()
    return (<div className="App">
            <ReCAPTCHA
                ref={captchaRef}
                sitekey={key}
                size="invisible"
                hl="en"
                theme="dark"
                onErrored={(e)=>{console.log('e',e)}}
                onExpired={(ex)=>{console.log('ex',ex)}}
                onChange={(t) => {
                    console.log('t', t)
                }}

            />
            <button onClick={async()=>{
                const token=await captchaRef.current.execute()
                console.log('token',token)
            }}>Formu Gönder</button>
        </div>
    );
}

export default App;