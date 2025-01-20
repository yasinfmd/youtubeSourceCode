chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'getColors') {
        const colorProps=['color','backgroundColor','borderColor']
        const elements=Array.from(document.querySelectorAll('*'))
        const colors=new Set()
        elements.forEach((el)=>{
            const styles=window.getComputedStyle(el)
            colorProps.forEach((prop)=>{
                const color=styles.getPropertyValue(prop)
                if(color){
                    colors.add(color)
                }
            })
        })
        sendResponse({ colors: Array.from(colors) });
    }
});