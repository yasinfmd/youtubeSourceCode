const netInfo=document.getElementById('netInfo')

netInfo.innerHTML=navigator.connection.effectiveType
navigator.connection.addEventListener('change',(e)=>{
    console.log('e',e)
    netInfo.innerHTML=e.target.effectiveType
})