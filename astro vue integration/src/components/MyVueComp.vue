<template>
    <button @click="changeNameHandler">İsim Değiştir</button>
    <input type="text" v-model="inputVal">
    <p>{{ inputVal }}</p>
    Merhaba Ben Vuejs Bileşeniyimmmm
    <h1>{{ myName }}</h1>
</template>


<script setup>
import { ref } from 'vue';

const inputVal=ref("")
const myName=ref("Yasin")

const changeNameHandler=()=>{
    myName.value=Math.random()
}
</script>
<style scoped>
button{
    height: 40px;
    display: flex;
    padding: 8px;
    background: #000;
    color: #fff;
    border-radius: 8px;
    border: none;
    outline: none;
}
</style>