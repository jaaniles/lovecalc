import { useRouter } from "next/router";

export type HrefOnly = {
  href: string;
};

export type HrefAndAs = {
  href: string;
  as: string;
};

export const useParams = <T>(): T => {
  const router = useRouter();

  return (router.query as unknown) as T;
};

export const getSubredditPage = (opts: { subreddit: string }): HrefAndAs => ({
  as: `/r/${opts.subreddit}`,
  href: "/r/[subReddit]",
});

export const getIndexPath = (): HrefOnly => ({
  href: "/",
});

export const isServerSide = () => typeof window === "undefined";
