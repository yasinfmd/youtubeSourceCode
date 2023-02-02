const express=require('express')
const app=express();
const http=require('http')

const server=http.createServer(atob)
const io=require('socket.io')(server,{
    cors:{
        origin:'http://localhost:5173'
    }
})

io.on('connection',(socket)=>{
    console.log('socket.id', socket.id)

    socket.on('coord',(data)=>{
        socket.broadcast.emit('coordStart',data)
    })

    socket.on('draw',(data)=>{
        socket.broadcast.emit('draw',data)
    })
})


server.listen(3000,()=>{
    console.log('running on port 3000')
})