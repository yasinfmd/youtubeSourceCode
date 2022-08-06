<script>
    import {useParams,useLocation,useNavigate , useFocus } from 'svelte-navigator'
    const focusEl=useFocus()
    const navigate=useNavigate()
    const params=useParams()
    const location=useLocation()
    params.subscribe((item)=>{
        console.log(item)
    })
    location.subscribe((item)=>{
        console.log(item)
    })

</script>
<div>
    Users
    <button on:click={()=>{
        navigate('/')
     //   navigate(-1)
      //  navigate(1)
    }}>Anasayafaya git</button>

    <h1 use:focusEl>Aradıgınız sayfa buradadır :)</h1>
</div>
