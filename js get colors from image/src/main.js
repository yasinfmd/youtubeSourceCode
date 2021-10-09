import { prominent, average } from "color.js"
import './index.css'

const fileInput = document.getElementById("myFile")
const imageArea = document.querySelector(".imageArea")
const colorsArea = document.getElementById("colors")
fileInput.addEventListener("change", (e) => {
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.addEventListener("load", (e) => {
        console.log(e.target.result)
        average(e.target.result, { format: "hex" }).then((color) => {
            document.body.style.background = color;
            document.body.style.opacity = .6
            console.log(`color`, color)
        })
        // prominent(e.target.result, { format: "hex", amount: 5 }).then((colors) => {
        //     colorsArea.innerHTML = ""
        //     colors.forEach((color) => {
        //         const div = document.createElement("div")
        //         div.style.background = color
        //         div.style.width = "100px"
        //         div.style.height = "100px"
        //         colorsArea.appendChild(div)

        //     })

        // })
        imageArea.children[0].src = e.target.result
    })

    reader.readAsDataURL(file)
})