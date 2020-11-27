import styled from "@emotion/styled";

export const H1 = styled.h1(({ theme }) => ({
  fontSize: theme.fontSizes.h1,
  lineHeight: 1.2,
  fontWeight: theme.fontWeights.light,
  margin: `${theme.scale(2)} 0`,
}));
