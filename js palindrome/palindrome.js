const value = "4845"

const isPalindrome = (val) => {
    const reverse = val.split("").reverse().join("")
    return reverse === val
}

console.log("palindrome", isPalindrome(value))