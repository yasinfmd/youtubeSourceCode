import './style.css'
import * as jsStore from 'jsstore'
const create_db=document.getElementById('create_db')
import workerInjector from "jsstore/dist/worker_injector";


const connection=new jsStore.Connection()
connection.addPlugin(workerInjector);


const add_data=document.querySelector('#add_data')



const studentTable={
  name:'Students',
  columns:{
    id:{primaryKey:true,autoIncrement:true},
    name:{notNull:true,dataType:jsStore.DATA_TYPE.String},
    age:{dataType:jsStore.DATA_TYPE.Number}
  }

}

const database={
  name:'MockDb',
  tables:[studentTable],

}

create_db.onclick=async ()=>{
    const r= await connection.initDb(database)
    console.log('r', r)
}


add_data.addEventListener('click',async()=>{
       connection.insert({
          into:'Students',
          values:[{name:'Yasin',age:28},{name:'Ahmet',age:15}]
        }).then((r)=>{
          debugger
        }).catch((e)=>{
          debugger
        })
})

const delete_data=document.getElementById('delete_data')

delete_data.onclick=async()=>{
  try {
    const r=  await connection.remove({
        from:'Students',
        where:{
          id:2
        }
      })
      console.log('r', r)
  } catch (error) {
    
  }
}


// connection.update({
//   in:'Students',
//   set:{
//     age:30000
//   },
//   where:{
//     id:2
//   }
// })

const fetch_data=document.getElementById('fetch_data')
fetch_data.addEventListener('click',()=>{
 connection.select({
    from:'Students',
  }).then((res)=>{
    debugger
  }).catch((err)=>{
    debugger
  })
})