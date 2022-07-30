<script>
    import {onDestroy} from 'svelte'
    import myData from "./mockup.store.js";
    import HelloWorld from "./HelloWorld.svelte";
    let testData=[]
   const unsubs= myData.subscribe((data)=>{
        console.log('data',data)
     //  testData=[...data]
    })
    onDestroy(()=>{
        if(unsubs){
            unsubs()
        }
    })
</script>
<main>
<h1>App Svelte</h1>
    <HelloWorld />
    {$myData}
</main>

<style>
    :root {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }


</style>
