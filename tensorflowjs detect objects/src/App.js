import './App.css';
import React, { useEffect, useRef, useState } from "react"

import family from "./family.jpg"
import dog from "./dog.jpg"
import cat from "./cat.jpg"


require("@tensorflow/tfjs-backend-webgl")
require("@tensorflow/tfjs-backend-cpu")
const cocoSsd = require("@tensorflow-models/coco-ssd")
function App() {
  const [stream, setStream] = useState(null)
  const imageRef = useRef()
  const videoRef = useRef()

  const [data, setData] = useState([])
  const getModels = async () => {
    if (videoRef.current) {
      const model = await cocoSsd.load()
      // const result = await model.detect(imageRef.current)
      const result = await model.detect(videoRef.current)
      console.log("bulunan nesneler", result)
      setData(result)
    }

  }
  useEffect(() => {
    if (stream) {
      videoRef.current.srcObject = stream
      videoRef.current.play()

    }
  }, [stream])
  useEffect(() => {
    //
    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((_stream) => {
      setStream(_stream)
      setInterval(() => {
        getModels()
      }, 200)
    })

  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <div className="relative">
          {data.map((item, index) => {
            return (
              <div className="absoluteItem" key={index} style={{ left: item.bbox[0], top: item.bbox[1], width: item.bbox[2], height: item.bbox[3] }}>
                {item.class}
              </div>
            )
          })}
          <video ref={videoRef} width={500} height={500} />
          {/* <img ref={imageRef} src={cat} alt="" /> */}
        </div>
      </header>
    </div>
  );
}

export default App;
