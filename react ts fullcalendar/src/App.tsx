import React from 'react';
import FullCalendar,{EventContentArg,EventClickArg,DateSelectArg,EventApi} from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"
import timeGridPlugin from "@fullcalendar/timegrid"
import interactionPlugin from "@fullcalendar/interaction"
import allLocales from "@fullcalendar/core/locales-all"

import './App.css';
let id=0;
function App() {
    const [events,setEvents]=React.useState<Array<EventApi>>([])
    const [initialEvents, setInitialEvents] = React.useState([
        {
            id: String(10001),
            title: "Merhaba Dünya",
            start: new Date().toISOString().split("T")[0]
        },
        {
            id: String(20002),
            title: "Merhaba Dünya 2",
            start: new Date().toISOString().split("T")[0] + "T14:05:00"
        }
    ])
        React.useEffect(()=>{
                console.log("eventler",events)
        },[events])
    const handleEvents=(events:EventApi[])=>{
        setEvents(events)
    }
    const renderEventContent = (eventContent: EventContentArg) => {
        return (
            <>
                <b> {eventContent.timeText}</b>
                <b style={{color: "red"}}> {eventContent.event.title}</b>

            </>
        )
    }

    const handleEventClick = (clickInfo: EventClickArg) => {
        alert(`Tıklanılan Event ${clickInfo.event.title}`)
        console.log(clickInfo.event.id)
        clickInfo.event.remove()
    }
    const handleDateSelect = (selectInfo: DateSelectArg) => {
        let title = prompt("Event Adı Giriniz");
        let calenderApi = selectInfo.view.calendar
        calenderApi.unselect()
        if(title){
            calenderApi.addEvent({
                 id:String(id++),
                title,
                start:selectInfo.startStr,
                end:selectInfo.endStr,
                allDay:selectInfo.allDay
            })
        }
}
  return (
    <>
        <FullCalendar
        plugins={[dayGridPlugin,timeGridPlugin,interactionPlugin]}
        customButtons={{
            btn:{
                text:"Buton Texti",
                click(ev: MouseEvent, element: HTMLElement) {
                    alert("Özel Butona Tıklandı")
                }
            }
        }}
        dateClick={(e)=>{
                console.log("dateclick",e)
        }}
        select={handleDateSelect}
        eventClick={handleEventClick}
        eventContent={renderEventContent}
        initialEvents={initialEvents}
        headerToolbar={{
            left:"prev,next today btn",
            center:"title",
            right:"dayGridMonth,timeGridWeek,timeGridDay btn"
        }}
        initialView="dayGridMonth"
        selectable={true}
        editable={true}
        eventDragStart={(e)=>{
            console.log("sürüklemeye başladı")
        }}
        eventDragStop={(e)=>{
            console.log("sürüklemeyi bıraktı")
        }}
        eventBackgroundColor={"blue"}
        eventBorderColor={"purple"}
        eventRemove={(e)=>{
            console.log("event silindi")
        }}
        eventsSet={handleEvents}
        /*dayHeaderFormat={{
            week:"short",
            day:"numeric",
            month:"short"
        }}*/
            eventAdd={(e)=>{
                    console.log("yeni event eklendi",e)
            }}
        eventChange={(e)=>{
            console.log("event değişti",e)
        }}
        dayMaxEvents={true}
        weekends={true}
        locales={allLocales}
        firstDay={1}
        locale={"tr"}
        buttonText={{
            day:"Gün",
            prev:"Geri",
            nextYear:"Sonraki Yıl",
            prevYear:"Önceki Yıl",
            next:"İleri",
            month:"Ay",
            today:"Bugüne Gel",
            week:"Haftaaaa"
        }}
        />
    </>
  );
}

export default App;
