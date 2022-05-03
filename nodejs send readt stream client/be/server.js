const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const socket = require("socket.io");
const io = socket(server,{
        cors:{
                origin:'*'
        }
});

const fs=require('fs')
const inp=fs.createReadStream('test.txt')
io.on('connection', socket => {
        console.log('socket',socket.id)
        socket.emit('connection',null)
        socket.on('readFile',()=>{
                setTimeout(()=>{
                        inp.on('data',(chnk)=>{
                                socket.emit('text',chnk.toString())
                        })
                },1000)

        })



});

server.listen(process.env.PORT || 5000, () => console.log('server is running on port 5000'));


