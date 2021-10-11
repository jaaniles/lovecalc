import { LoveFN } from "./lovecalculator";

export const loveModulo: LoveFN = ({ name }) => {
  let count = 0;

  name.split("").forEach((value) => {
    count = count + value.charCodeAt(0);
  });

  return count % 100;
};
