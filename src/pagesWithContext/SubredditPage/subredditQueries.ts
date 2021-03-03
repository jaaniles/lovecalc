import { useQuery } from "react-query";

import { api } from "~/api";

export enum SubredditInMemoryKey {
  SUBREDDIT = "subreddit",
}

type RedditPost = {
  data: {
    id: number;
    title: string;
  };
};

type RedditFrontPage = {
  data: {
    children: RedditPost[];
  };
};

export const getSubreddit = (opts: { subreddit: string }) => async () => {
  const { data } = await api.get<RedditFrontPage>(`/r/${opts.subreddit}/.json`);

  return data;
};

export function useSubredditQuery(params: { subreddit: string }) {
  return useQuery(
    [SubredditInMemoryKey.SUBREDDIT, params.subreddit],
    getSubreddit({ subreddit: params.subreddit }),
  );
}
