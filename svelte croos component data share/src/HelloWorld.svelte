<script context="module">
   export let test="Test Yazısı"
   export const showAlert=(msg)=>{
       alert(msg)
   }
</script>
<script>
    let ad="Yasin"
</script>

<div>
    {ad}
    {test}
    <button on:click={()=>{
        ad="Yasin 2"
        test="Test Yazısı 2"
    }}>Değiştir</button>

    <button on:click={()=>{
        showAlert('Child')
    }}>Mesaj Göster</button>
</div>

<style>
    div{
        color: #ff3e00;
    }
</style>
