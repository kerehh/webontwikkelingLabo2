// david.verhulst@ap.be ==> D. Verhulst
import * as rl from "readline-sync"


do{
    const email:string = rl.question("geef je email aub? ")
    const atPosition:number = email.indexOf("@") //14
    const deelMetNamen:string = email.substring(0,atPosition) // "david.verhulst"
    const voornaam:string = deelMetNamen.substring(0,deelMetNamen.indexOf("."))
    const achternaam:string =deelMetNamen.substring(deelMetNamen.indexOf(".")+1)
    console.log(`${voornaam.charAt(0).toUpperCase()}. ${achternaam.charAt(0).toUpperCase()}${achternaam.substring(1)}`)
}while(rl.keyInYN("wil je nog een ingave? "))


export {}