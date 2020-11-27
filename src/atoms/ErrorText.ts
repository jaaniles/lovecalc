import styled from "@emotion/styled";

export const ErrorText = styled.small(({ theme }) => ({
  fontSize: theme.fontSizes.small,
  color: theme.colors.error700,
  height: theme.scale(4),
}));
