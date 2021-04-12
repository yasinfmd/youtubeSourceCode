const element = document.getElementById('more')
const imageUrl = ['https://images.unsplash.com/photo-1617871911112-757893b9f0df?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80', 'https://images.unsplash.com/photo-1617932892589-9366858719b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80', 'https://images.unsplash.com/photo-1505259839540-04105fcd8ba3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1285&q=80', 'https://images.unsplash.com/photo-1549277181-39c5e97b78d3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80']
// let observer = new IntersectionObserver((entries) => {
//     if (entries[0].isIntersecting) {
//         entries[0].target.src = imageUrl
//     }
// })
// observer.observe(element)

const ul = document.getElementById('liste')

let moreObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        for (let index = 0; index < 10; index++) {
            let li = document.createElement('li')
            li.appendChild(document.createTextNode(index + 1))
            ul.appendChild(li)
        }
    }

}, { threshold: 0.8 })

moreObserver.observe(element)

const images = document.querySelectorAll('.customImage')
let observer = new IntersectionObserver((entries) => {
    entries.forEach((item, index) => {
        if (item.isIntersecting) {
            item.target.src = imageUrl
        }
    })
    // if (entries[0].isIntersecting) {
    //     entries[0].target.src = imageUrl
    // }
})


images.forEach((item) => {
    observer.observe(item)
})