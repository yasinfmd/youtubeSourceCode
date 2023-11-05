import { useEffect } from "react"
import { useRef } from "react"
import Gantt from "frappe-gantt"

const MyGantt=(props)=>{
    const ref=useRef()
    useEffect(()=>{
        if(ref.current){
            new Gantt(ref.current, props.tasks, {
                on_click: function (task) {
                    console.log(task);
                },
                on_date_change: function(task, start, end) {
                    console.log(task, start, end);
                },
                on_progress_change: function(task, progress) {
                    console.log(task, progress);
                },
                on_view_change: function(mode) {
                    console.log(mode);
                },
                view_mode:'Week',
                header_height: 50,
                column_width: 30,
                step: 24,
                view_modes: ['Quarter Day', 'Half Day', 'Day', 'Week', 'Month'],
                bar_height: 20,
                bar_corner_radius: 3,
                arrow_curve: 5,
                padding: 18,
                date_format: 'YYYY-MM-DD',
                language: 'tr', // or 'es', 'it', 'ru', 'ptBr', 'fr', 'tr', 'zh', 'de', 'hu'
                custom_popup_html: null
            });
        }
    },[ref,props])
    return(
        <div>
            <svg ref={ref}></svg>
        </div>
    )
}
export default MyGantt