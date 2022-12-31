interface Post{
    id:string
    name:string
    categories:string[]
}
const post:Post={
    categories:[],
    id:"1201201",
    name:"wqerwqewqe"
}
function updatePost(p:Partial<Post>){
    p.name="whgwerhjgwer"
}
const x:Partial<Post>={
    name:"21321"
}
updatePost(x)