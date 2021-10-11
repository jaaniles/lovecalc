import { calculateLoveWithFraktio } from "./levenshtein";
import { loveLetterMatch } from "./loveLetterMatch";
import { loveModulo } from "./loveModulo";
import { loveVowel } from "./loveVowel";
import { peppesLoveFn } from "./peppesLoveFn";

export type LoveFN = (params: { name: string }) => number;

const loveFuncs: LoveFN[] = [
  loveModulo,
  calculateLoveWithFraktio,
  loveVowel,
  peppesLoveFn,
  loveLetterMatch,
];

const clamp = (params: { min: number; max: number; value: number }): number =>
  Math.min(Math.max(params.value, params.min), params.max);

export const lovecalculator = (params: {
  name: string;
  funcs?: LoveFN[];
}): {
  lovePercentage: number;
} => {
  let totalLoveCount = 0;
  const loveFunctions = params.funcs || loveFuncs;

  for (const loveFunction of loveFunctions) {
    const loveCount = loveFunction({ name: params.name });
    const loveValue = clamp({
      min: 0,
      max: 100,
      value: loveCount,
    });

    totalLoveCount = totalLoveCount + loveValue;
  }

  return {
    lovePercentage: Math.floor(
      (totalLoveCount / (loveFunctions.length * 100)) * 100,
    ),
  };
};
