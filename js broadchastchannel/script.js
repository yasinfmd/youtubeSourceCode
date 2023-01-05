const btn = document.getElementById('btn')
const btn2=document.getElementById('btn2')
const img=document.getElementById('img')
const bc=new BroadcastChannel('my_channel')
const changeBg=()=>{
    document.body.style.backgroundColor="#000"
    document.body.style.color="#fff"
}
const changeImg=(val)=>{
        img.setAttribute('src',val)
}
btn2.onclick=()=>{
    const n=Math.floor(Math.random()*10+1)
    changeImg('https://randomuser.me/api/portraits/men/'+n+'.jpg')

    bc.postMessage(JSON.stringify({key:'changeUser',value:'https://randomuser.me/api/portraits/men/'+n+'.jpg'}))
}
btn.onclick=()=>{
    changeBg()
    bc.postMessage(JSON.stringify({key:'changeColor'}))
}
bc.addEventListener('message',(e)=>{
    console.log('e',e)
    if(e.data && JSON.parse(e.data).key==='changeColor'){
    changeBg()
    }
    if(e.data && JSON.parse(e.data).key==='changeUser'){
        changeImg(JSON.parse(e.data).value)
    }
})