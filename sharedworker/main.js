import './style.css'

const btn=document.getElementById('btn')


const handleWorker=()=>{
  const worker=new SharedWorker('./sworker.js')
  worker.port.onmessage=function(e){
    console.log('workerportonmessage',e)
    document.getElementById('app').innerText=e.data
    }

    btn.onclick=()=>{
      const  rval= Math.random().toString()
 
      console.log(rval)
        worker.port.postMessage(rval)
    }

}

handleWorker()