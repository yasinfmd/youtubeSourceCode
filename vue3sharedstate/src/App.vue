<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Counter from './components/Counter.vue';
import useCounter from './useCounter'
const {counter,dec,inc,sharedState}=useCounter()
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>

  <h3>{{ sharedState }}</h3>
  <button @click="inc">++</button>
  <button @click="dec">--</button>

  <HelloWorld msg="Vite + Vue" />
  <Counter />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
