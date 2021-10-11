import { LoveFN } from "./lovecalculator";

function isVowel(s: string): boolean {
  return /^[aeiou]$/i.test(s);
}

export const loveVowel: LoveFN = ({ name }) => {
  let vowelCount = 0;

  name.split("").forEach((value) => {
    if (isVowel(value)) {
      vowelCount += 1;
    }
  });

  const value = Math.floor((vowelCount / name.length) * 100);

  return value < 50 ? value + 30 : value;
};
