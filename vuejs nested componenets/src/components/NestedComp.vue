<template>

    <ul>
    <li v-for="item in data">
        {{ item.name }}
    <NestedComp v-if="item.children" :data="item.children" />
    </li>
    </ul>
</template>


<script>

export default {
    name:"NestedComp",
    props:['data']
}
</script>