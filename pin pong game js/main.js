
let canvas=document.getElementById('myCanvas')
let ctx=canvas.getContext('2d')
let x=canvas.clientWidth/2
let y=canvas.clientHeight-60
let ballRadius=8
let el =document.getElementById('score')

let paddleHeight=8
let paddleWidth=700
let paddeX=(canvas.clientWidth-paddleWidth)/2

let targets=[]

let bx=5
let by=-5

let targetWidth=84
let targetHeight=20
let targetPadding=10
let topOffset=30
let leftOffset=30

let leftPressed=false
let rightPressed=false

let rowCount=3
let colCount=10

let score=0

let totalGame=1

const drawTargets=()=>{
  for (let c = 0; c < colCount; c++) {
    for (let r = 0; r <rowCount; r++) {
      if(targets[c][r].status===1){
        let targetX=(c*(targetWidth+targetPadding))+leftOffset
        let targetY=(r*(targetHeight+targetPadding))+topOffset
        targets[c][r].x=targetX
        targets[c][r].y=targetY
        ctx.beginPath()
        ctx.rect(targetX,targetY,targetWidth,targetHeight)
        ctx.fillStyle='#fe21c4'
        ctx.fill()
        ctx.closePath()

      }
      
    }
    
  }
}

const collisionDetect=()=>{
  for (let c = 0; c < colCount; c++) {
    for (let r = 0; r <rowCount; r++) {
      const val=targets[c][r]
      if(val.status==1){
        if(x>val.x && x<val.x + targetWidth && y > val.y && y<val.y+targetHeight){
            by=-by;
            val.status=0
            score++
            el.innerHTML=`Puan : ${score}`
        }
      }
    }
  }
}

const drawBall=()=>{
  ctx.beginPath()
  ctx.arc(x,y,ballRadius,0,Math.PI*2)
  ctx.fillStyle="#21feac"
  ctx.fill()
  ctx.closePath()
}

const drawPaddle=()=>{
  ctx.beginPath()
  ctx.rect(paddeX,canvas.clientHeight-paddleHeight,paddleWidth,paddleHeight)
  ctx.fillStyle="#fe21c4"
  ctx.fill()
  ctx.closePath()
}


function draw(){
  ctx.clearRect(0,0,canvas.clientWidth,canvas.clientHeight)
  collisionDetect()
  drawTargets()
  drawBall()
  drawPaddle()

  if(score===(rowCount*colCount)*totalGame){
    totalGame++
    setTimeout(()=>{
      for (let c = 0; c <colCount; c++) {
        targets[c]=[]
        for (let r = 0; r < rowCount; r++) {
           targets[c][r]={x:0,y:0,status:1}
        }
      }
    },250)
  }
   if(x+bx > canvas.clientWidth-ballRadius || x+bx < ballRadius){
     bx=-bx
   }
  if(y+by<ballRadius){
     by=-by
   }else if(y+by>canvas.clientHeight-ballRadius){
    if(x>paddeX && x<paddeX + paddleWidth){
      if(y=y-paddleHeight){
        by=-by;
      }
    }else{
      alert('yandın')
    }
   }


  x+=bx
  y+=by
  if(rightPressed && paddeX <canvas.clientWidth-paddleWidth){
    paddeX+=4
  }else if(leftPressed && paddeX >0){
    paddeX-=4
  }

  requestAnimationFrame(draw)
}


const createBricks=(cb)=>{
  for (let c = 0; c <colCount; c++) {
    targets[c]=[]
    for (let r = 0; r < rowCount; r++) {
       targets[c][r]={x:0,y:0,status:1}
    }
  }
  cb()
}
createBricks(()=>{
  draw()
})


const keydownhandle=(e)=>{
  if(e.key==="Right" || e.key==="ArrowRight"){
    rightPressed=true
  }else if(e.key==="Left" || e.key==="ArrowLeft"){
    leftPressed=true
  }
}

const keyuphandle=(e)=>{
  if(e.key==="Right" || e.key==="ArrowRight"){
    rightPressed=false
  }else if(e.key==="Left" || e.key==="ArrowLeft"){
    leftPressed=false
  }
}

document.addEventListener('keydown',keydownhandle,false)
document.addEventListener('keyup',keyuphandle,false)