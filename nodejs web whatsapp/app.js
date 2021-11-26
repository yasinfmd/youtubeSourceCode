const {Client, MessageMedia} = require("whatsapp-web.js")
const qrcode=require("qrcode-terminal")

const client=new Client()


client.on("qr",(qr)=>{
    console.log("qr",qr)
    qrcode.generate(qr,{small:true})
})
client.on("message",async (message)=>{
    console.log(message)
    //console.log(message.body)
    if(message.body==="yasin"){
        console.log("yasin")
        message.reply("Efendim Ben Yasin")
    }
    if(message.body==="webciyasin"){
        console.log("webciyasin")
        client.sendMessage(message.from,"Kanalıma Abone Olunn")
    }
    if(message.body==="moon"){
        console.log("Moon")
        const moon=MessageMedia.fromFilePath("./moon.jpg")
        client.sendMessage(message.from,moon)
    }
    if(message.hasMedia){
        const _file=await  message.downloadMedia
        console.log("_file",_file)
    }
})
client.on("ready",()=>{
    console.log("Device Connected !")
})

client.initialize()
