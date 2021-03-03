import { useRouter } from "next/router";
import React, { FC, useCallback } from "react";
import { useForm } from "react-hook-form";
import { FormattedMessage, useIntl, defineMessages } from "react-intl";

import { Button } from "~/atoms/Button";
import { Column } from "~/atoms/Column";
import { PageContent } from "~/atoms/PageContent";
import { TextField } from "~/atoms/TextField";
import { H1 } from "~/atoms/typography/H1";
import { commonMessages } from "~/commonMessages";
import { HeaderTags } from "~/molecules/HeaderTags";
import { LanguageSelector } from "~/molecules/LanguageSelector";
import { getSubredditPage } from "~/paths";

const messages = defineMessages({
  title: {
    id: "pages.index.title",
    defaultMessage: "Go to subreddit",
  },
  subreddit: {
    id: "pages.index.subreddit",
    defaultMessage: "Subreddit",
  },
  placeholder: {
    id: "pages.index.input.placeholder",
    defaultMessage: "all",
  },
  subredditRequired: {
    id: "pages.index.subredditRequired",
    defaultMessage: "Subreddit is required",
  },
});

export const IndexPage: FC = () => {
  const intl = useIntl();
  const router = useRouter();

  const { handleSubmit, register, errors, getValues } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    shouldFocusError: true,
    defaultValues: {
      subreddit: "all",
    },
  });

  const onSubmit = useCallback(() => {
    const { subreddit } = getValues();

    const { href, as } = getSubredditPage({ subreddit });
    router.push(href, as);
  }, [getValues, router]);

  return (
    <PageContent>
      <Column alignCenter>
        <form
          css={({ scale }) => ({
            padding: scale(6),
            width: "100%",
            maxWidth: scale(120),
          })}
          onSubmit={handleSubmit(onSubmit)}
        >
          <H1 css={({ scale }) => ({ marginBottom: scale(6) })}>
            <FormattedMessage {...messages.title} />
          </H1>

          <TextField
            id="subreddit"
            required
            label={intl.formatMessage(messages.subreddit)}
            name="subreddit"
            ref={register({
              required: true,
              maxLength: 64,
            })}
            placeholder={intl.formatMessage(messages.placeholder)}
            error={
              errors.subreddit && intl.formatMessage(messages.subredditRequired)
            }
          />

          <Button css={{ width: "100%" }} type="submit">
            <FormattedMessage {...commonMessages.submit} />
          </Button>
        </form>
        <LanguageSelector />
      </Column>
    </PageContent>
  );
};
