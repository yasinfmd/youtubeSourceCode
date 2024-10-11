import './style.css'

const video=document.getElementById('videoPlayer')
const progress=document.getElementById('progress')
const mute=document.getElementById('mute')

mute.addEventListener('click',()=>{
  mute.innerText=video.muted?'U':'M'
  video.muted=!video.muted
})

video.addEventListener('timeupdate',(e)=>{
  const progressPercent=(video.currentTime / video.duration)*100
  progress.style.width=`${progressPercent}%`
})

video.addEventListener('click',()=>{
  if(video.paused){
    video.play()
  }else{
    video.pause()
  }
})