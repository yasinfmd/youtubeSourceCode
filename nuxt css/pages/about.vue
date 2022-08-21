<template>
  <div class="mydiv">
    About
    <NuxtLink to="/">Home</NuxtLink>
    <button class="myclass" @click="$router.push('/')">Home</button>
  </div>
</template>

<script>
export default {
  layout:'custom',
  name: "about"
}
</script>

<style scoped>
  .mydiv{
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #ccc;
  }
</style>
