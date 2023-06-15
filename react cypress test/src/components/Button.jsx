
import  './button.css'
const Button=(props)=>{
        return(
            <button
                id={props.id}
                className={props.className}
                onClick={props.onClick}
                disabled={props.disabled}
                name={props.name}
                style={{
                    backgroundColor:props.color,
                    width:props.width
            }}>{props.text}</button>
        )
}
export default  Button
