let isStart = false;

const getTodoById = () => {

    return new Promise((resolve) => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => {
                resolve(json)
            })
    })

}

const getcomments = () => {
    return new Promise((resolve) => {
        fetch('http://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(json => {
                resolve(json)
            })
    })

}
const getalbums = () => {
    return new Promise((resolve) => {
        fetch('http://jsonplaceholder.typicode.com/albums')
            .then(response => response.json())
            .then(json => {
                resolve(json)
            })
    })

}

const gettodos = () => {
    return new Promise((resolve) => {
        fetch('http://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => {
                resolve(json)
            })
    })

}
const getusers = () => {
    return new Promise((resolve) => {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                resolve(json)
            })
    })

}

const allResult = () => {
    isStart = true
    alert("Vaşladı")
    Promise.all([getTodoById(), getcomments(), getalbums(), gettodos(), getusers()]).then((response) => {
        alert('bitti')
        isStart = false
        debugger
    })
}

window.addEventListener('load', () => {
    allResult()

})