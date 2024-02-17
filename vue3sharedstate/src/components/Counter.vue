<script setup>
import useCounter from '../useCounter'
const {counter,dec,inc,sharedState}=useCounter()
</script>

<template>
    <h1>Hello Counter</h1>
    
  <h3>{{ sharedState }}</h3>
  <button @click="inc">++</button>
  <button @click="dec">--</button>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
