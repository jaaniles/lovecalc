import styled from "@emotion/styled";
import Link from "next/link";
import { FC } from "react";

import { Button } from "~/atoms/Button";
import { LinkProps } from "~/atoms/typography/Link";

type Props = LinkProps & {
  disabled?: boolean;
  noMargin?: boolean;
  className?: string;
};

const StyledLink = styled(Button)({ textDecoration: "none", display: "block" });

export const LinkButton: FC<Props> = ({
  children,
  href,
  as,
  disabled,
  noMargin,
  shallow,
  className,
}) => {
  if (disabled) {
    return (
      <Button className={className} noMargin={noMargin} disabled>
        {children}
      </Button>
    );
  }

  return (
    <Link href={href} as={as} shallow={shallow} passHref>
      <StyledLink as="a" className={className} noMargin={noMargin}>
        {children}
      </StyledLink>
    </Link>
  );
};
