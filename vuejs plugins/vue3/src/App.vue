<template>
  {{ $customLogger.getVersionName() }}
  <input v-model="text"/>
  <button @click="onClick()">Tıkla</button>
  {{ $customLogger.getString('title') }}
  {{cLog.getVersionName()}}
  <h1>  {{$random()}}
  </h1>
</template>

<script>
import {inject} from 'vue'

export default {
  setup() {
    const cLog = inject('cLog')
    console.log('cLog', cLog)
    return{
      cLog
    }
  },
  data() {
    return {
      text: 'selam'
    }
  },
  methods: {
    onClick() {
      this.$customLogger.onCreate()
      this.$customLogger.onLoad('custom Load')
    }
  },
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
