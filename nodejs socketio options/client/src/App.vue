<template>
   <div id="app">
   <h2>Benim Socket Id : {{socketId}}</h2>
   <button @click="onSendMsg()">Servera Socket Üzerinden Merhaba De :) </button>

   <div>
   <h4>Online Kullanıcılar {{onlineUsers.length}}</h4>
   <ul v-for="item in onlineUsers" :key="item">
   <li>{{item}} <button @click="selectedUser = item">Konuş</button></li>
   </ul>
   </div>
   <div>
    Konusulacak Kişi {{selectedUser}} <button @click="onSendHello()">Selam Çak :)</button>
   </div>
   </div>
</template>

<script>
import {io,Manager} from 'socket.io-client'
export default {
   name: "App",
   data(){
     return{
       socket:{},
       socketId:'',
       onlineUsers:[],
       selectedUser:''
     }
   },
   created(){
    //  const manager = new Manager("http://localhost:3000/", {
    // reconnectionDelayMax: 10000,
    // query: {
    //   "my-key": "my-value"
    // }
    // });
    // console.log('manager',manager)
    try {
         this.socket=io('http://localhost:3000/',{
           autoConnect:true,
           reconnection:true,
           reconnectionAttempts:5,
           reconnectionDelayMax:200,
           timeout:5000,
           query:{
            'mykey':'mykey'
           }

         })
    } catch (error) {
      console.log('hata',error)
    }
  
     console.log('socket',this.socket)
   },
   methods:{
     onSendHello(){
      this.socket.emit('chat',{userid:this.selectedUser,meid:this.socketId, msg:'Merhaba Arkadaş'})
     },
    onSendMsg(){
      this.socket.emit('clientToServer',{msg:'Merhaba Dünya'})
    }
   },
   mounted(){
      this.socket.on('customConnection',(socketId)=>{
        this.socketId=socketId;
        console.log(`Serverdan Sana Gelen Socket ID : ${socketId}`)
      })
      this.socket.on('welcome',(msg)=>{
        console.log('Serverdan Tümüne Gönderilen Mesaj'+ ' ' + msg)
      })

      this.socket.on('otherwelcom',(msg)=>{
        console.log('Msg',msg)
      })
      this.socket.on('onlineUsers',(usersArray)=>{
        this.onlineUsers=usersArray;
      })
        this.socket.on('chat',(message)=>{
          console.log('mesaj',message)
      })

   }
};
</script>

<style>
#app {
   font-family: Avenir, Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   text-align: center;
   color: #2c3e50;
   margin-top: 60px;
}
</style>
