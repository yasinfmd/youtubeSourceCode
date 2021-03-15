<template>
Vuejs Env ve Config Kullanımı
</template>

<script>
import axios from 'axios'
export default {
  //
  created(){
    axios.get('/api/todos/1').then((res)=>{
      console.log('res',res)
    })
    console.log('env',process.env.VUE_APP_DB)
  },
  name: 'App',
  components: {
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
