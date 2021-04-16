const express = require('express')
const app = express();
const http = require('http')
const server = http.createServer(app)
const io = require('socket.io')(server, {
    cors: {
        origin: 'http://localhost:8080'
    }
})

let users = new Set();

io.on('connection', (socket) => {
    socket.on('disconnect', () => {
        console.log('Kullanıcı gidiyorrr' + ' ' + socket.id)
        users.delete(socket.id)
        // console.log('users', users)
    })
    // o an bağlanan client için socket bilgisini gönderdik
    socket.emit('customConnection', socket.id)
    //bağlı olan tüm clientlara mesaj göndermek
    //io.emit('welcome', '15 Nisan 2021 Hoşgeldiniz')

    // bağlı olan client haric tüm clientlara mesaj göndermek
    socket.broadcast.emit('otherwelcom', 'Ben Hariç Herkese')

    const query = socket.handshake.query;
    console.log(query.mykey)
    socket.on('chat', (data) => {
        io.to(data.userid).emit('chat', { mesaj: data.msg, kimden: data.meid })
    })
    socket.on('clientToServer', (json) => {
        // ne yapmak istiyosam
        //console.log('socketId', socket.id)
        //console.log('istemciden geliyor', json)
    })
    const connectedCl = io.sockets.adapter.rooms
    connectedCl.forEach((value, key) => {
        users.add(key)
    })
    users.forEach((socketId) => {
        //console.log('socketId', socketId)
        /*
            1 ali
            2 veli
            3 ayşe

        */
        io.to(socketId).emit('onlineUsers', findUsers(socketId))
    })
    //console.log('users', users)
    //console.log('connectedCl', connectedCl)


})

const findUsers = (id) => {
    const arr = [...users].filter((item) => {
        return item !== id
    })
    // console.log('array', arr)
    return arr
}



server.listen(3000, () => {
    console.log('Server Listening at Port ' + 3000)
})