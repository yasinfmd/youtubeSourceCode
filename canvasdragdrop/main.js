import './style.css'


const canvas=document.getElementById('myCanvas')
const ctx=canvas.getContext('2d')

let rect={
  x:50,
  y:50,
  width:100,
  height:100,
  isDragging:false
}

const drawRect=()=>{
  ctx.clearRect(0,0,canvas.width,canvas.height)
  ctx.fillStyle='red'
  ctx.fillRect(rect.x,rect.y,rect.width,rect.height)
}

const isInRect=(x,y)=>{
  return(
    x>=rect.x && 
    x<=rect.x+rect.width &&
    y>=rect.y &&
    y<=rect.y+rect.height
  )
}
canvas.addEventListener('mousedown',(e)=>{
  const rectCanvas=canvas.getBoundingClientRect()
  const x=e.clientX-rectCanvas.left
  const y=e.clientY - rectCanvas.top
  if(isInRect(x,y)){
    rect.isDragging=true
  }
})

canvas.addEventListener('mousemove',(e)=>{
  if(rect.isDragging){
  const rectCanvas=canvas.getBoundingClientRect()
  const x=e.clientX - rectCanvas.left
  const y=e.clientY - rectCanvas.top
  rect.x=x-rect.width/2
  rect.y=y-rect.height/2
  drawRect()

  }

})

canvas.addEventListener('mouseup',()=>{
  rect.isDragging=false
})


drawRect()