const alphabet= ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const input=document.getElementById('sezarInput')
const enc=document.getElementById('enc')
const dec=document.getElementById('dec')



const encSezar=(text,shift)=>{
  let encTexT=""
  let val=""
  for (let index = 0; index < text.length; index++) {
    try {
      val= alphabet[alphabet.indexOf(text[index])+shift]
    } catch (error) {
      let diff=shift - (alphabet.length - alphabet.indexOf(text[index]))
      val=alphabet[diff]
    }    
    encTexT+=val
  }
  return encTexT
}

const decSezar=(text,shift)=>{
  let decTexT=""
  let val=""
  for (let index = 0; index < text.length; index++) {
    try {
      val= alphabet[alphabet.indexOf(text[index])-shift]
    } catch (error) {
      let diff=shift - (alphabet.length - alphabet.indexOf(text[index]))
      val=alphabet[diff]
    }    
    decTexT+=val
  }
  return decTexT
}

enc.addEventListener('click',()=>{
  const t= encSezar(input.value,3)
  console.log(t)
})

dec.addEventListener('click',()=>{
  const t= decSezar(input.value,3)
  console.log(t)
})