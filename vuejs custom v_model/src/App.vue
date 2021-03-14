<template>
<p>{{user}}</p>
<custom-input v-model:firstName.bigger="user.name" v-model:age.reverse="user.age" />
</template>

<script>
import CustomInput from './components/CustomInput.vue'
export default {
  components: { CustomInput },
  data(){
    return{
      user:{
        name:'',
        age:''
      }
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
