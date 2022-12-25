<template>
    <div class="homelayout">
        <div class="header">Header</div>
        <div class="content"><slot /></div>
    </div>
</template>

<script>

export default {
  name: 'HomeLayout',
  components: {
  }
}
</script>
<style scoped>
.header{
    height: 50px;
    background-color: pink;
}
.content{
    background-color: azure;
}
.homelayout{
    display: flex;
    flex-direction: column;
}
</style>