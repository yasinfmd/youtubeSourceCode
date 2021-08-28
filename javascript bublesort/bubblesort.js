
const bubbleSort = (arr) => {
    let length = arr.length
    for (let i = 0; i < length - 1; i++) {
        for (let j = 0; j < length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr
}


const myArray = [14, 56, 789, 2, 452, 0, 1, 4, 777, 85897, 54254, 21]

console.log("Sıralı Array", bubbleSort(myArray))