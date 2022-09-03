<template>
  <div>Deneme Sayfası  {{$route.params}}</div>
</template>

<script>
export default {
  name: "deneme",
  created() {
    console.log(this.$route.params)
  }
}
</script>

<style scoped>

</style>
