import './style.css'
const gridContainer=document.getElementById('grid-container')
const selectionBox=document.getElementById('selection-box')

const rows=10
const cols=10
let startX,startY,endX,endY

let isSelecting=false

const fragment=document.createDocumentFragment()
for (let index = 0; index < rows*cols; index++) {
    const div=document.createElement('div')
    div.classList.add('grid-item')
    fragment.appendChild(div)
}
gridContainer.appendChild(fragment)


gridContainer.addEventListener('mousedown',(event)=>{
  isSelecting=true
  const rect=gridContainer.getBoundingClientRect()
  startX=event.clientX-rect.left
  startY=event.clientY - rect.top
  selectionBox.style.left=`${startX+rect.left}px`
  selectionBox.style.top=`${startY+rect.top}px`
  selectionBox.style.width=`0px`
  selectionBox.style.height=`0px`
  selectionBox.style.display=`block`
})
const selectItems=(startX,startY,endX,endY)=>{
  const items=document.querySelectorAll('.grid-item')
  const rect=gridContainer.getBoundingClientRect()
  items.forEach((item)=>{
    const itemRect=item.getBoundingClientRect()
    const itemX1=itemRect.left - rect.left
    const itemY1=itemRect.top - rect.top
    const itemX2= itemX1 + itemRect.width
    const itemY2= itemY1 + itemRect.height
    if(
      itemX2 > Math.min(startX,endX) &&
      itemX1 < Math.max(startX,endX) && 
      itemY2 > Math.min(startY,endY) && 
      itemY1 < Math.max(startY,endY)
    ){
        item.classList.add('selected')
    }else{
      item.classList.remove('selected')
    }
  })
}

gridContainer.addEventListener('mousemove',(event)=>{
  if(isSelecting){
    const rect=gridContainer.getBoundingClientRect()
    endX=event.clientX - rect.left
    endY=event.clientY - rect.top
    const width=Math.abs(endX-startX)
    const height=Math.abs(endY - startY)
    selectionBox.style.width=`${width}px`
    selectionBox.style.height=`${height}px`
    selectionBox.style.left=`${Math.min(startX,endX)+rect.left}px`
    selectionBox.style.top=`${Math.min(startY,endY)+rect.top}px`
    selectItems(startX,startY,endX,endY)
  }
})

gridContainer.addEventListener('mouseup',(event)=>{
    isSelecting=false
    selectionBox.style.display=`none`
})