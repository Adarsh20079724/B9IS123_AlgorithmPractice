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

const largestPrimeFactor = (num) => {
    let largestFactor = 0
     for(let i = 2; i <= num; i++) {
        if( num % i == 0 && checkPrime(i) ) { 
            largestFactor = i;
            num = num/i;
        }
    }
    return largestFactor;
}


console.log("Largest Prime Factor " ,largestPrimeFactor(randomNumber))