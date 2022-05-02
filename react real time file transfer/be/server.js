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
io.on('connection', socket => {
    socket.emit('connection',null)
    //dosyayı gönderen kullanıcı !
    //diğer istemciye göndereceğim !
    socket.on('sender',(data)=>{
        socket.to(data.to).emit('sender',data)
    })
    //dosya üst başlıgı
    socket.on('send-file-meta-data',(data)=>{
        socket.to(data.to).emit('send-file-meta-data',data)
    })
    //transfer başlayacagının bilgisi
    socket.on('start-file-transfer',(data)=>{
        socket.to(data.to).emit('start-file-transfer','başlat')
        console.log('transfer başlayacak',data)
    })
    //gelen dosya
    socket.on('sending-file',(data)=>{
        //veriyi buffer parça parça diğer istemciye gönder
        socket.to(data.to).emit('incoming-file',data)
    })
});

server.listen(5000, () => console.log('server is running on port 5000'));


