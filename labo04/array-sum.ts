const nrs: number[] = [1, 2, 3, 4, 5]

console.clear();
function sum (numbers: number[]){
    return numbers.reduce((acc, n) => acc + n, 0);
    
}

console.log(sum(nrs))