<template>
    <div class="userLayout">
        <div class="leftSide">
            Sol Taraf
        </div>
        <div class="rightSide">
            <slot/>
        </div>
    </div>
</template>

<script>

export default {
  name: 'UserLayout',
  components: {
  }
}
</script>
<style scoped>
.leftSide{
    flex: 2;
    background-color: aliceblue;
}
.rightSide{
    flex: 6;
    background-color: aqua;
}
.userLayout{
    display: flex;
    align-items: center;
}
</style>