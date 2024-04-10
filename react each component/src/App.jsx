import './App.css'
import {Each} from "./Each";

function App() {
    const list=[
        1,2,3,4,5
    ]
    const secondList=[
        "a","213","3123","dfgg","fghgf"
    ]
  return (
    <>
            <div>Selam</div>

        <Each
            of={list}
            render={(item)=>{
                return <p>{item}</p>
            }}
        />

        <ul>
            <Each of={secondList}
                  options={
                      {
                          filter:(item)=>item!="a"
                      }
                  }
                  render={(item)=>{
                return <li>{item}</li>
            }} />

        </ul>
    </>
  )
}

export default App
