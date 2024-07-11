const target=new EventTarget()
const obj={
    ad:"Yasin",
    yas:30
}
const objProxy=new Proxy(obj,{
    set(targetObject,prop,newVal){
        const event=new CustomEvent("objChange",{
            detail:{
                ...targetObject,
                [prop]:newVal
            }
        })
        target.dispatchEvent(event)
        targetObject[prop]=newVal
    }
})
target.addEventListener('objChange',(ev)=>{
    console.log('ev',ev.detail)
})
objProxy.yas=50
objProxy.ad="qweqwe"

