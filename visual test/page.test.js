const puppeter=require('puppeteer')
const {toMatchImageSnapshot} =require('jest-image-snapshot')
expect.extend({toMatchImageSnapshot})

describe('My App Home Page',()=>{
    let browser;
    let page;

    beforeAll(async()=>{
        browser=await puppeter.launch()
        page=await browser.newPage()
    })

    afterAll(async()=>{
        await browser.close()
    })

    test('HomePage'+new Date().toDateString(),async()=>{
        await page.goto('http://localhost:3000')
        const ss=await page.screenshot()
        expect(ss).toMatchImageSnapshot({failureThreshold:20 ,blur:10})
    })
})