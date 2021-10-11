type LoveFN = () => number;

const loveFuncs: LoveFN[] = [];

const clamp = function(min: number, max: number, value: number): number {
  return Math.min(Math.max(value, min), max);
}

export const lovecalculator = (): {
  lovePercentage: number;
} => {
  let totalLoveCount = 0;

  for (const loveFunc of loveFuncs) {
    const loveCount = loveFunc();
    totalLoveCount = totalLoveCount + clamp(0, 100, loveCount);
  }

  return {
    lovePercentage: Math.floor(totalLoveCount / loveFuncs.length),
  };
};
