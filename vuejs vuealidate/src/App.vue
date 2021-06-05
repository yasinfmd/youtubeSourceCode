<template>
  <div id="app">
<!--    <input type="text" v-model="$v.name.$model">
    <br/>
    <input type="text" v-model="$v.age.$model">
  <br/>
      {{JSON.stringify($v.name)}} <br/><br/>
    {{JSON.stringify($v.age)}} <br/>-->

<!--    <input type="text" v-model="$v.password.$model"><br/>
    <input type="text" v-model="$v.repeatPassword.$model">


    {{JSON.stringify($v.password)}} <br/><br/>
    {{JSON.stringify($v.repeatPassword)}} <br/><br/>-->

<!--  <input type="text" v-model="$v.username.$model"> <br/><br/>
    {{JSON.stringify($v.username)}}-->

<!--
    <input type="text"  v-model="$v.email.$model"> <br/>

    {{$v.email}}
-->

    <input type="text" v-model="$v.customName.$model"><br/>

    {{$v.customName}}


  </div>
</template>

<script>
import { required, minLength, between,sameAs,email } from 'vuelidate/lib/validators'
export default {
  data() {
    return {
      customName:"",
      email:"",
      password: '',
      repeatPassword: '',
      name: '',
      age: 0,
      username: ''
    }
  },
  validations: {
    customName:{
        required,
        customNameValidator:(val)=>{
          return val==="yasin"
        }
    },
    email:{
      required,
      email,
    },
    username:{
      required,
      isUnique(value) {
          console.log(value)
        if (value === '') return true
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(typeof value === 'string' && value.length % 2 !== 0)
          }, 350 + Math.random() * 300)
        })
      }
    },
    password: {
      required,
      minLength: minLength(6)
    },
    repeatPassword: {
      sameAsPassword: sameAs('password')
    },
    name: {
      required,
      minLength: minLength(10)
    },
    age: {
      between: between(20, 30)
    }
  },
  name: 'App',


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
  padding: 400px;
}
</style>
