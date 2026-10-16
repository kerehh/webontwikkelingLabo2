import { getCocktailsByFirstLetter } from "./queries.ts";
import type { Cocktail } from "./type";

async function main() {
  try {
    const cocktails: Cocktail[] = await getCocktailsByFirstLetter("a");
    console.log(cocktails.map((drink) => ` - ${drink.strDrink}`).join("\n"));
  } catch (error) {
    console.log(error);
  }
}

main();

export {};
