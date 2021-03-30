<template>
<terminal :logData="logData" />
</template>

<script>
import Terminal from './components/Terminal.vue'
export default {
   name: "App",
   data(){
     return{
        logData:[
          {
            text:`
          Corrupti voluptatibus adipisci debitis officia. Provident facilis cum reprehenderit, illo, distinctio quas sapiente voluptas, asperiores officiis quam modi est aspernatur sint eius fuga ullam corrupti similique cupiditate. Ullam, sapiente fugiat.
            `
          },
            {
            text:`
            Facere illum inventore, corrupti fugiat tempore quidem repellat! Non consectetur voluptate nulla dignissimos quas, vitae numquam voluptatem fugiat quos adipisci, commodi quisquam sit earum atque inventore? Consectetur enim laudantium suscipit.
            `
          },
          {
            text:`
              Tenetur, asperiores. Pariatur, a optio. Error eligendi porro alias molestias odit iure at autem illo deserunt explicabo! Vitae illum, maiores, aut iure consequatur magnam dolorum laudantium officia illo quod doloremque.
            `
          },
            {
            text:`
            Iure necessitatibus odit tempore id odio rerum inventore error quas, modi, neque corporis ad adipisci excepturi debitis? Suscipit, mollitia! Nemo, saepe reprehenderit ipsa molestiae nam voluptatem rem! Atque, sit eligendi!
            `
          },
            {
            text:`
              Odit maiores dolores commodi fuga exercitationem aliquid ea, dicta sapiente non quidem! Doloribus aliquam et quisquam iusto incidunt voluptates? Reprehenderit, debitis totam. Excepturi debitis neque minus odio! Placeat, rem fugit?
            `
          },
            {
            text:`
              Voluptatum ducimus aperiam laboriosam temporibus magni sequi id eveniet, ipsum reiciendis fugiat corporis earum necessitatibus nisi harum exercitationem voluptatibus vitae omnis animi aliquam! Delectus nobis aliquam veritatis sapiente tempore laudantium.
              Tenetur, asperiores. Pariatur, a optio. Error eligendi porro alias molestias odit iure at autem illo deserunt explicabo! Vitae illum, maiores, aut iure consequatur magnam dolorum laudantium officia illo quod doloremque.
            `
          }
        ]
     }
   },
   mounted(){
     const _this=this;
      setTimeout(() => {
        _this.logData=[..._this.logData,{text:`Merhaba Yeni Log ${new Date().toLocaleString()}`,isNew:true}]
      }, 1000);
      console.log(this.logData)
   },
   components:{
      Terminal
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
