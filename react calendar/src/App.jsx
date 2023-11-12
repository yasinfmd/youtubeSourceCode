import React , {useState,useEffect} from "react"
function App() {
  const currentYear=new Date().getFullYear()
  const weekdays=['Pzt','Sal','Çrş','Prş','Cum','Cmt','Pzt']
  const [months,setMonths]=useState([])
  const buildCalendar=()=>{
      const newMonths=[]
      for (let index = 0; index < 12; index++) {
        const firstDay=new Date(currentYear,index,1)
        const lastDay=new Date(currentYear,index+1,0)
        const daysInMonth=lastDay.getDate()
        const startingDay=firstDay.getDay()

        const month={name:getMonthName(index),days:[]}

        for (let index = 0; index < startingDay; index++) {
          month.days.push({day:0,inactive:true})
        }
        for (let index = 0; index < daysInMonth; index++) {
          month.days.push({day:index+1,inactive:false})
        }
        const remainingDays=(42-month.days.length)%7
        for (let index = 0; index < remainingDays; index++) {
          month.days.push({day:0,inactive:true})
        }
        newMonths.push(month)
      }
      setMonths(newMonths)
  }

  const getMonthName=(i)=>{
    const _arr=[
      'Ocak',
      'Şubat',
      'Mart',
      'Nisan',
      'Mayıs',
      'Haziran',
      'Temmuz',
      'Ağustos',
      'Eylül',
      'Ekim',
      'Kasım',
      'Aralık'
    ]
    return _arr[i]
  }
  useEffect(()=>{
      buildCalendar()
  },[])
  return (
    <>

    <div id="calendar">
      {months.map((month,index)=>{
        return(
          <div key={index} className="month">
            <h2>{month.name}</h2>
            <div className="weekdays">
              {weekdays.map((day,dayIndex)=>{
                return(
                  <div key={dayIndex} className="weekday">
                    {day}
                  </div>
                )
              })}
            </div>
            <div className="days">
              {month.days.map((day,dayIndex)=>{
                return(
                  <div key={dayIndex} className={`day ${day.day===0 ? 'inactive':''}`}>
                    {day.day!==0 && <div><span>{day.day}</span></div>}
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}

    </div>
    </>
  )
}

export default App
