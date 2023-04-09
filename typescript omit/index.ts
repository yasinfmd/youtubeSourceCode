interface User{
    id:string
    name:string
    surName:string
}


const createUser=(user:Omit<User,"id">)=>{
    console.log(user)
}
