import styled from "@emotion/styled";

export const H2 = styled.h2(({ theme }) => ({
  fontSize: theme.fontSizes.h2,
  lineHeight: 1.3,
  margin: `${theme.scale(1)} 0`,
  fontWeight: theme.fontWeights.light,
}));
