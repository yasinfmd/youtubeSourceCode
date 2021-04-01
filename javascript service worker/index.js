if (navigator.serviceWorker) {
    navigator.serviceWorker.register('./sw.js').then((res) => {
        console.log('register edildi')
    }).catch((err) => {
        console.log('hata', err)
    })
}


window.addEventListener('load', () => {
    let myList = document.getElementById('myCustomList');
    fetch('http://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => {
            json.forEach(element => {
                let li = document.createElement('li');
                li.className = 'list-group-item';
                li.textContent = element.title;
                myList.append(li)
            });
        })
})
//  <li class="list-group-item">Cras justo odio</li>