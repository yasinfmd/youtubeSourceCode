import './style.css'

import VNode from './virtuldom'


const createElement=(tag,props,...children)=>{
  return new VNode(tag,props,children)
}
const virtualDom=createElement('div',{id:'container'},
  createElement('h1',{},"Merhaba"),
  createElement('h2',{id:'thisishtwo'},'This is h2'),
  createElement('p',{},'Bu bir p'),
  createElement('ul',{style:"padding:20px"},
  createElement('li',{},'12321'),
  createElement('li',{},'12321231231'),
  createElement('li',{},'12312312321'),
  createElement('li',{},'1231231221')
  ),
)
const containerEl=document.getElementById('app')
containerEl.appendChild(virtualDom.render())

