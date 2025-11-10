declare const process: {
  env: Record<string, string | boolean | undefined> & {
    IS_DEVELOPMENT?: boolean;
  };
};
