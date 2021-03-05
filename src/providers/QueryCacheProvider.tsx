import React, { FC } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      refetchInterval: 900000, // 15 min
    },
  },
});

export const QueryCacheProvider: FC = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);
