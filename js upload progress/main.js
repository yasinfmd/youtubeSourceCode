import './style.css'


const pickImage=document.getElementById('pickImage')
const fileStatus=document.getElementById('fileStatus')

pickImage.addEventListener('change',(e)=>{
  const f=e.target.files[0]
  const xhr=new XMLHttpRequest()

  xhr.open('POST','http://localhost:3000/upload',true)

  xhr.upload.onprogress=(e)=>{
    if(e.lengthComputable){
      let p=(e.loaded/e.total)*100
      console.log(p)
      fileStatus.innerText=Math.round(p)+"%"
    }
  }

  const formData=new FormData()
  formData.append('file',f)

  xhr.send(formData)
})