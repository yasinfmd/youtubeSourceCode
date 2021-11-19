<template>
  <div class="fabric">
    <button @click="addNewBox">Kutu Ekle</button>
    <button @click="addCircle">Yuvarlak Ekle</button>
    <button @click="toJson">To Json </button>
    <button @click="toImage">To Image</button>

    <canvas ref="canvasRef" width="500" height="500"/>
  </div>
</template>
<style scoped>
.fabric {
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
}

canvas {
  border: 1px solid #42b983;
  border-radius: 8px;
}
</style>
<script>
import {fabric} from "fabric"
import work from "./work.json"
var canvas = null
export default {
  name: 'App',
  methods: {
    toImage(){
      const ext = "png";
      const base64 = canvas.toDataURL({
        format: ext,
        enableRetinaScaling: true
      });
      const link = document.createElement("a");
      link.href = base64;
      link.download = `eraser_example.${ext}`;
      link.click();
    },
    async toJson() {
      const json = canvas.toDatalessJSON(["clipPath"]);
      const out = JSON.stringify(json, null, "\t");
      const blob = new Blob([out], {type: "text/plain"});
      const clipboardItemData = {[blob.type]: blob};

      const blobURL = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = blobURL;
      a.download = "myWork.json";
      a.click();
      URL.revokeObjectURL(blobURL);
    },
    addCircle() {
      const circle = new fabric.Circle({
        radius: 40,
        fill: "green",
        top: 300,
        left: 300
      })
      canvas.add(circle)
      canvas.setActiveObject(circle)
    },
    addNewBox() {
      this.count = this.count + 10
      const rect = new fabric.Rect({
        top: 150,
        left: this.count,
        width: 50,
        height: 50,
        fill: "#f56",
        borderColor: "#3845ff",
        cornerSize: 15,
        cornerStyle: "circle"
      })
      canvas.add(rect)
      canvas.setActiveObject(rect)

    },
    onObjectScaled() {
      const obj = canvas.getActiveObject()
      const width = obj.width
      const  height = obj.height
      const scaleX=obj.scaleX
      const scaleY=obj.scaleY
      obj.set({
        width:width*scaleX,
        height:height*scaleY,
        scaleX:1,
        scaleY:1,
      })
    }
  },
  data() {
    return {
      count: 250,
      myImage: "https://media-exp1.licdn.com/dms/image/C4D03AQGvzRFr1ureeA/profile-displayphoto-shrink_100_100/0/1616167030442?e=1642636800&v=beta&t=d1og7EyuteJde5sFXT6ieAQb5KJV1VV33Hs1gl7l9ek"
    }
  },
  mounted() {
    canvas = new fabric.Canvas(this.$refs.canvasRef, {
      isDrawingMode: false
    })

/*    new fabric.Image.fromURL(this.myImage, (_img) => {
      const _me = _img.set({left: 0, top: 0, width: _img.width, height: _img.height})
      canvas.add(_me)
    })*/
    const textBox=new fabric.Textbox("FabricJS",{
      left:20,
      top:20,
      fill:"black",
      stroke:"black",
      strokeWidth:2,
      fontSize:16
    })

    const text=new fabric.Text("Merhaba",{
      left:50,
      top:70,
      fill:"black",
      stroke:"black",
      strokeWidth:2,
      fontSize:16
    })
    const rect = new fabric.Rect({
      top: 100,
      left: 100,
      width: 50,
      height: 50,
      fill: "#f3f345",
      angle: 90,
      borderColor: "#f56",
      cornerSize: 15,
      cornerStyle: "circle"
    })
  canvas.loadFromJSON(work,(e)=>{
      canvas.renderAll()
    })
/*
 canvas.add(rect)
    canvas.add(text)
    canvas.add(textBox)
*/

    canvas.on('object:scaling', this.onObjectScaled);

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
