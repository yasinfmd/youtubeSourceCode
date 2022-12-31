interface Todo{
    id:string
    isComplate:boolean
    text:string
    date:string
}
const updateMyData=(t:Pick<Todo,'text'|'id'>)=>{
        console.log('updatee')
}
const item:Todo={date:"123",id:"qwewqe",isComplate:false,text:'qwewqe'}
updateMyData(item)