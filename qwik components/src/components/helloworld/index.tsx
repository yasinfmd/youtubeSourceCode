import {component$ , Slot} from '@builder.io/qwik'

interface HelloWorldProps{
    text:string
    worldText?:string
}
interface WorldProps{
    worldText?:string
}

const World=component$(({worldText="World!!!"}:WorldProps)=>{
    return <div>{worldText}</div>
})

const HelloWorld=component$<HelloWorldProps>((props)=>{
    const {text,worldText}=props
    return (
        <>
            <Slot name='titleSlot' />

                <p>
                    {props.text}
                </p>
            <World worldText={worldText} />
            <Slot />
            <World worldText={worldText} />

            </>
    )
})
export default HelloWorld