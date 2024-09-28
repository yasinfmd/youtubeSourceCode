import cat from './image.png'
import { Jimp } from 'jimp'
document.getElementById('myimg').style.width="200px"
document.getElementById('myimg').src=cat
import './style.css'

const handleImageColors=async()=>{
  const image=await Jimp.read(cat)
  const data=image.bitmap.data
  const colors=[]
  //rgba(1,2,5,1)[[1,2,3,1],[34,645,654,65]]
  //              [],[] 
  for (let index = 0; index < data.length; index+=4) {
      const red=data[index]
      const green=data[index+1]
      const blue=data[index+2]
      const opacity=data[index+3]
      colors.push({red,green,blue,opacity})
      
  }

  console.log('renk cumbüsü',colors)
  console.log('data',data)

  for (let index = 0; index < colors.length; index++) {
    const div=document.createElement('div')
    div.style.width="40px"
    div.style.height="40px"
    div.style.backgroundColor=`rgba(${colors[index].red},${colors[index].green},${colors[index].blue},${colors[index].opacity})`
    document.getElementById('app').appendChild(div)
    
  }
}

handleImageColors()