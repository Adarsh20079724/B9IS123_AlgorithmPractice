const randomNumber = parseInt(prompt("Enter any Natural Number: ", "1234"));

//const staticNumber = 12321

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

const largestProductPalindrome = (length) => {
    let num1 = 0, num2 = 0, product = 0;
    
    for (let i = largestNumber(length); i >= 1 ; i--){
        for( let j = largestNumber(length); j >= 1 ; j--) {
            
        }
    }
    
    return product
}

console.log("palindrome or not : ", checkPalindrome(randomNumber));