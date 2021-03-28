<template>
  <div>
    <button @click="onFetch()">Tıkla ve Veri Al</button>

  </div>
  <div>
    <input v-model="myName" />
  </div>
  <a-componenti :title="myName"/>
</template>

<script>

import AComponenti from "@/components/AComponenti";
import {ref,provide} from 'vue'
export default {
  name: 'App',
  components: {
    AComponenti
  },
  setup(){
      const myName=ref('')
      const myTodo=ref();
      provide('myName',myName)
      provide('myTodo',myTodo)

    const onFetch=async ()=>{
        const response=await  fetch('https://jsonplaceholder.typicode.com/todos/1')
        const value=await response.json();
        myTodo.value=value;
        console.log('value',value)
    }
    return {
        onFetch,
        myName
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
