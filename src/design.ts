import { css } from "@emotion/react";
import facepaint from "facepaint";

const scaleBase = 4;

export const scale = (multiplier: number): string =>
  `${scaleBase * multiplier}px`;

export const breakpoints = [480, 800, 960, 1200];

export const mq = facepaint(
  breakpoints.map((bp) => `@media(min-width: ${bp}px)`),
);

export const fontWeights = {
  light: 300,
  regular: 400,
  medium: 500,
  strong: 700,
};

export const colors = {
  primary100: "#bbdefb",
  primary200: "#90caf9",
  primary300: "#64b5f6",
  primary400: "#42a5f5",
  primary500: "#2196f3",
  primary600: "#1e88e5",
  primary700: "#1976d2",
  primary800: "#1565c0",
  primary900: "#0d47a1",
  error100: "#ffcdd2",
  error200: "#ef9a9a",
  error300: "#e57373",
  error400: "#ef5350",
  error500: "#f44336",
  error600: "#e53935",
  error700: "#d32f2f",
  error800: "#c62828",
  error900: "#b71c1c",
  text100: "#000000",
  text200: "#080808",
  text300: "#111111",
  text400: "#191919",
  text500: "#222222",
  text600: "#2b2b2b",
  text700: "#333333",
  text800: "#3b3b3b",
  text900: "#424242",
  background900: "#acacac",
  background800: "#b5b5b5",
  background700: "#bfbfbf",
  background600: "#c8c8c8",
  background500: "#cacaca",
  background400: "#dadada",
  background300: "#e3e3e3",
  background200: "#ededed",
  background100: "#f6f6f6",
  background50: "#ffffff",
};

export const globalStyles = css({
  html: {
    fontFamily: "GTAmerica, sans-serif",
    color: colors.text200,
    height: "100%",
    backgroundColor: colors.background300,
    WebkitFontSmoothing: "antialiased",
  },
  button: {
    fontFamily: "inherit",
  },
  input: {
    fontFamily: "inherit",
  },
  textarea: {
    fontFamily: "inherit",
    overflow: "auto",
  },
  strong: {
    fontWeight: fontWeights.medium,
  },
  "*": {
    boxSizing: "border-box",
  },
});

export const fontSizes = {
  h1: scale(12.5),
  h2: scale(8),
  h3: scale(6.25),
  h4: scale(5),
  large: scale(4.25),
  default: scale(3.75),
  small: scale(3.5),
  tiny: scale(3),
};

export const themeBase = {
  colors,
  fontSizes,
  fontWeights,
  mq,
  scale,
};

export type Theme = typeof themeBase;

export const lightTheme: Theme = {
  colors,
  fontSizes,
  fontWeights,
  mq,
  scale,
};

export const darkTheme: Theme = {
  colors,
  fontSizes,
  fontWeights,
  mq,
  scale,
};
