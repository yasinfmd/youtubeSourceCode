const {Client} = require("whatsapp-web.js")
const qrcode=require("qrcode-terminal")
const db=require('./db')
const Message =db.message
const client=new Client({
    webVersionCache: {
        type: "remote",
        remotePath:
          "https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.2412.54.html",
      },
})

async function createTable() {
    try {
        db.sequelize.sync({ force: true }).then(() => {
            console.log("Drop and re-sync db.");
          });
      console.log('Tablo başarıyla oluşturuldu.');
    } catch (error) {
      console.error('Tablo oluşturulamadı:', error);
    }
  }
  
  createTable();
  

client.on("qr",(qr)=>{
    console.log("qr",qr)
    qrcode.generate(qr,{small:true})
})
client.on("message",async (message)=>{
    console.log(message)
    const msg = {
        title: message.body,
      };
      Message.create(msg)
      .then(data => {
        console.log('data', data)
      })
      .catch(err => {
            console.log('err', err)
      });
  
})
client.on("ready",()=>{
    console.log("Device Connected !")
})

client.initialize()