//Find the Largest Prime Factors of a number.

const randomNumber = parseInt(prompt("Enter any natural number: ", "1234"));

const checkPrime = (num) => {
    let isPrime = true
    
    if (num === 1 ) {
        return console.log("1 is neither composite or prime")
    }
    else if ( num > 1 ) {
    
    for(let i = 2; i <= num/2; i++) {
        if(num%i == 0  ) { 
            isPrime = false
        }
    }
    
    if (isPrime) {
        return true;
    } else {
        return false; 
    }
}
}


console.log("Is prime? : ",checkPrime(randomNumber))