const dropArea = document.querySelector('.dropArea')

dropArea.addEventListener('dragover', (e) => {
    e.preventDefault()
    e.target.classList.add('over')
})

dropArea.addEventListener('dragleave', (e) => {
    console.log('ayrıldı')
    e.target.classList.remove('over')

})

dropArea.addEventListener('drop', (e) => {
    e.preventDefault()
    let file = e.dataTransfer.files[0]
    let fileReader = new FileReader()
    fileReader.onload = (result) => {
        let img = "<img src='" + result.target.result + "' />"
        dropArea.innerHTML = img
    }
    fileReader.readAsDataURL(file)

})
