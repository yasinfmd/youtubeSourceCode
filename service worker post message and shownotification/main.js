let SW=""

const registerSw=()=>{
  if("serviceWorker" in navigator){
    navigator.serviceWorker.register('./sw.js').then((register)=>{
        SW=register.installing || register.waiting || register.active
    },(err)=>{
      console.log("Hata ve sebebi",err)
    })
  }
  navigator.serviceWorker.addEventListener("controllerchange",()=>{
    SW=navigator.serviceWorker.controller
  })
  navigator.serviceWorker.addEventListener("message",(e)=>{
    console.log('e', e)
    console.log(e.data)
    alert()
    const notification = new Notification(e.data);
  }) 
}

document.addEventListener('DOMContentLoaded', registerSw);

document.getElementById('sendMsg').onclick=()=>{
  console.log('mesaj')
  if(navigator.serviceWorker.controller){
    navigator.serviceWorker.controller.postMessage({
      msg:"Merhaba Bu Bir Mesajdır Bu mesajı yayan kişi Xyzdir"
    })
  }


}

