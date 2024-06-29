class Vehicle{
    type;
    constructor(type){
        this.type=type
        console.log('type',type)
    }
    drive(){
        console.log('type drive',this.type)
    }
}
class Car extends Vehicle{
    constructor(){
        super("Car")
    }
}
class MotorCycle extends Vehicle{
    constructor(){
        super("MotorCycle")
    }
}

class VehicleFactory{
    createVehicle(vehicleType,p){
       // console.log(p instanceof Car)
        switch (vehicleType) {
            case "Car":
                return new Car()
                break;

                case "MotorCycle":
                    return new MotorCycle()
                    break;
        
            default:
                break;
        }
    }
}
const c=new Car();
const factory=new VehicleFactory()

const car=factory.createVehicle("Car",Car)
car.drive()
const motorcycle=factory.createVehicle("MotorCycle",MotorCycle)
motorcycle.drive()
