
window.addEventListener('load', async () => {
    const service = await navigator.serviceWorker.register('./worker.js')
    console.log('Service', service)
})


async function aboneOl() {
    const worker = await navigator.serviceWorker.ready
    const clientId = await worker.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: 'BGAEWA2uCzf7PeesmxnIXI2L8btAd72Yy-foJoezCg2nDEGrNsynQBzljYDGLnQvF_l4YBGn7BJOWrXIACgqiTs'
    })

    console.log(JSON.stringify(clientId))
}

async function abonelikIptal() {
    const worker = await navigator.serviceWorker.ready
    const subscriber = await worker.pushManager.getSubscription();
    subscriber.unsubscribe();
}