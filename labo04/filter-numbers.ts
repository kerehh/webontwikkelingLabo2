import * as readline from 'readline-sync';
const numbers: number[] = [-4,-4,1,2,3,4,5];


function filterPositive (getallen: number[]) {
    const resultaat:number[] =[]
    for (let index = 0; index < numbers.length; index++) {
        if (numbers[index] > 0) {
            resultaat.push(numbers[index])
        }
        
    }
    return resultaat;
}


console.log(filterPositive(numbers)); // 1,2,3,4,5

function filterNegative ( getallen:number[]) {
    const result:number[] = []
    for (let index = 0; index < numbers.length; index++) {
        const element = numbers[index];
        if(numbers[index] < 0) {
            result.push(numbers[index])
        }
    }
    return result;
}

console.log(filterNegative(numbers));