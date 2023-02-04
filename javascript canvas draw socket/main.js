let socket=io('http://localhost:3000')


const canvas=document.getElementById('canvas')
const ctx=canvas.getContext('2d')

let coord={x:0,y:0}
const start=(event)=>{
    document.addEventListener('mousemove',draw)
    coord.x=event.clientX-canvas.offsetLeft
    coord.y=event.clientY-canvas.offsetTop

    socket.emit('coord',{...coord})


}

const stop=()=>{
    document.removeEventListener('mousemove',draw)
}
const draw=(event)=>{
    ctx.beginPath()
    ctx.lineWidth=1;
    ctx.lineCap='round'
    ctx.strokeStyle='#75E314'
    ctx.moveTo(coord.x,coord.y)
    socket.emit('draw',{
        clientX:event.clientX,
        clientY:event.clientY
    })
    coord.x=event.clientX-canvas.offsetLeft
    coord.y=event.clientY-canvas.offsetTop
    ctx.lineTo(coord.x,coord.y)
    ctx.stroke()


}
const resize=()=>{
    ctx.canvas.width=window.innerWidth
    ctx.canvas.height=window.innerHeight

}

socket.on('coordStart',(data)=>{
    console.log('data',data)
    coord={...data}
})

socket.on('draw',(event)=>{
    ctx.beginPath()
    ctx.lineWidth=1;
    ctx.lineCap='round'
    ctx.strokeStyle='#75E314'
    ctx.moveTo(coord.x,coord.y)
    coord.x=event.clientX-canvas.offsetLeft
    coord.y=event.clientY-canvas.offsetTop
    ctx.lineTo(coord.x,coord.y)
    ctx.stroke()
})

window.addEventListener('resize',resize)
document.addEventListener('mousedown',start)
document.addEventListener('mouseup',stop)

document.addEventListener("DOMContentLoaded", resize);
