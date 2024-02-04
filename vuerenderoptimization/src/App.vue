<script setup>
import { ref } from 'vue';
const msg=ref("Selam")
const count=ref(0)

const inc=()=>{
  count.value=count.value+1
  setTimeout(()=>{
    msg.value="uweuıyrweuyıyuıewruy "
  },2000)
}
setTimeout(()=>{
  msg.value="asdjkhasdjk"
},3000)

</script>

<template>
  <div>Merhaba</div>
  <div v-once>{{ count }}</div>
  <button @click="inc">Tıkla</button>
  <div v-memo="[count,msg]">{{ msg }}</div>
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
