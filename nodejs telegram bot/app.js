const token = "1790677804:AAGxAcPQPgBtMOajiB679_IRs5naFJQ1B1M";
const { Telegraf } = require('telegraf')


const bot = new Telegraf(token, { handlerTimeout: 10000 })

bot.use((ctx, next) => {
    //ctx.reply('Merhaba ben bir middlewareim')
    console.log('middleware')
    next();
})

bot.start((ctx) => {
    ctx.reply("Bot Başlatıldı İyi Şanslar Dileriz . ⚡")
    // ctx.replyWithPhoto({ url: 'https://picsum.photos/200/300?random', filename: 'Resim' })
    const welcomePhoto = __dirname + "/photo/bot.png"
    ctx.replyWithPhoto({ source: welcomePhoto, filename: 'Hoşgeldin Resmi' })
})

bot.command('test', (ctx) => {
    const video = __dirname + "/video/test.mp4"
    ctx.replyWithVideo({ source: video, filename: 'video' })
})

bot.help((ctx) => {
    console.log('help komuttu girildi')
    ctx.reply(`Mevcut Komutlar`)
    ctx.reply(`1-) /test
            2-) /deneme
    `)

})

bot.on('sticker', (ctx) => {
    ctx.reply('Güzel Sticker')
})

// bot.on('text', (ctx) => {
//     console.log('ctx', ctx.message.from)
//     ctx.telegram.sendMessage(ctx.message.chat.id, `Merhaba ${ctx.message.from.first_name}`)
// })

bot.hears('corona', (ctx) => {
    const audio = __dirname + "/audio/do.mp3"
    ctx.replyWithAudio({ source: audio, filename: 'Şarkı' })
    ctx.replyWithDice();
    ctx.replyWithLocation("39.903416", "32.851194")
    ctx.replyWithChatAction("upload_photo").then((res) => {
        ctx.replyWithPhoto({ url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3nzzKSBfJ9p0Yf3S-QtTucoBlAU6w6usKcA&usqp=CAU' })
    })
})



bot.hears('rehber', (ctx) => {
    ctx.replyWithContact("0555 555 55 55", "Ali", { last_name: 'Veli' })
})
bot.hears('çık', (ctx) => {
    bot.stop("SIGINT")
})

bot.launch();