/**
 * Convert a number into currency format
 *
 * @param {Number} number Number to be converted
 * @return {String} The number converted
 */
export const numberToCurrency = (number: number): string => {
  return new Intl.NumberFormat("pt-Br", {
    style: "currency",
    currency: "BRL",
  }).format(number);
};
