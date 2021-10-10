import React, { FC } from "react";

import { Column } from "~/atoms/Column";
import { PageContent } from "~/atoms/PageContent";
import { H1 } from "~/atoms/typography/H1";

export const IndexPage: FC = () => (
  <PageContent>
    <Column alignCenter>
      <H1>Welcome</H1>
    </Column>
  </PageContent>
);
