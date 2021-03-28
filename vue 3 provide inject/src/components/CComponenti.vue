<template>
  <p>
    Ben C Componentiyim B Componentinin İçerisinde Yer Alırım
  </p>
  <h2>
    {{myTodo}}
  </h2>
</template>

<script>
import {inject} from 'vue'
export default {
name: "CComponenti",
  setup(){
    const myTodo=inject('myTodo');
    return {
      myTodo
    }
  }
}
</script>

<style scoped>

</style>