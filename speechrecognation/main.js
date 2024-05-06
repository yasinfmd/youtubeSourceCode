import './style.css'
const btn=document.getElementById('btn')
const scrollToEl=(el)=>{
  document.querySelector(el).scrollIntoView({
    behavior:'smooth'
  })

}

const handleMic=()=>{
  if(window.SpeechRecognition || window.webkitSpeechRecognition){
    const recognition=new     window.webkitSpeechRecognition || window.webkitSpeechRecognition()
   let isListening=false
    const startRecognition=()=>{
      recognition.start()
      isListening=true
      btn.innerHTML="Dinleniyor"
    }
    const stopRecoginition=()=>{
      recognition.stop()
      isListening=false
      btn.innerHTML="Dinle"
    }
    btn.onclick=()=>{
      if(isListening===false){
        startRecognition()
      }else{
        stopRecoginition()
      }
      recognition.onerror=(e)=>
        {
          
        }
      recognition.onresult=(e)=>{
        const command=e.results[e.results.length-1][0]
        if(command.confidence>0.5){
            if(command.transcript.toLowerCase().includes('s1 git')){
              stopRecoginition()
              scrollToEl('.s1')
            }
            if(command.transcript.toLowerCase().includes('s2 git')){
              stopRecoginition()
              scrollToEl('.s2')
              
            }
            if(command.transcript.toLowerCase().includes('s5 git')){
              stopRecoginition()
              scrollToEl('.s3')
            }
            if(command.transcript.toLowerCase().includes('durdur')){
             stopRecoginition()
            }
        }
      }
    }
  
  }
}
handleMic()