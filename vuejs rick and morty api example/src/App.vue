<template>
<div class="container mx-auto">
 <div class="p-1 grid grid-cols-1 gap-4 lg:grid-cols-4 md:grid-cols-6 sm:grid-cols-1">
    <div class="w-full flex-col p-1  flex items-center justify-center border border-gray-300 rounded-md" v-for="(item,index) in data" :key="index">
        <img :src="item.image" class="mb-4 rounded-full w-16 h-16" />
        <div class="text-sm text-gray-600 text-bold mb-4">{{item.name}}</div>
        
        <div :class="`text-lg ${item.status === 'Alive'?'text-green-600':item.status==='Dead' ? 'text-red-600':'text-gray-600' }`"> {{item.status}}</div>
    
        <div class="text-sm ">{{item.gender}}</div>
    </div>
  </div>
  <div class="flex items-center justify-between">
  <div class="text-sm text-gray-600 cursor-pointer" @click="getData(pagination.currentPage-1)">Prev Page</div>
    <div class="text-sm text-gray-600">Current Page {{pagination.currentPage}}</div>

   <div class="text-sm text-gray-600 cursor-pointer" @click="getData(pagination.currentPage+1)">Next Page</div>


  </div>
</div>
</template>

<script>
export default {
   name: "App",
   data(){
     return {
       pagination:{
         currentPage:1,
          nextPage:null,
          prevPage:null
       },
       data:[],
        url:"https://rickandmortyapi.com/api/character"
     }
   },
   created(){
    this.getData()
   },
   methods:{
     async getData(pageNumber){

        const response=await fetch(this.url+"?page="+(pageNumber||this.pagination.currentPage))
        const {results,info}=await response.json()
        this.data=results
        this.pagination={
          currentPage:pageNumber?pageNumber:1,
          nextPage:info.next,
          prevPage:info.prev
        }
     }
   }
};
</script>

<style></style>
