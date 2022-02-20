const AWS = require('aws-sdk')

const translate = new AWS.Translate({
    accessKeyId: 'AKIAX23ULPBOOR2LNENW',
    secretAccessKey: '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',
    region: 'eu-central-1'
})

const params = {
    SourceLanguageCode: 'tr',
    TargetLanguageCode: 'de',
    Text: 'Merhaba benim adım yasin'
}

translate.translateText(params, (err, data) => {
    console.log('data', data.TranslatedText)
    console.log('err', err)
})