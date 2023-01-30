<template>
  <NestedComp :data="myData" />
</template>

<script>
import NestedComp from './components/NestedComp.vue';


export default {
    name: "App",
    data() {
        return {
            myData: [
                {
                    name: "Başlık1",
                    children: [
                        {
                            name: "Başlık 1.1",
                            children: []
                        },
                        {
                            name: "Başlık 1.2",
                            children: []
                        }
                    ]
                },
                {
                    name: "Başlık 2",
                    children: [
                        {
                            name: "Başlık 2.1",
                            children: []
                        },
                        {
                            name: "Başlık 2.2",
                            children: []
                        },
                        {
                            name: "Başlık 2.3",
                            children: [
                              {
                                name:'Başlık 2.3 -1',
                                children:[]
                              }
                            ]
                        }
                    ]
                },
            ]
        };
    },
    components: { NestedComp }
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
