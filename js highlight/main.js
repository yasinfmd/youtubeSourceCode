import './style.css'

const myinput=document.querySelector('#myinput')

myinput.addEventListener('input',(e)=>{
  console.log(e.target.value)
  const searchTerm=e.target.value
  const content=document.querySelector('#content')
  const p=document.querySelectorAll('p')
  p.forEach((par)=>{
    const text=par.textContent.toLocaleLowerCase()
    if(text.includes(searchTerm)){
      const regex=new RegExp(searchTerm,'gi')
      const replaced=text.replace(regex,match=>`<span class='highlight'>${match}</span>`)
      par.innerHTML=replaced
      par.classList.remove('hidden')
    }else{
      par.classList.add('hidden')
    }
  })
})
