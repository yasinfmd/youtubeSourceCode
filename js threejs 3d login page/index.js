import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import front from './assets/posz.jpg'

import back from './assets/negz.jpg'
import down from './assets/negy.jpg'
import up from './assets/posy.jpg'
import left from './assets/negx.jpg'
import right from './assets/posx.jpg'
const canvas = document.getElementById('canvas')
let camera, scene, renderer, controls, geometry, mesh;

init()

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
}
function render() {
    mesh.rotation.y += 0.005
    renderer.render(scene, camera)
}
function init() {
    scene = new THREE.Scene()
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 30000)
    camera.position.set(-900, -200, -900)
    geometry = new THREE.BoxBufferGeometry(10000, 10000, 10000)
    const materials = [
        new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(front), side: THREE.DoubleSide }),
        new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(back), side: THREE.DoubleSide }),
        new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(up), side: THREE.DoubleSide }),
        new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(down), side: THREE.DoubleSide }),
        new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(left), side: THREE.DoubleSide }),
        new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(right), side: THREE.DoubleSide })
    ]
    mesh = new THREE.Mesh(geometry, materials)
    scene.add(mesh)
    //controls = new OrbitControls(camera, canvas)
    //controls.update()
    //controls.addEventListener('change', render)
    renderer = new THREE.WebGL1Renderer({ canvas: canvas, antialias: true })
    renderer.setAnimationLoop(render)
    renderer.setSize(window.innerWidth, window.innerHeight)
    window.addEventListener('resize', onWindowResize)
}