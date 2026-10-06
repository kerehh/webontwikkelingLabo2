import type { ListEndpointsOptions } from "node:quic";
import { receiveMessageOnPort } from "node:worker_threads";

interface recept{
    naam:string,
    beschrijven:string,
    personen: number,
    ingredienten: ingrediente[]
}

interface ingrediente{
    naam:string,
    hoeveelheid:string,
    prijs:number
}

const lasagne:recept = {
    naam: "Lasagne",
    beschrijven: "kaas",
    personen: 2,
    ingredienten: [{
        naam: "kaas",
        hoeveelheid: "1pak",
        prijs: 4
    },{
        naam: "tomatensaus",
        hoeveelheid: "1pot",
        prijs: 11
    },{
        naam: "tomatensaus",
        hoeveelheid: "1pak",
        prijs: 8
    }]
}
const regels = lasagne.ingredienten.map((ingrediente))
const totaleprijs = lasagne.ingredienten.reduce((acc, el)=>acc+el,0)

console.log(`recept: ${lasagne.naam}`)
console.log(`Beschrijving: ${lasagne.beschrijven}`)
console.log(`personen: ${lasagne.personen}`)
console.log(`ingredienten: \n ${lasagne.ingredienten}`)
console.log(`totale kostprijs: ${lasagne} euro`)