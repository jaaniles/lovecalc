import styled, { CSSObject } from "@emotion/styled";

export type CssReturnType = undefined | false | CSSObject;

interface Props {
  noMargin?: boolean;
  disabled?: boolean;
}

export const Button = styled.button<Props>(({ disabled, noMargin, theme }) => ({
  border: "none",
  cursor: "pointer",
  color: theme.colors.text100,
  userSelect: "none",
  fontSize: theme.fontSizes.default,
  padding: `${theme.scale(3)} ${theme.scale(5)}`,
  backgroundImage: "none",
  backgroundColor: theme.colors.primary200,
  marginBottom: theme.scale(3),

  ...(disabled
    ? {
        cursor: "not-allowed",
        background: theme.colors.background50,
        color: theme.colors.background900,
      }
    : {
        ":hover": {
          backgroundColor: theme.colors.primary300,
        },
      }),

  ...(noMargin && {
    marginBottom: 0,
  }),
}));
