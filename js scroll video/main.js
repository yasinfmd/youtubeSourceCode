import './style.css'
const video=document.getElementById('myVideo')
const container=document.getElementById('videoContainer')
video.addEventListener('loadedmetadata',()=>{
  console.log(video.duration)
  container.style.height=(video.duration*250)+'px'
})
const playVideo=()=>{
  const scrollY=window.scrollY
  console.log(document.documentElement.scrollHeight)
  const height=document.documentElement.scrollHeight-window.innerHeight
  const perc=(scrollY/height)
  console.log('perc',perc)
  video.currentTime=video.duration*perc
 // window.requestAnimationFrame(playVideo)
}


window.addEventListener('scroll',playVideo)