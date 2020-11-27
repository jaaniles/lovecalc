import { FC } from "react";
import { QueryCache, ReactQueryCacheProvider } from "react-query";

const queryCache = new QueryCache();

export const QueryCacheProvider: FC = ({ children }) => (
  <ReactQueryCacheProvider queryCache={queryCache}>
    {children}
  </ReactQueryCacheProvider>
);
