const THREE=require('three')
const GLTFLoader=require('three/examples/jsm/loaders/GLTFLoader')
const OrbitControl=require('three/examples/jsm/controls/OrbitControls')


const loader=new GLTFLoader.GLTFLoader()
const flamingo=require('./Flamingo.glb')
const horse=require('./Horse.glb')


const canvas=document.getElementById('canvas')

const _horse=document.getElementById('horse')
const _bird=document.getElementById('bird')




const scene=new THREE.Scene()


const camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,.1,1000)

const renderer=new THREE.WebGLRenderer({canvas:canvas})

renderer.setSize(window.innerWidth,window.innerHeight)

const g=new THREE.BoxGeometry(1,1,1)
const m=new THREE.MeshBasicMaterial({color:new THREE.Color(255,0,0)})
const cube=new THREE.Mesh(g,m)
//scene.add(cube)
camera.position.z=5

const ambLight=new THREE.AmbientLight(0xffffff,1.5)
ambLight.position.set(0,25,0)
scene.add(ambLight)


const controls=new OrbitControl.OrbitControls(camera,canvas)
controls.minDistance=2
controls.maxDistance=20
controls.update()

 loader.load(flamingo,(gltf)=>{
 	const model=gltf.scene
 	model.scale.set(0.01,0.01,0.01)
 	model.rotateY(1)
 	scene.add(model)
 })
loader.load(horse,(gltf)=>{
	const model=gltf.scene
	model.position.set(-3,-1,0)
	model.scale.set(0.01,0.01,0.01)
	scene.add(model)
})



function animate(){
	requestAnimationFrame(animate)
	// cube.rotation.x+=0.05
	// cube.rotation.y+=0.05
	// cube.rotation.z+=0.05


	renderer.render(scene,camera)
}

_horse.addEventListener('click',()=>{
	controls.target.set(-3,-1,0)
	controls.update()
})

_bird.addEventListener('click',()=>{
	controls.target.set(0,0,0)
	controls.update()
	
})

window.addEventListener('resize',()=>{
renderer.setSize(window.innerWidth,window.innerHeight)
	
})
animate()