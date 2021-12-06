import { ajax } from "rxjs/ajax"



ajax.getJSON("https://api.github.com/users").subscribe((res) => {
    console.log("res", res)
}, (err) => {
    console.log("err", err)
}, () => {
    console.log("done")
})


ajax({
    url: "https://api.github.com/users",
    async: true,
    method: "GET"
}).subscribe((res) => {
    console.log("_res", res.response)
})