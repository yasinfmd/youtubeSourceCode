self.onmessage = async (e) => {
    console.log('e', e)
    setTimeout(async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const json = await response.json();
        postMessage(JSON.stringify(json))
    }, 10 * 1000);
}