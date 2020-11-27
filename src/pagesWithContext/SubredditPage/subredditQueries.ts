import { api } from "~/api";

export enum SubredditKey {
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
  // In reality this would be `/event/:eventId`
  const { data } = await api.get<RedditFrontPage>(`/r/${opts.subreddit}/.json`);

  return data;
};
