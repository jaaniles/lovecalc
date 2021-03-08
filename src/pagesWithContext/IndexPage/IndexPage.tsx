import Image from "next/image";
import { useRouter } from "next/router";
import React, { FC, useCallback } from "react";
import { useForm } from "react-hook-form";
import { FormattedMessage, useIntl, defineMessages } from "react-intl";

import { Button } from "~/atoms/Button";
import { Column } from "~/atoms/Column";
import { Icon } from "~/atoms/Icon";
import { PageContent } from "~/atoms/PageContent";
import { TextField } from "~/atoms/TextField";
import { H1 } from "~/atoms/typography/H1";
import { commonMessages } from "~/commonMessages";
import { scale } from "~/design";
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
          <div
            css={{
              maxWidth: scale(40),
              margin: "0 auto",
              marginBottom: scale(14),
            }}
          >
            <Image
              src="/logo-fraktio-transparent.png"
              alt="Fraktio"
              layout="intrinsic"
              width={792}
              height={213}
            />
          </div>
          <H1 css={({ scale }) => ({ marginBottom: scale(6) })}>
            <FormattedMessage {...messages.title} />
            <Icon name="camera" />
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
