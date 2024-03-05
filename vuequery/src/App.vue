<script setup>
import { useQuery,useIsFetching  } from "vue-query";
import { VueQueryDevToolsPanel } from "vue-query/devtools";
import {computed, ref} from "vue";

function fetchTodoList(){
 // throw  new Error("111")
  return fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(response => response.json())
      .then(json =>json)
}

const {isLoading ,isError ,isSuccess,isIdle,status,error,data,isFetching   } = useQuery("todos", {
  queryFn:fetchTodoList
});

function fetchUsers(){
  return fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(response => response.json())
      .then(json =>json)
}
function fetchTeams(){
  return fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(response => response.json())
      .then(json =>json)
}

function fetchProjects(){
  return fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(response => response.json())
      .then(json =>json)
}

const usersQuery = useQuery('users', fetchUsers)
const teamsQuery = useQuery('teams', fetchTeams)
const projectsQuery = useQuery('projects', fetchProjects)

function getUserByEmail(){
  return new Promise((resolve => {
    setTimeout(()=>{
        resolve("yasin")
      user.value={id:10}
    },2000)
  }))
}


function useUserQuery(email) {
  return useQuery(["user", email], () => getUserByEmail(),{refetchOnWindowFocus:false,
  retry:5});
}

function getProjectsByUser(){
  return new Promise((resolve => {
    setTimeout(()=>{
      resolve("yasin")
    },2000)
  }))
}

// Dependant query - get the user's projects
function useUserProjectsQuery(userId, { enabled }) {
  console.log('enabled',enabled)
  return useQuery(["projects", userId], () => getProjectsByUser(userId.value), {
    enabled,
  });
}

// Get the user
const useUserQuery1 = useUserQuery();
const user=ref()
const userId = computed(() => user.value?.id);
const enabled = computed(() => !!user.value?.id);

const projectsQuery1 = useUserProjectsQuery(userId, { enabled });

</script>

<template>
  <div>
    <VueQueryDevToolsPanel  />
    {{projectsQuery1}}
    <h1>isLoading {{isLoading}}</h1>
    <h1>isError{{isError}}</h1>
    <h1>isSuccess{{isSuccess}}</h1>
    <h1>isIdle{{isIdle}}</h1>
    <h1>status{{status}}</h1>
    <h1>error{{error}}</h1>
    <h1>isFetching{{isFetching}}</h1>
    <p>
      {{data}}
    </p>


  </div>
</template>

<style scoped>
</style>
