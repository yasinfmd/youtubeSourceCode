<template>
  <div>
    <Tutorial/>
<!--    <ul>
      <li v-for="item in data">{{item}}</li>
    </ul>-->
    <NuxtLink to="/about">About</NuxtLink>
    {{ad}}
    Sayaç {{$store.state.counter}}
    İsim {{publishedBooksMessage}}
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  computed: {
    // a computed getter
    publishedBooksMessage() {
      console.log(this.$store.getters["users/getName"])
      // `this` points to the component instance
      return this.$store.state.users.name
    }
  },
  created() {
      console.log(this.$store.state.counter)
    setTimeout(()=>{
      //this.$store.dispatch('users/changeName','Efem')
      this.$store.dispatch('setCount',30)
    },2000)
  },
  async fetch(ctx){
    //istek
   const result= await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const res=await  result.json()
    console.log('res',res.title)
    ctx.store.dispatch('users/changeName',res.title)

/*    setTimeout(()=>{

    },3000)*/
  },
  data(){
    return {
      ad:'Yasin'
    }

  },
/*  asyncData(context){
    //callback
    //callback(null,{data:[1,2,3]})
    return new Promise((resolve => {
      resolve({data:[1,2,3,4,5]})
    })).then((data)=>{
      return data
    })
  }*/

}
</script>
