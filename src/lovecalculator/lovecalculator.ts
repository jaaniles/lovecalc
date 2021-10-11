import { loveModulo } from "~/lovecalculator/loveModulo";

export type LoveFN = (params: { name: string }) => number;

const loveFuncs: LoveFN[] = [loveModulo];

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
    lovePercentage: Math.floor(totalLoveCount / loveFuncs.length),
  };
};
