<template>
  <p>
    Selam Ben B Componentiyim ve A Componentinin İçerisinde Yer Alırım  {{injectedValue}}
  </p>
  <c-componenti/>
</template>

<script>
import {inject} from 'vue'
import CComponenti from "@/components/CComponenti";
export default {
name: "BComponenti",
  components: {CComponenti},
  setup(){
    const injectedValue=inject('myName','Default Value Koyabiliriz')

    return {
      injectedValue
    }
  }
}
</script>

<style scoped>

</style>