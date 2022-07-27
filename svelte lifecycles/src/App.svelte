<script>
    import {onMount,beforeUpdate,afterUpdate} from 'svelte'
    import HelloWorld from "./HelloWorld.svelte";
    onMount(()=>{
        //http requests
        console.log('Bağlandı')
        console.log(myName)


    })
    beforeUpdate(()=>{
        console.log('Beforeupdate')
        console.log(myName)
    })
    afterUpdate(()=>{
        console.log('after update')
        console.log(myName)

    })
    let myName='Yasin'
    let show=true
</script>
<main>
    {myName}
    <button on:click={()=>{
        show=!show
        myName=Math.random().toString(36)}}>Değiştir</button>
    {#if show}
    <HelloWorld />
        {/if}
</main>

<style>
    :root {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }


</style>
