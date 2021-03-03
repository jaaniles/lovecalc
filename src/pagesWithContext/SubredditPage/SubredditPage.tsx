import React from "react";
import { defineMessages, FormattedMessage, useIntl } from "react-intl";

import { useSubredditQuery } from "./subredditQueries";

import { Card } from "~/atoms/Card";
import { Loading } from "~/atoms/Loading";
import { PageContent } from "~/atoms/PageContent";
import { Row } from "~/atoms/Row";
import { H1 } from "~/atoms/typography/H1";
import { H3 } from "~/atoms/typography/H3";
import { HeaderTags } from "~/molecules/HeaderTags";
import { useParams } from "~/paths";

const messages = defineMessages({
  subredditPosts: {
    id: "pages.r.title",
    defaultMessage: "Top posts from reddit",
  },
  headTitle: {
    id: "pages.r.head.title",
    defaultMessage: "r/{subreddit}",
  },
  headDescription: {
    id: "pages.r.head.description",
    defaultMessage: "View posts in r/{subreddit}",
  },
});

type PageParams = {
  subreddit: string;
};

export const SubredditPage = (): JSX.Element => {
  const intl = useIntl();
  const { subreddit } = useParams<PageParams>();

  const { isLoading, data } = useSubredditQuery({ subreddit });

  return (
    <PageContent>
      <H1 css={({ scale }) => ({ marginBottom: scale(10) })}>
        <FormattedMessage {...messages.subredditPosts} />
      </H1>
      {isLoading && (
        <Row center>
          <Loading />
        </Row>
      )}
      {!isLoading && data && (
        <>
          <HeaderTags
            title={intl.formatMessage(messages.headTitle, { subreddit })}
            description={intl.formatMessage(messages.headDescription, {
              subreddit,
            })}
          />
          {data.data.children.map(({ data }) => (
            <Card key={data.id}>
              <H3 noMargin>{data.title}</H3>
            </Card>
          ))}
        </>
      )}
    </PageContent>
  );
};
