//const numLength = parseInt(prompt("Enter length pf Digit = "))
const digit = 3

const checkPalindrome = (num) => {
    let isPalindrome = false
    
    if(num >= 0) {
    let text = num.toString()
    text != text.split("").reverse().join("") ? isPalindrome = false : isPalindrome = true
    }
    else{
        console.log("Please enter positive integer")
    }
    
    return isPalindrome
}

const largestNumber = (length) => {
    let largestNum = 0
    return largestNum = (10 ** length) - 1;
}

const smallestNumber = (length) => {
    let smallestNum = 0
    return smallestNum = (10 ** (length - 1))
}

const largestProductPalindrome = (length) => {
    let num1 = 0, num2 = 0, product = 0;
    
    for (let i = largestNumber(length); i >= 1 ; i--){
        for( let j = largestNumber(length); j >= 1 ; j--) {
          product = i * j
          if ( checkPalindrome(product) ){
              console.log("Palindrome value", product)
              num1 = i
              num2 = j
              console.log("num1: " + num1 + "num2: " + num2)
              break;
          }
        }
    }
    
}

console.log("Largest products from palindrome ", largestProductPalindrome(digit))