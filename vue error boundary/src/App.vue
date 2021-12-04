<template>
<div v-for="item in data" :key="item">
<VueErrorBoundary :fall-back="fallback" :params={id:item} :on-error="catchError">  
  <HelloWorld :msg="item" />
  </VueErrorBoundary>
</div>


</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import VueErrorBoundary from "vue-error-boundary"
import MyFallBack from "./components/MyFallBack.vue"
export default {
  name: 'App',
  methods:{
    catchError(err,vm,info){
        console.log("err",err.message)
        console.log(`vm`, vm)
        console.log(`info`, info)
    }
  },
  data(){
    return{
      data:["yasin","ali",1],
      mydata:100,
      fallback:MyFallBack
    }
  },
  components: {
    HelloWorld,
    VueErrorBoundary
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
