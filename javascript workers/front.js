const worker1 = new Worker('./worker.js') // a işinden sorumlu işçi
//const worker2 = new Worker('./abc.js') // b işinden sorumlu işçi
const sayilar = [];

window.addEventListener('load', () => {
    worker1.onerror = (evt) => {
        console.log('hata', evt)
    }
    worker1.onmessage = (evt) => {
        console.log('succes', evt.data)
    }
})
function onAlert() {
    alert('Merhaba')
}
function iscibiricagir() {
    worker1 = new Worker('./worker.js')
}

function onLoop() {
    worker1.postMessage({ arraySayilar: sayilar, mesajString: 'Selam' })
    worker1.terminate();
    worker1 = undefined;
}