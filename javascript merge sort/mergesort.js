
const merge = (left, right) => {
    let result = []
    while (left.length > 0 && right.length > 0) {
        result.push(left[0] < right[0] ? left.shift() : right.shift())
    }
    result = result.concat(left).concat(right)
    return result
}


const divide = (arr) => {
    if (arr.length < 2) return arr
    const mid = Math.floor(arr.length / 2)
    const left = divide(arr.slice(0, mid))
    const right = divide(arr.slice(mid))

    return merge(left, right)
}



const arr = [25, 2, 633, 5, 8, 7, 45, 687, 54, 2, 1, 88, 999, 4, 100, 101, 23]


console.log("Sıralanan Array", divide(arr))