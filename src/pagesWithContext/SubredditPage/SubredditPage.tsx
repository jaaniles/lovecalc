import React from "react";
import { defineMessages, FormattedMessage } from "react-intl";

import { useSubredditQuery } from "./subredditQueries";

import { Card } from "~/atoms/Card";
import { Loading } from "~/atoms/Loading";
import { PageContent } from "~/atoms/PageContent";
import { Row } from "~/atoms/Row";
import { H1 } from "~/atoms/typography/H1";
import { H3 } from "~/atoms/typography/H3";
import { useParams } from "~/paths";

const messages = defineMessages({
  subredditPosts: {
    id: "pages.r.title",
    defaultMessage: "Top posts from reddit",
  },
});

type PageParams = {
  subreddit: string;
};

export const SubredditPage = () => {
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
      {!isLoading &&
        data?.data.children.map(({ data }) => (
          <Card key={data.id}>
            <H3 noMargin>{data.title}</H3>
          </Card>
        ))}
    </PageContent>
  );
};
