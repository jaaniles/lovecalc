import styled from "@emotion/styled";

export const Paragraph = styled.p(({ theme }) => ({
  fontSize: theme.fontSizes.default,
  fontWeight: theme.fontWeights.light,
  margin: `${theme.scale(3)} 0`,
}));
