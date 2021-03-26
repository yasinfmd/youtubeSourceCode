
var js1Scope = (function () {
    var ad = "Selin"
    var adObject = { ad: 'Ahmet', soyad: 'mehmet' }
    let sayi = 100
    return {
        ad,
        adObject,
        sayi
    }
})()
console.log(js1Scope)