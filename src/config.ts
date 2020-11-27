const requireEnv = (env: string | undefined): string => {
  if (!env) {
    throw new Error("Environment variable is missing!");
  }

  return env;
};

export const config = {
  apiEndpoint: requireEnv(process.env.NEXT_PUBLIC_API_ENDPOINT),
};
