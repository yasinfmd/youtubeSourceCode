const elements = document.getElementsByClassName('droparea')

const onStart = (event) => {
    event.dataTransfer.setData("text", event.target.id)
    event.target.style.opacity = .5;
}
for (let index = 0; index < elements.length; index++) {
    elements[index].addEventListener('dragover', (e) => {
        e.preventDefault();
    })

    elements[index].addEventListener('dragenter', (e) => {
        e.target.style.backgroundColor = "red";
    })
    elements[index].addEventListener('dragleave', (e) => {
        e.target.style.backgroundColor = "";
    })

    elements[index].addEventListener('drop', (e) => {
        e.preventDefault();
        const elId = e.dataTransfer.getData("text")
        const el = document.getElementById(elId)
        el.style.opacity = 1;
        e.target.appendChild(el);

    })


}