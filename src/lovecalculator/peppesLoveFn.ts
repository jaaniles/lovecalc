// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import crypto from "crypto-js";
import { create, all, MathJsStatic } from "mathjs";

import { LoveFN } from "./lovecalculator";

const math = create(all) as MathJsStatic;

math.config({
  number: "BigNumber",
  precision: 64,
});

const LOVE_CONSTANT = 2;

const ord = (str: string) => str.charCodeAt(0);

const hexdec = (hex: string) => {
  const arr = Array.from(hex);
  const arr2 = arr.map((a, i) => {
    const h = parseInt(a, 16);
    const p = math.pow(math.bignumber(16), math.bignumber(hex.length - i - 1));

    return math.multiply(h, p);
  });

  return math.sum(arr2);
};

export const peppesLoveFn: LoveFN = ({ name }) => {
  const combined = `${name.toLocaleLowerCase()}Fraktio`;
  const arraynized = Array.from(combined);
  const ordized = arraynized.map(ord);
  const sum = (ordized.reduce((a, o) => a + o) + LOVE_CONSTANT).toString();
  const md5ized = crypto.MD5(sum).toString();

  const hexdecced = hexdec(md5ized);

  const sub2 = math.subtract(math.bignumber(math.pow(2, 128)), 1);

  const divved = math.divide(hexdecced, sub2);

  const percentage = math.round(math.multiply(divved, 100));

  return parseInt(percentage.toString(), 10);
};
