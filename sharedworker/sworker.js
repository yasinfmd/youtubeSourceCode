let connections=[]

onconnect=function(e){
    const port=e.ports[0]
    console.log('port',port)
    connections.push(port)

    port.onmessage=function(e){
            connections.forEach((c)=>{
                c.postMessage(e.data)
            })
    }
}