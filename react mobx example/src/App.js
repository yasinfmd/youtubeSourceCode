import {observer} from 'mobx-react'
import { useState } from 'react'
import Count from './Count'
const App=observer((data)=>{
  console.log(data)
  const [state,setState]=useState("Yasin")
  return(
    <div>
      {state}
      <h1>Sayı : {data.store.count}</h1>
      <Count />
      Appjs
      <button onClick={()=>{
              data.store.dec()
            }}>Tıkla ve sayı azalt</button>
             <button onClick={()=>{
                             data.store.inc()

            }}>Tıkla ve sayı artır</button>
    </div>
  )
})
export default App