<template>

<img :src='image' width="600" height="600" />
</template>

<script>
export default {
   name: "App",
   methods:{
     fetchRandomPhoto(){
        fetch(this.url + `?client_id=${this.accesKey}`)
          .then(response => response.json())
        .then((json)=>{
          this.image=json.urls.full
        }).
        catch((err)=>{
          console.log('error',err)
        })
     }
   },
   created(){
      this.fetchRandomPhoto()
   },
   data(){
     return{
       image:'',
       accesKey:'WYHJjtTeIfJL1BE7t1hlmvEq_2n5a044Wln3hx_O97g',
       url:'https://api.unsplash.com/photos/random'
     }
   }
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
