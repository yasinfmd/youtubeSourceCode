const sendBtn = document.getElementById('sendrequest')
const stopBtn = document.getElementById('stoprequest')


let abortController
sendBtn.addEventListener('click', async() => {
    abortController = new AbortController()
    const signal = abortController.signal
    try {
        const result = await fetch('http://localhost:5000/api', {
            signal: signal
        })
        const data = await result.json()
        console.log('data', data)
    } catch (error) {
        console.log('hata', error)
    }
})

stopBtn.addEventListener('click', () => {
    abortController.abort()
})