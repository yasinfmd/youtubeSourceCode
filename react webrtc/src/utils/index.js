import socketClient from 'socket.io-client'

import store from "../store/store";

import {setLocalStream, setRemoteStream} from "../store/rtcSlice";

let socket;
let myPeer;
const SERVER = "http://localhost:5000"


export const handleVideo=(data)=>{
    debugger
    const localStream=store.getState().rtc.localStream
    const call=myPeer.call(data.peerId,localStream)
    call.on('stream',(incomingStream)=>{
        console.log('remote',incomingStream)
        store.dispatch(setRemoteStream(incomingStream))
    })
}

export const connectWithWebSocket = () => {
    debugger
    socket=socketClient(SERVER)
    console.log(socket)
    socket.on('connection',()=>{
        console.log('Bağlandı',socket.id)
        window.mySocketId=socket.id
    })
    socket.on('my-test-call',(data)=>{
        if(data.socketId !== window.mySocketId){
            handleVideo(data)
        }
    })
}

export const connectWithPeer=()=>{
    myPeer=new window.Peer(undefined,{
        path:'/peerjs',
        host:'/',
        port:5000
    })
    myPeer.on('open',(id)=>{
        console.log('id',id)
        window.myPeer=id
    })
    myPeer.on('call',(call)=>{
        debugger
        call.answer(store.getState().rtc.localStream)
        call.on('stream',(incomingStream)=>{
            console.log('stream',incomingStream)
            store.dispatch(setRemoteStream(incomingStream))
        })
    })
}

var constraints = { audio: true, video: { width: 1280, height: 720 } };
export const getLocalStream=()=>{
    navigator.mediaDevices.getUserMedia(constraints).then((stream)=>{
        console.log('myStream',stream)
        store.dispatch(setLocalStream(stream))
    }).catch((err)=>{
        console.log('err',err)
    })
}
export const callRequest=(data)=>{
    socket.emit('my-test-call',data)
}
