<template>
  <div id="app">
  <button style="marginBottom:20px" @click="addNewItem">Yeni Eleman Ekle</button>
  <drop-list  :items="mydata" @reorder="$event.apply(mydata)">
    <template v-slot:item="{item,reorder}">
        <drag :key="item.id"
        @dragstart="dragstart"
        @dragend="dragend"
        :data="item"
        :style="{backgroundColor: reorder ? 'red':'#e7e7e7'}"
        style="height:60px;marginBottom:20px"
        >
        <div>
          {{item.text}}
        </div>
        </drag>
    </template>
  </drop-list>
  </div>
</template>

<script>
import {Drag,Drop,DropList} from "vue-easy-dnd"
export default {
  name: 'App',
  methods:{
    dragstart(event){
      console.log("dragstart",event)
    },
    dragend(event){
      console.log("dragend",event)
    },
    addNewItem(){
      this.mydata.push({
        id:Math.random()*500,
        text:"Test"+Math.random()
      })
    }
  },
  data(){
    return{
      mydata:[{
        id:1,
        text:"Selam"
      },{
        id:2,
        text:"Hello"
      },{
        id:3,
        text:"Merhaba"
      }]
    }
  },
  watch:{
    mydata(val){
      console.log("newval",val)
    }
  },
  components: {
    Drag,
    Drop,
    DropList
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
