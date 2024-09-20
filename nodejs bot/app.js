// Move the mouse across the screen as a sine wave.
var robot = require("robotjs");

console.log(robot.getMousePos())

console.log(robot.getPixelColor(robot.getMousePos().x,robot.getMousePos().y))

 robot.moveMouseSmooth(24,11)
 robot.mouseClick()
 console.log(robot.getScreenSize())
 robot.typeString("edge");
 robot.keyTap("enter");
 robot.typeString("sahibinden")
 robot.keyTap("enter");
robot.typeString("Buraya metin nodejs tarafından yazıldı");

setInterval(() => {
    //robot.mouseClick()
}, 3000);