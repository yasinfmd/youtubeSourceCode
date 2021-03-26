<template>
<div>
<button @click="toggleVisible()" >Göster/ Gizle</button>
</div>
<h2 v-if="visible">

Merhaba Dünya
</h2>
<hello-world />

<div>
State Değeri : {{state}}
<br/>

<button @click="setState(state+1)">Sayıyı Arttır</button>

<button @click="setState(state-1)">Sayıyı Azalt</button>

 </div>
 <button @click="fetchData()">Verileri Getir</button>
<div>
<p v-if="loading===true">Yükleniyor ....</p>
<pre v-else>
  {{myData}}
</pre>
</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import useToggle from './hooks/useToggle'
import useState from './hooks/useState'
import useApi from './hooks/useApi'
import {ref} from 'vue'
export default {
  components: { HelloWorld },
  name: 'App',
  setup(){
    const {visible,toggleVisible}=useToggle(true)
    const [state,setState]=useState(0)
    const {response,onSendRequest}=useApi('http://jsonplaceholder.typicode.com/users',{})
    const loading=ref(false);
    const myData=ref([])
    const fetchData=async ()=>{
      loading.value=true;
      setTimeout(async () => {
         await onSendRequest();
      myData.value=response.value;
      loading.value=false
      }, 3000);
     
    }
    return{
      loading,
      fetchData,
      myData,
      response,
      state,
      setState,
      visible,
      toggleVisible
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
