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

console.log("palindrome or not : ", checkPalindrome(randomNumber));