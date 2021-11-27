var messagebird = require('messagebird')('yourtoken');

var params = {
    'originator': 'Deneme',
    'recipients': [
        '{yourphonenumber with country code}'
    ],
    'body': 'Uygulamaya Giriş Kodunuz 056231 kimseyle paylaşamayınız.'
};

messagebird.messages.create(params, function (err, response) {
    if (err) {
        return console.log(err);
    }
    console.log(response);
});