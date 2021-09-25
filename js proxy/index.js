const { default: axios } = require("axios")


const fetchData = () => {
    axios.get("/api/user/get").then((res) => {
        console.log("response", res)
    })
}

document.getElementById("fetchDataBtn").addEventListener("click", fetchData)