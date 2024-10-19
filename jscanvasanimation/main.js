import './style.css'
import pathsss from './signature'
const canvas=document.getElementById('myCanvas')
console.log(canvas)
const ctx=canvas.getContext('2d')
let isDrawing=false
let paths=[]


canvas.addEventListener('mousedown',()=>{
 // isDrawing=true
  paths=[]
})
canvas.addEventListener('mousemove',(e)=>{
  if(!isDrawing)return
  const x=e.offsetX
  const y=e.offsetY
  ctx.lineTo(x,y)
  ctx.stroke()

  paths.push({x,y})
  console.log(JSON.stringify(paths))
})
canvas.addEventListener('mouseup',()=>{
  isDrawing=false,
  ctx.beginPath()
  
})
canvas.addEventListener('mouseleave',()=>{
  isDrawing=false
  ctx.beginPath()

})

console.log(pathsss)
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
let cpoint=0
const drawSign=()=>{
  if(cpoint>=pathsss.length-1) return
  const start=pathsss[cpoint]
  const end=pathsss[cpoint+1]
  ctx.beginPath()
  ctx.moveTo(start.x,start.y)
  ctx.lineTo(end.x,end.y)
  ctx.lineWidth=1.5
  ctx.stroke()
  ctx.strokeStyle = '#fff'
  cpoint++
  requestAnimationFrame(drawSign)
}
drawSign()