const AWS = require('aws-sdk')
const fs = require('fs')

AWS.config.loadFromPath('./config.json')

const Polly = new AWS.Polly({
    region: 'eu-central-1'
})

const input = {
    Engine: 'standard',
    LanguageCode: 'tr-TR',
    OutputFormat: 'mp3',
    Text: `
    JavaScript, yaygın olarak web tarayıcılarında kullanılmakta olan dinamik bir programlama dilidir. JavaScript ile yazılan istemci tarafı betikler sayesinde tarayıcının kullanıcıyla etkileşimde bulunması, tarayıcının kontrol edilmesi, asenkron bir şekilde sunucu ile iletişime geçilmesi ve web sayfası içeriğinin değiştirilmesi gibi işlevler sağlanır. JavaScript, Node.js gibi platformlar sayesinde sunucu tarafında da yaygın olarak kullanılmaktadır.

JavaScript prototip-tabanlı, dinamik türlere ve birinci-sınıf fonksiyonlara sahip bir betik dilidir. Nesne yönelimli, imperatif ve fonksiyonel programlama prensiplerine sahiptir.
    `,
    TextType: 'text',
    VoiceId: 'Filiz'
}
Polly.synthesizeSpeech(input, (err, data) => {
    if (err) {
        console.log('Hata', err);
        return
    }

    if (data.AudioStream) {
        fs.writeFile('test.mp3', data.AudioStream, (err) => {

        })
    }
})