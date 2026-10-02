import * as readline from 'readline-sync';
let som = 0;
let loop = 0;
let nummer: number[] = [];

let aantal : number = Number(readline.question("hoeveel nummers wil je toevoegen? "));
do{
    let nieuw : number = Number(readline.question(`geef nummer ${loop+1} in: `))
    nummer.push(nieuw);
loop++
}while(loop < aantal)

for (let index = 0; index < nummer.length; index++) {
    som += Number(nummer[index]);
    
}
console.log(`De som van de getallen is: ${som}`)

export {}