import * as THREE from 'three'
const canvas = document.getElementById('canvas')

let camera, scene, renreder, geomerty, material, mesh, mesh2;
const raycaster = new THREE.Raycaster()
const mouse = new THREE.Vector2()
init()

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function animation() {
    mesh.rotation.x += .02
    mesh.rotation.y += .02

    mesh2.rotation.x += .02
    mesh2.rotation.y += .02
    renreder.render(scene, camera)

}
function onMouseMove(event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, camera)
    const intersects = raycaster.intersectObjects(scene.children, true)
    if (intersects.length > 0) {
        intersects[0].object.material.color.set(getRandomColor())
    }
}
function init() {
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight)
    camera.position.z = 2
    scene = new THREE.Scene()
    geomerty = new THREE.BoxGeometry(.2, .2, .2)
    material = new THREE.MeshBasicMaterial({ color: "red" })
    mesh = new THREE.Mesh(geomerty, material)

    mesh2 = new THREE.Mesh(geomerty, new THREE.MeshBasicMaterial({ color: "blue" }))
    scene.add(mesh)
    mesh2.position.set(0, 0.5, 0)

    canvas.addEventListener('mousemove', onMouseMove)
    scene.add(mesh2)
    renreder = new THREE.WebGLRenderer({ canvas: canvas })
    renreder.setSize(window.innerWidth, window.innerHeight)
    renreder.setAnimationLoop(animation)

}