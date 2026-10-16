import type { DataFromCocktailApi, Cocktail } from "./type";

export async function getCocktailsByFirstLetter(
  char: string,
): Promise<Cocktail[]> {
  try {
    const response: Response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${char}`,
    );
    const data: DataFromCocktailApi = await response.json();
    if (data.drinks) {
      return data.drinks;
    } else {
      throw "no cocktails have been found!";
    }
  } catch (error: any) {
    return error;
  }
}
