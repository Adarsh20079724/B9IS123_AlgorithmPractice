console.log("---------Find the Smallest Multiple----------")

const range = 10;

const findSmallestMultiple = (limit) => {
    let multiple = 1; 
    let factorArr = []
    for(let i = 2; i <= limit; i++)
    {
        multiple *= i
        factorArr.push(i) 
        console.log(factorArr)
    }
    
    
    
    return console.log(multiple)
}

findSmallestMultiple(range)