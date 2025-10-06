console.log("---------Find the Smallest Multiple----------")

const range = 10;

const checkExistingElement = (element, arr) => {
    let checker = [...arr];
    console.log("checker: ", checker)
    let prod = 1;
    let pushElement = 0;
    for(let i = 0; i < checker.length; i++ ) {
        prod = prod * checker[i]
    }
    console.log("prod: ", prod)
    pushElement = prod % element;
     
    return console.log(pushElement)
}

checkExistingElement(5 , [ 2, 3, 2]);


console.log(math.lcm([2, 3, 4, 5]))

// const findSmallestMultiple = (limit) => {
//     let multiple = 1; 
//     let factorArr = []
//     for(let i = 2; i <= limit; i++)
//     {
//         multiple *= i
//         // if(factorArr.includes(i))
//         factorArr.push(i) 
//         console.log(factorArr)
//     }
    
    
    
//     return console.log(multiple)
// }

// findSmallestMultiple(range)