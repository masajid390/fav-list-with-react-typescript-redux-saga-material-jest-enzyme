export const getRandomFloat = (
  min: number,
  max: number,
  decimals: number = 2
): number => parseFloat((Math.random() * (max - min) + min).toFixed(decimals));

export const getRandomInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min);
