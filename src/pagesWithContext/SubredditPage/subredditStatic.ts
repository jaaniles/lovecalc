import { GetStaticPaths, GetStaticProps } from "next";
import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";

import { getSubreddit, SubredditInMemoryKey } from "./subredditQueries";

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const subreddit = (params?.subreddit as string) ?? "";
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    [SubredditInMemoryKey.SUBREDDIT, subreddit],
    getSubreddit({ subreddit }),
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [],
  fallback: "blocking", // Render all as static
});
