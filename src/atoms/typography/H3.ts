import styled from "@emotion/styled";

type Props = {
  noMargin?: boolean;
};

export const H3 = styled.h3<Props>(
  ({ theme }) => ({
    fontSize: theme.fontSizes.h3,
    lineHeight: 1.3,
    marginBottom: theme.scale(2),
    fontWeight: theme.fontWeights.light,
  }),
  ({ noMargin }) =>
    noMargin && {
      marginBottom: 0,
    },
);
