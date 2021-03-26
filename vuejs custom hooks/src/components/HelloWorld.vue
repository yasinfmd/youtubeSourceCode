<template>
  <div @click="toggleVisible()">
    Tıkla
  </div>
  <div v-show="visible">
  Hello World
</div>
</template>

<script>
import useToggle from '../hooks/useToggle'
export default {
  name: 'HelloWorld',
  setup(){
    const {visible,toggleVisible}=useToggle(true)
    return{
      visible,
      toggleVisible
    }
  }
}
</script>


