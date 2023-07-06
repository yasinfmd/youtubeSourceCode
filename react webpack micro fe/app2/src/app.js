import React , {useEffect,useState} from 'react';
import ShowCounter from './showcounter';
import {useStore} from 'storeApp/storeRemote'

const App = (props) => {
  const [hostNumber,setHostNumber]=useState()
  const { count,increment,decrement,incrementByAmount}=useStore()

  useEffect(()=>{
    window.addEventListener('ADD_NUMBER',(e)=>{
      console.log(e)
      setHostNumber(e.detail.count)
    })
  },
  [])
  return (
    <>
    <h1>Merhaba Benn Application 2</h1>
    <ShowCounter text={props.text} />
    {hostNumber ? <h1>{hostNumber}</h1>:<></>}
    
    <h1>Store App Count {count}</h1>
    </>

  )
};

export default App;