const workerpool = require('workerpool');
const handleCalculation=()=>{
    let counter=0
    while(counter<99999999999){
        counter++
    }
    return counter
}
workerpool.worker({
    handleCalculation:handleCalculation
})