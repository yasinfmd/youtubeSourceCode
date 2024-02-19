const puppeteer=require('puppeteer')


const openBrowser=async()=>{
        const browser = await puppeteer.launch({headless:false});
        const page = await browser.newPage();
      
        await page.goto('https://pptr.dev/guides/evaluate-javascript');
      
        await page.setViewport({width: 1080, height: 1024});
        const pElements=await page.$$eval('p',(p)=>{
            return p.map((i)=>i.clientWidth)
        })
        console.log('pels',pElements)

        await browser.close()
      
    
}

openBrowser()