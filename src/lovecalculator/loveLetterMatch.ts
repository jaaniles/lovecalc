import { LoveFN } from "./lovecalculator";

const letters = "fraktio".split("");

export const loveLetterMatch: LoveFN = ({ name }) => {
  let matching = 0;

  name.split("").forEach((value) => {
    if (letters.includes(value)) {
      matching += 1;
    }
  });

  const love = Math.floor((matching / name.length / 0.6) * 100);

  return love > 100 ? 100 : love;
};
