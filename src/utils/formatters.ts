/**
 * Formátuje číslo konzistentně pro server i klienta
 * Používá formát s čárkami jako oddělovače tisíců
 */
export const formatNumber = (num: number): string => {
  return num.toLocaleString('en-US');
};
