import { numberToCurrency } from "./numberToCurrency";

test("should return correct currency format", () => {
  // depends on node ^13
  expect(numberToCurrency(1234)).toMatch(/1.234,00/);
  expect(numberToCurrency(1234.0)).toMatch(/1.234,00/);
  expect(numberToCurrency(1234.99)).toMatch(/1.234,99/);
});
