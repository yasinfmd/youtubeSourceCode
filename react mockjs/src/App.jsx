import { useEffect, useState } from 'react'
import './App.css'
import {Random} from 'mockjs'


const names=["123",12,"sadd","fertert","fejlhdsjklf"]


function App() {


  useEffect(()=>{
    setTimeout(() => {
      const arr=[]
      for (let index = 0; index < 50; index++) {
        const element = {
          id:Random.id(),
          isActive:Random.boolean(),
          email:Random.email(),
          city:Random.city(),
          date:Random.date(),
          ip:Random.ip(),
          name:Random.pick(names)

        }
        arr.push(element)
        
      }
      console.log('arr',arr)
    }, 2000);
  },[])

  return (
    <>
      <div className="card">
          Test
      </div>

    </>
  )
}

export default App
