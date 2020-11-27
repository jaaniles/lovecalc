import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { FC } from "react";

import { colors } from "~/design";

const dotFlashingColored = keyframes({
  "0%": {
    backgroundColor: colors.primary600,
  },
  "50%, 100%": {
    backgroundColor: colors.background900,
  },
});

const dotFlashing = keyframes({
  "0%": {
    backgroundColor: colors.background900,
  },
  "50%, 100%": {
    backgroundColor: colors.text900,
  },
});

type FlashingProps = {
  colored: boolean;
};

const Flashing = styled.div<FlashingProps>(({ colored, theme }) => ({
  position: "relative",
  marginRight: 15,
  marginLeft: 15,
  width: 14,
  height: 14,
  borderRadius: "100%",
  backgroundColor: colored
    ? theme.colors.primary600
    : theme.colors.background900,
  color: colored ? theme.colors.primary600 : theme.colors.background900,
  animation: `${
    colored ? dotFlashingColored : dotFlashing
  } 1s infinite linear alternate`,
  animationDelay: "0.5s",

  "::before, ::after": {
    content: "''",
    display: "inline-block",
    position: "absolute",
    top: 0,
    width: 14,
    height: 14,
    borderRadius: "100%",
    backgroundColor: colored
      ? theme.colors.primary600
      : theme.colors.background900,
    color: colored ? theme.colors.primary600 : theme.colors.background900,
    animation: `${
      colored ? dotFlashingColored : dotFlashing
    } 1s infinite alternate`,
  },

  "::before": {
    left: -22,
    animationDelay: "0s",
  },

  "::after": {
    left: 22,
    animationDelay: "1s",
  },
}));

type Props = {
  className?: string;
  nonColored?: boolean;
};

export const Loading: FC<Props> = ({ className, nonColored }) => (
  <Flashing colored={!nonColored} className={className} />
);
