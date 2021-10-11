export const requireEnv = (env: string | undefined): string => {
  if (!env) {
    throw new Error("Environment variable is missing!");
  }

  return env;
};

export const config = {
  apiEndpoint: "",
};
