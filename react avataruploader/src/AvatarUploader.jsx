import { useRef, useState } from "react"

const NO_IMAGE='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png'
const AvatarUploader=()=>{
    const fileRef=useRef()
    const [avatarUrl,setAvatarUrl]=useState(NO_IMAGE)
    const [fileName,setFileName]=useState('')
    const handleAvatarChange=(event)=>{
        const file=event.target.files[0]
        console.log(file)
        if(file){
            setFileName(file.name)
            const reader=new FileReader()
            reader.onload=()=>{
                setAvatarUrl(reader.result)
            }
            reader.readAsDataURL(file)
        }else{
            setFileName('')
            setAvatarUrl(NO_IMAGE)
        }

    }
    return(
        <div className="avatar-uploader-wrapper">
            <div className="avatar-img-wrapper">
            <img className="avatar-img" src={avatarUrl} onClick={()=>{
                fileRef.current.click()
            }} />
            <div className="avatar-info">{fileName===''?'Avatar Seçiniz':fileName}</div>
            </div>
            <input hidden type="file" accept="image/*" ref={fileRef} onChange={handleAvatarChange} />
        </div>
    )
}
export default AvatarUploader