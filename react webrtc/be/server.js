const express = require('express')
const socket = require('socket.io')
const PORT = 5000
const {ExpressPeerServer} = require('peer')

const app = express()

const server = app.listen(PORT, () => {
    console.log('running on 5000')
})

const peerServer = ExpressPeerServer(server, {debug: true})
app.use('/peerjs',peerServer)

peerServer.on('connection',(client)=>{
    console.log('peer client',client.getId())
})
peerServer.on('disconnect',(client)=>{
    console.log('peer client leave')
})
const io=socket(server,{
    cors:{
        origin:"*",
        method:["GET"]
    }
})

io.on('connection',(socket)=>{
    socket.emit('connection',null)
    console.log('user',socket.id)
    socket.on('my-test-call',(data)=>{
        socket.broadcast.emit('my-test-call',{
            peerId:data.peerId,
            socketId:data.socketId
        })
    })
})
