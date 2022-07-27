<script>
    import {onDestroy, onMount} from 'svelte'
    onMount(()=>{
        console.log('Yaşıyorumm')
    })
    onDestroy(()=>{
        console.log('Ölüyorummm')
    })
</script>
<h1>Hello World</h1>
