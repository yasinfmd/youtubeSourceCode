import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
const canvas = document.getElementById('canvas')
let camera, scene, renderer, controls;

import model from './assets/model.fbx'

import basemap from './assets/basemap.png'
import metalicmap from './assets/metalicmap.png'
import normalmap from './assets/normalmap.png'
import roughnessmap from './assets/roughnessmap.png'

import basemap2 from './assets/basemap.png'
import metalicmap2 from './assets/metalicmap.png'
import normalmap2 from './assets/normalmap.png'
import roughnessmap2 from './assets/roughnessmap.png'
import emissivemap from './assets/emissivemap.png'


import glassbasemap from './assets/glassbasemap.jpg'
import glassrmap from './assets/glassrmap.jpg'

import baserotormap from './assets/baserotormap.jpg'
import rotormetalicmap from './assets/rotormetalicmap.jpg'
import rotorroughnessmap from './assets/rotorroughnessmap.jpg'
import rotornormalmap from './assets/rotornormalmap.jpg'




const loader = new FBXLoader()

init()

function render() {
    renderer.render(scene, camera)
}

function init() {
    scene = new THREE.Scene()
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight)
    camera.position.set(-900, -200, -1000)
    const light1 = new THREE.DirectionalLight(0xffffff, 1)
    const light2 = new THREE.DirectionalLight(0xffffff, 1)
    light1.position.set(200, 1000, 500)
    light2.position.set(-200, 1000, 1000)

    scene.add(light1)
    scene.add(light2)


    loader.load(model, (object) => {

        object.children[0].children.forEach((item) => {
            if (item.name.includes('glass')) {
                item.material = new THREE.MeshStandardMaterial({
                    roughness: 30,
                    metalness: .5,
                    map: new THREE.TextureLoader().load(glassbasemap),
                    roughnessMap: new THREE.TextureLoader().load(glassrmap)
                })
            }
            if (item.name.toLowerCase().includes("rotor")) {
                item.material = new THREE.MeshStandardMaterial({
                    roughness: 30,
                    metalness: .5,
                    map: new THREE.TextureLoader().load(baserotormap),
                    roughnessMap: new THREE.TextureLoader().load(rotorroughnessmap),
                    metalnessMap: new THREE.TextureLoader().load(rotormetalicmap),
                    normalMap: new THREE.TextureLoader().load(rotornormalmap)
                })
            }
        })

        object.children[0].material = [
            new THREE.MeshStandardMaterial({
                normalMap: new THREE.TextureLoader().load(normalmap),
                map: new THREE.TextureLoader().load(basemap),
                roughnessMap: new THREE.TextureLoader().load(roughnessmap),
                metalnessMap: new THREE.TextureLoader().load(metalicmap),
                roughness: 1,
                metalness: 0.5
            }),
            new THREE.MeshStandardMaterial({
                normalMap: new THREE.TextureLoader().load(normalmap2),
                map: new THREE.TextureLoader().load(basemap2),
                roughnessMap: new THREE.TextureLoader().load(roughnessmap2),
                metalnessMap: new THREE.TextureLoader().load(metalicmap2),
                emissivemap: new THREE.TextureLoader().load(emissivemap),
                roughness: 1,
                metalness: 0.5
            }),

        ]

        scene.add(object)

    })
    controls = new OrbitControls(camera, canvas)
    controls.update()

    renderer = new THREE.WebGLRenderer({ canvas: canvas })
    renderer.setAnimationLoop(render)
    renderer.setSize(window.innerWidth, window.innerHeight)


}