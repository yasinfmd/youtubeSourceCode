<script setup>
import { ref ,watch} from 'vue'
import useUserActive from "@/useUserActive";

const {isExpire}= useUserActive()

watch(isExpire, (x, y) => {
  console.log(x,y)
})

console.log(isExpire.value)
const count = ref(0)

function increment() {
  count.value++
}


</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>
