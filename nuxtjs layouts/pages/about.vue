<template>
  <div>
    About
    <NuxtLink to="/">Home</NuxtLink>
    <button @click="$router.push('/')">Home</button>
  </div>
</template>

<script>
export default {
  layout:'custom',
  name: "about"
}
</script>

<style scoped>

</style>
