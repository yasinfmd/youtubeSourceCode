<template>
  <div>
    <Tutorial/>
    <ul>
      <li v-for="item in data">{{item}}</li>
    </ul>
    <NuxtLink to="/about">About</NuxtLink>
    {{ad}}
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data(){
    return {
      ad:'Yasin'
    }
  },
  asyncData(context){
    //callback
    //callback(null,{data:[1,2,3]})
    return new Promise((resolve => {
      resolve({data:[1,2,3,4,5]})
    })).then((data)=>{
      return data
    })
  }

}
</script>
