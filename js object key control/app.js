const isKeyExist=(obj,key)=>{
    return !!Object.keys(obj).find((item)=>item===key)
}

const userData={
    id:1,
    name:'yasin',
    workInfo:{
        adress:"Adres",
        phone:"Telefonnn"
    },
    homeInfo:{
        city:{
            name:"Abc",
            id:"123"
        },
        country:'TR'
    }
}
if(userData?.homeInfo?.city?.name){
    console.log(true)
}
if("homeInfo" in userData){
    console.log('yes')
}
console.log(isKeyExist(userData,"homeInfo"))
console.log(isKeyExist(userData.workInfo,"tel"))
