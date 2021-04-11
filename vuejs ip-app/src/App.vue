<template>
<div>
<h3>Ip Bilgileriniz </h3>
<p> Ip : {{myIp.ip}} </p>
<p> Şehir : {{myIp.region_name}} </p>
<p> Şehir  Plaka: {{myIp.region_code}} </p>
<p> Ip Türü : {{myIp.type}} </p>
<p> Ülke : {{myIp.country_name}} </p>
<p> Zıp Code : {{myIp.zip}} </p>
<p> <img v-if="myIp.location" :src="myIp.location.country_flag" /></p>
</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data(){
    return{
      myIp:{},
      myAccesKey:'892511b08bdf77b74d6da91b6f1b095c'
    }
  },
  created(){
    this.findMyIp();
    this.fetchDataWithIp();
  },
  methods:{
    findMyIp(){
      fetch('http://api.ipstack.com/check?access_key='+this.myAccesKey)
      .then(response => response.json())
      .then(json => {
        console.log('json',json)
        this.myIp=json;
      })
    },
    fetchDataWithIp(){
      
         fetch('http://api.ipstack.com/134.201.250.155?access_key='+this.myAccesKey)
      .then(response => response.json())
      .then(json => {
        console.log('test',json)
        //this.myIp=json;
      })
    }
  }
}
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
