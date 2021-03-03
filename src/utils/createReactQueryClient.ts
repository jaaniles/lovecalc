import { NextPageContext } from "next";
import { QueryCache, QueryClient } from "react-query";

export const createReactQueryClient = (
  initialState: QueryCache,
  ctx: NextPageContext,
  // The `ctx` (NextPageContext) will only be present on the server.
  // use it to extract auth headers (ctx.req) or similar.
): QueryClient =>
  new QueryClient({
    queryCache: initialState,
  });
