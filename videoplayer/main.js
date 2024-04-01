import './style.css'
import data from './data.json'
const playList=document.getElementById('playlist')
const video=document.getElementById('video')

let activeIndex=0
const generateNewUrl=(url,imgUrl)=>{
  const urlParts=url.split('sample')
  const newUrl=urlParts[0]+"sample/"+imgUrl
  return newUrl
}

const playVideo=(index,videoUrl,playitem)=>{
  video.src=videoUrl
  document.body.click()

  const playListItems=document.querySelectorAll('.playlist-item')
  playListItems.forEach((item)=>{
    item.classList.remove('active')
  })
  playitem.classList.add('active')
  activeIndex=index
  video.play()
  document.getElementById(videoUrl).scrollIntoView({
    behavior: 'smooth'
});


  
}
const playNextVideo=()=>{
  const videos=data.categories[0].videos
  activeIndex=(activeIndex+1)%videos.length
  const nextVideoData=videos[activeIndex]
const nextPlayItem=playList.children[activeIndex]
  playVideo(activeIndex,nextVideoData.sources[0],nextPlayItem)
}

video.addEventListener('ended',playNextVideo)

const generatePlayList=()=>{
  const videos=data.categories[0].videos
  videos.forEach((item,index)=>{
    const playListItem=document.createElement('div')
    playListItem.classList.add('playlist-item')
    const titleItem=document.createElement('div')
    titleItem.classList.add('title')
    titleItem.textContent=item.title


    const thumbItem=document.createElement('div')
    thumbItem.classList.add('thumb')
    const imgItem=document.createElement('div')
    imgItem.classList.add('image')
    const img=document.createElement('img')
    img.src=generateNewUrl(item.sources[0],item.thumb)
    imgItem.appendChild(img)
    thumbItem.appendChild(imgItem)
    const infoItem=document.createElement('div')

    infoItem.classList.add('info')
    const subInfoItem=document.createElement('div')
    subInfoItem.textContent=item.subtitle

    const desc=document.createElement('div')
    desc.classList.add('desc')
    desc.textContent=item.description
    infoItem.appendChild(subInfoItem)
    infoItem.appendChild(desc)
    thumbItem.appendChild(infoItem)
    playListItem.setAttribute('id',item.sources[0])
    playListItem.appendChild(titleItem)
    playListItem.appendChild(thumbItem)
    playListItem.addEventListener('click',()=>playVideo(index,item.sources[0],playListItem))

    playList.appendChild(playListItem)
    if(index===0){
      playVideo(index,item.sources[0],playListItem)
    }
  })
}

generatePlayList()