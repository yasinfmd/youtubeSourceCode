<script setup>
import HelloWorld from './components/HelloWorld.vue'
import {useCounterStore} from './store/counter'
const counter = useCounterStore()

const onClick=()=>{
  counter.count++
  //counter.$patch({ count: counter.count + 1 })
}

</script>

<template>
  <div>
  <button @click="onClick">Tıkla App</button>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
      {{ counter.count }}
      {{ counter.double }}
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
