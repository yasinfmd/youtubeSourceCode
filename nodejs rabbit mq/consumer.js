const amqp = require('amqplib')
const rabbitMqConnection = require('./rabbitmqConnection')
const queueName = "emailKuyrugu"


async function onConsumeEmail() {
    const connection = await rabbitMqConnection();
    const channel = await connection.createChannel();
    await channel.assertQueue(queueName)
    channel.consume(queueName, (email) => {
        console.log(email.content.toString())
        setTimeout(() => {
            // email atma kodumuz çalışacak
            // senin verini kayıt ettim 
            // Ödev ekleme isteğiniz başarıyla alındı
            // 1 222222 3232 32 20
            const mail = JSON.parse(email.content.toString())
            console.log(`Email Başarıyla ${mail.email} adresine gitmiştir.`)
            channel.ack(email)
        }, 5000)
        // 1 ıd li bi ödev gönbderdin 
        // gel şu linke tıukla raporyun hazırlandı 
    })

}

onConsumeEmail();