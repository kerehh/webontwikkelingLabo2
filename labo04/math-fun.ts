


function add (x: number, y: number) {
    return x+y;
}

function substract (x:number, y:number) {
    return x-y;
}

function multiply (x:number, y:number) {
    return x*y;
}

function divide (x:number, y:number) {
    return x/y;
}

console.log(`(4+5)*(6-3)/2 = ${divide(multiply(add(4,5), substract(6,3)),2)}`)