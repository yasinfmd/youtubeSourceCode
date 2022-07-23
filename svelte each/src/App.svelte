<script>
    let data = []

    setTimeout(()=>{
        const arr=[{id: 1, ad: 'Yasin'}, {id: 2, ad: 'Ayşe'}]
        data=[...arr]
    },3000)
</script>
<main>
    {#each data as item,i (item.id)}
        <div>{item.ad} - {i + 1}</div>
        {:else}
        <h1>Veri Bulunamadı</h1>
    {/each}

</main>

<style>
    :root {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }


</style>
