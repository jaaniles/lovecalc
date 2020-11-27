import styled from "@emotion/styled";

export const Card = styled.div(({ theme }) => ({
  marginBottom: theme.scale(5),
  padding: theme.scale(4),
  borderRadius: theme.scale(2),
  backgroundColor: theme.colors.background50,
}));
