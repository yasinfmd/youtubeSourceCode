<template>
<input  :value='modelValue' @input="$emit('update:modelValue',$event.target.value)" />
</template>

<script>
export default {
    props:{
        modelValue:String,
    },
    emits:['update:modelValue']
}
</script>