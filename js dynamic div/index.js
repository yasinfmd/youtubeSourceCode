window.addEventListener('mousemove', (event) => {
    // console.log(`event`, event.clientX)
    //console.log(`eventY`, event.clientY)
    const div = document.createElement('div')
    div.style.width = "10px"
    div.style.height = "10px"
    div.style.borderRadius = "100%"
    div.style.position = "absolute"
    div.style.top = event.clientY + "px"
    div.style.left = event.clientX + "px"
    div.style.background = getRandomColor()
    document.body.appendChild(div)
})

function getRandomColor() {
    const values = '0123456789ABCDEF'
    let colorPrefix = "#"
    for (let index = 0; index < 6; index++) {
        colorPrefix += values[Math.floor(Math.random() * 16)]
    }
    return colorPrefix

}