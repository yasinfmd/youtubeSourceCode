import { useEffect, useRef, useState } from 'react'
import './App.css'
import ReactPlayer from 'react-player'
import trvtt from './tr.vtt?url'
import envtt from './en.vtt?url'

function App() {
  const url='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'
  const player=useRef()
  const [playing,setPlaying]=useState(false)
  const [trackLang,setTrackLang]=useState()
  useEffect(()=>{
    if(trackLang){
      const tracks=player.current.getInternalPlayer()?.textTracks;
      for (let index = 0; index < tracks.length; index++) {
        if(tracks[index].language===trackLang){
          tracks[index].mode='showing'
        }else{
          tracks[index].mode='disabled'
        }
        
      }
      console.log(tracks)
    }
  },[trackLang])
  return (
    <>
      <div>
      <ReactPlayer 
      config={{
        file:{
          attributes:{
            crossOrigin:'anonymous'
          },
          tracks:[
            {
                kind:'subtitles',
                src:trvtt,
                srcLang:'tr',
                default:false,
            },
            {
              kind:'subtitles',
              src:envtt,
              srcLang:'en',
              default:false,


            }
          ]
        }
      }}  
      muted
      loop
      url={url}
      playing={playing}
      ref={player}
      />

      <button onClick={()=>{
        setPlaying(!playing)
      }}>Play</button>

      <button onClick={()=>{
          setTrackLang('en')
      }}>En</button>
      <button onClick={()=>{
          setTrackLang('tr')
      }}>Tr</button>

        </div>
        
    </>
  )
}

export default App
