const cron = require('node-cron')

/*


*/
cron.schedule('* * * * *', function () {
    console.log('Cron', 'Ben Her Dakika Çalışırım');
})
cron.schedule('* * * * * *', function () {
    console.log('Cron Her Saniye', 'Ben Her Saniye Çalışırım');

})