let SW_INFO="";



document.addEventListener("DOMContentLoaded",()=>{
  if("serviceWorker" in navigator){
    navigator.serviceWorker.register('./sw.js').then((registration)=>{
        console.log(registration)
          SW_INFO=registration.installing || registration.waiting || registration.active
    })
  }
})


const fetchData=()=>{
  fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(json => {
        document.getElementById('h2').innerHTML=json.length
      })
}
fetchData()