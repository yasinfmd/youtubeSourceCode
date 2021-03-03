<template>
  <div id="app" class="wrapper" :style="styleObject" >
    <div>
      <input type="file" @change="processFile($event)">
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      styleObject:{
        background:null
      }
    }
  },
  created() {
    const backgroundImage=localStorage.getItem('background');
    this.styleObject.background='url('+backgroundImage+')';
  },
  methods:{
    async processFile(e){
      const base64=await this.converToBase64(e.target.files[0])
      localStorage.setItem('background',base64)
      this.styleObject.background='url('+base64+')';
    },
    converToBase64(file){
        return new Promise(((resolve, reject) => {
          const reader=new FileReader();
          reader.readAsDataURL(file);
          reader.onload=()=>resolve(reader.result)
          reader.onerror=(error)=>reject(error)
        }))
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 20px;
  height: 100vh;
}

.wrapper{
  background-repeat: no-repeat !important;
  background-position: center !important;
  background-size: cover !important;
  height: 100vh;
}
</style>
