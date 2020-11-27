import styled from "@emotion/styled";

export const PageContent = styled.div(({ theme }) => ({
  width: "100%",
  margin: `${theme.scale(4)} auto 0`,
  padding: theme.scale(4),
  maxWidth: theme.scale(200),
}));
