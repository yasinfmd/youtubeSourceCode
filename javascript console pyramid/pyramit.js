const createPyramid = (n) => {

    for (let index = 1; index <= n; index++) {
        let string = " ".repeat(n - index)

        let star = "*".repeat(index * 2 - 1)

        console.log(string + star + string)

    }
}


createPyramid(10)