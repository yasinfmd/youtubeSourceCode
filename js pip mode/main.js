import './style.css'
const togglePipmode=document.getElementById('togglePipmode')
const videoPlayer=document.getElementById('videoPlayer')

let isActive=false
togglePipmode.onclick= async ()=>{
  try {
    if(isActive){
      isActive=false
      document.exitPictureInPicture()
    }else{
      isActive=true
      await videoPlayer.requestPictureInPicture()

    }
  } catch (error) {
      console.log('errorr',error)
  }
}

