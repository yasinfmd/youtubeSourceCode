import './App.css';
import {useEffect, useState} from "react";

function App() {
  const numbers=[1,2,3,4,5,6,7,8,9,10,11,12]
    const [hourRotation,setHourRotation]=useState(0)
    const [minuteRotation,setMinuteRotation]=useState(0)
    const [secondRotation,setSecondRotation]=useState(0)

    useEffect(()=>{
       setInterval(()=>{
           const currentDate=new Date()
           const secondRatio=currentDate.getSeconds()/60
           const minuteRatio=(secondRatio + currentDate.getMinutes())/60
           const hourRatio=(minuteRatio + currentDate.getHours())/12
           setHourRotation(hourRatio*360)
           setMinuteRotation(minuteRatio*360)
           setSecondRotation(secondRatio*360)

       },1000)
    },[])
    return (
      <>
        <div className="clock">
          <div className="line hour" style={{
              transform:`rotate(${hourRotation}deg)`
          }}></div>
          <div className="line minute"
               style={{
                   transform:`rotate(${minuteRotation}deg)`
               }}
          ></div>
          <div className="line second"
               style={{
                   transform:`rotate(${secondRotation}deg)`
               }}
          ></div>
          {numbers.map((item)=>{
            return(
                <div key={item} className="number" style={{
                    transform:`rotate(${item*30}deg)`
                }}>
                  {item}
                </div>
            )
          })}
        </div>
      </>
  );
}

export default App;
