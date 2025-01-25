import './style.css'
document.addEventListener('DOMContentLoaded',()=>{

const bgInput=document.getElementById('backgroundColor')
const colorInput=document.getElementById('textColor')
const buttonBgInput=document.getElementById('buttonColor')
const downloadBtn=document.getElementById('downloadBtn')
const preview=document.getElementById('preview')
const button=document.querySelector('button')
let css={}
const updateTheme=()=>{
  const theme={
    backgroundColor:bgInput.value,
    textColor:colorInput.value,
    buttonBackgroundColor:buttonBgInput.value
  }

  preview.style.backgroundColor=theme.backgroundColor
  preview.style.color=theme.textColor
  button.style.backgroundColor=theme.buttonBackgroundColor

      css=`
      body{
      background-color:${theme.backgroundColor};
      color:${theme.textColor}
      }
      button{
      background-color:${theme.buttonBackgroundColor};
      padding: 8px 16px;
      cursor: pointer;
      border-radius: 4px;
      }
      `
}


bgInput.addEventListener('input',updateTheme)
colorInput.addEventListener('input',updateTheme)
buttonBgInput.addEventListener('input',updateTheme)


const downloadCSS=()=>{
  const blob=new Blob([css],{type:'text/css'})
  const link=document.createElement('a')
  link.href=URL.createObjectURL(blob)
  link.download='theme.css'
  link.click()
}


updateTheme()
downloadBtn.addEventListener('click',downloadCSS)

})