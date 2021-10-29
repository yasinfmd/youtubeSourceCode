
const el = document.getElementById("onlyOfflineVisible")

window.addEventListener(("online"), (e) => {
    console.log("e", e)
    el.style.display = "none"

})
window.addEventListener(("offline"), (e) => {
    console.log("e", e)
    el.style.display = "flex"
})