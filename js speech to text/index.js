const btn = document.getElementById('listenBtn')



btn.addEventListener('click', () => {
    const SpeechRecognitaion = window.SpeechRecognition || window.webkitSpeechRecognition
    const rec = new SpeechRecognitaion()

    rec.onstart = function() {
        console.log('Dinlemeye Başladı')
    }
    rec.onspeechend = function() {
        rec.stop()
    }

    rec.onresult = function(event) {
        console.log('text', event.results[0][0].transcript)
        console.log('text', event.results[0][0].confidence * 100)
        if (event.results[0][0].transcript === "merhaba" || event.results[0][0].transcript === 'Merhaba') {
            alert('Merhaba')
        }

    }
    rec.start()
})