<script>
    import myData from "./mockup.store.js";
</script>
<h1>Hello World</h1>

<button on:click={()=>{
    myData.update((pv)=>{
        console.log(pv)
        return [...pv,3,3,23]
    })
   // myData.set([1,2,3])
}}>Tıklaaa</button>
