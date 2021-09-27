import './index.css'
import './custom.scss'
const sayHello=()=>{
    console.log("Say Hello is Running")
}

sayHello()

document.querySelector(".helloBtn").addEventListener("click",()=>{
    alert("Hello Btn Pressed")
})

