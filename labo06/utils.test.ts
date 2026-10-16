import { test, expect, describe } from "vitest";
import { product, sum } from "./utils";
import { getCocktailsByFirstLetter } from "./queries";

describe("testing math functions", () => {
  test("2 + 5 moet 7 geven", () => {
    expect(sum(2, 5)).toBe(7);
  });

  test("2*5 moet 10 geven", () => {
    expect(product(2, 5)).toBe(10);
  });
});

test("testen dat er mer dan 2 cocktails zijn met letter b", async () => {
  const cocktails = await getCocktailsByFirstLetter("b");
  expect(cocktails.length).toBeGreaterThan(2);
});
