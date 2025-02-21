const express=require('express');
const app=express();    

const port =3030
app.use(express.json())
app.use(express.text({type:'application/xml'}))
app.get('/xmlapi',(req,res)=>{
    const xmlResponse=`
        <response>
            <message>Hello World</message>
            <date>${new Date()}</date>
            <users>
            <user>
                <name>John Doe</name>
            </user>
            </users>
        </response>
    `
    res.set('Content-Type','text/xml')
    res.send(xmlResponse)
})


app.post('/xmlapi',(req,res)=>{
    const xmlData=req.body
    console.log(xmlData)
    res.set('Content-Type','text/xml')
    res.send("<response><message>XML Data Received</message></response>")
})

const getXmlData=async()=>{
    const response=await fetch('http://localhost:3030/xmlapi',{
        headers:{
            'Accept':'application/xml',
            'Content-Type':'application/xml'
        }      
    })
    const xml=await response.text() 
    console.log(xml)
}

const postXml=async()=>{
    const response=await fetch('http://localhost:3030/xmlapi',{
        method:'POST',
        headers:{
            'Content-Type':'application/xml'
        }     ,
        body:`
        <request>
            <user>
                <name>John Doe</name>
            </user>
            </request>    
        ` 
    })
    const xml=await response.text() 
    console.log(xml)
}
app.listen(port,async()=>{
    console.log(`Server is running on port ${port}`)
    await postXml()
})

