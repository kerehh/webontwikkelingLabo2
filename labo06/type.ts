// www.thecocktaildb.com/api/json/v1/1/search.php?f=a

export interface DataFromCocktailApi{
    drinks: Cocktail[] | null;
}

export interface Cocktail{
    idDrink: string,
    strDrink: string,
    strFrinkThumb: string,
    strInstructions: string
}
