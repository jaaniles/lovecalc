type LoveFN = () => number;

const loveFuncs: LoveFN[] = [];

export const lovecalculator = (): {
  lovePercentage: number;
} => {
  let totalLoveCount = 0;

  for (const loveFunc of loveFuncs) {
    const loveCount = loveFunc();
    totalLoveCount = totalLoveCount + loveCount;
  }

  return {
    lovePercentage: Math.floor(totalLoveCount / loveFuncs.length),
  };
};
