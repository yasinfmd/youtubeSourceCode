<template>
   <div id="app">
      {{ $store.getters.getName }}
      <button @click="$store.dispatch('setNewName','Yeni İsim')">isim değiş</button>
   </div>
</template>

<script>

export default {
   name: "App",
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
