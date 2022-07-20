<script>
  let number=1
  let isExist=false
</script>
<main>
  {#if isExist}
    <h1>Kayıt Var</h1>
    {:else}
    <h1>Kayıt Yok</h1>
    {/if}
    {#if number===5}
    <h1>Sayı 5</h1>
    {:else if number===10}
    <h1>Sayı 10</h1>
    {:else }
    <h1>Sayı küçük</h1>
    {/if}
  {number}

  <button on:click={()=>{number=5}}>Sayıyı 5 yap</button>
  <button on:click={()=>{number=10}}>Sayıyı 10 yap</button>
  <button on:click={()=>{number=2}}>Sayıyı 2 yap</button>

  <button on:click={()=>{isExist=!isExist}}>Tıkla ve Değiştir</button>
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }


</style>
