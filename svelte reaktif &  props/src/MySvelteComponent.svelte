
<script>
    import {createEventDispatcher} from 'svelte'
 export let title;
 export let body;
 export let content;
 export  let arr;

 export let onPress=()=>null

    const dispatch=createEventDispatcher()

</script>

<div>
    <div>{title}</div>
    <div>{body}</div>
    <div>{content}</div>
    <div>
        {arr}
    </div>

    <button on:click={()=>{
        dispatch('custom-click',{id:100})
    }}>Tıklaaaa 2</button>

    <button on:click={onPress}>Tıklaaaa</button>
</div>
