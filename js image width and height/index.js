
const el = document.getElementById("photoInput")

el.addEventListener(("change"), (e) => {
    let reader = new FileReader()
    reader.readAsDataURL(e.target.files[0])
    reader.onload = function (e) {
        const image = new Image()
        image.src = e.target.result
        image.onload = function () {
            const height = this.height
            const width = this.width
            alert(width)
            alert(height)

            if (height < 101 && width < 101) {
                return true
            } else {
                return false
            }
        }
    }
})