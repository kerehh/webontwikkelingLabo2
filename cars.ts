const car = [{
    brand : "bmw",
    year : 2000,
    color : "black"
},
{
    brand : "mercedes",
    year : 2010,
    color : "black"
}]

const xxx =car.filter(el=>el.year<2000).map(el=>
    <li>
    <h2>${el.brand}

    </li>
)