import axios from 'axios'
import FileSaver from 'file-saver'


const fetch = () => {
    axios.get("http://localhost:9000/download", {
        responseType: "blob",
        onDownloadProgress: (progresEvent) => {
            const percent = Math.round((progresEvent.loaded * 100) / progresEvent.total)
            console.log(percent)

        }
    }).then((response) => {
        // const blob = new Blob([response.data], { type: "text/plain;charset=utf-8" })
        FileSaver.saveAs(response.data, "resim.jpg")
    })
}

fetch()