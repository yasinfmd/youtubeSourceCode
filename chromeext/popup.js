document.getElementById('getColorsBtn').addEventListener('click',()=>{
        
    chrome.tabs.query({active:true,currentWindow:true},(tabs)=>{
        chrome.scripting.executeScript(
            {
            target:{
                tabId:tabs[0].id
            },
            files:['contentScript.js']
        },()=>{
            chrome.tabs.sendMessage(tabs[0].id,{action:'getColors'},(response)=>{
                const colorsDiv=document.querySelector('.colors')
                colorsDiv.innerHTML=''
                if(response && response.colors.length>0){
                        response.colors.forEach(element => {
                            const div=document.createElement('div')
                            div.style.width="100px"
                            div.style.height="100px"
                            div.style.backgroundColor=element
                            colorsDiv.appendChild(div)
                        });
                }
            })
        }
    )
    })


})