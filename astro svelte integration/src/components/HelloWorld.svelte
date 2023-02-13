<script>
 let counter=0

 const handleClicker=()=>{
    counter+=10
 }

</script>


<button on:click={handleClicker}>
    Svelte Sayaç  {counter}  | {counter * 3}
</button>