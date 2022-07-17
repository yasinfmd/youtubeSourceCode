<script>
  let myclassName="custom-btn"
  let number=1

  let myStyle={
    color:'blue',
    font:'bold'

  }
</script>
<main>
<div class={`custom-div`}>Hello</div>
  <div class:custom-btn={number%2===0}
       class:custom-div={number%2===0}
  >Hello</div>

  <button on:click={()=>{
    number++
  }}>Değiştir</button>

  <div style={`color:${myStyle.color};font-weight:${myStyle.font}`}>Test</div>

</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  .custom-div{
    background: darkred;
  }
  .custom-btn{
    border: 2px solid darkblue;
  }
</style>
