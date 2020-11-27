import { FC } from "react";
import { defineMessages, FormattedMessage } from "react-intl";

import { Column } from "~/atoms/Column";

const messages = defineMessages({
  somethingWentWrong: {
    id: "pages.genericError.title",
    defaultMessage: "Something went wrong",
  },
});

type Props = {
  error?: Error;
};

export const GenericErrorPage: FC<Props> = ({ error }) => (
  <Column center alignCenter>
    <FormattedMessage {...messages.somethingWentWrong} />
    {error && <p>{error.message}</p>}
  </Column>
);
