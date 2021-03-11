<template>
  <p>{{ad}}</p>
  <button @click="changeMyName()">TIkla</button>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      ad:'Yasin'
    }
  },
  methods:{
    changeMyName(){
      
      this.ad="Ahmet";
      console.log('dom güncellenmeden önce',this.$el.nextSibling.textContent)
      this.$nextTick(()=>{
           this.ad="Ahmet 3"
          console.log('2',this.$el.nextSibling.textContent)
      })
    },
    abc(){
        // this.ad ?? yasin
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
