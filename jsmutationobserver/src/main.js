import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))


const targetNode=document.getElementById('counter');


const callback=(mutationsList)=>{
  mutationsList.forEach(element => {
    console.log('bir değişim oldu',element)
    if(element.type==='childList'){
      console.log('bir element eklendi yada silindi güncellendi')
    }else if(element.type==='attributes'){
      console.log('attribute değişti',element.attributeName)
    }
  });
}
const observer=new MutationObserver(callback)
observer.observe(targetNode,{
  childList:true,
  subtree:true,
  attributes:true,
})

setTimeout(() => {
  targetNode.setAttribute("class","active")
}, 1000*10);