import React from "react"
import { useEffect } from "react"


const Hello = (props) => {
    useEffect(() => {
        if (props.text === "yasin") {
            const data = JSON.stringify({ ad: "ali" })
            
            throw new Error(`Yasin Olamaz 8.satır form kontrolu ilgili veri  ${data} `)
        }
    },[props])
    return (
        <div>
            {props.text}
        </div>
    )
}
export default Hello