<template>
  <div id="app">
    {{$log.isLogging}}
    {{$log.logMsg}}

    <button @click="onLog()">Tıkla</button>
      {{$log.getString('title')}}
    {{$log.getString('hi')}}
  </div>
</template>

<script>

export default {
  name: 'App',
  methods:{
    onLog() {
      this.$log.onLog('Selam')
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
