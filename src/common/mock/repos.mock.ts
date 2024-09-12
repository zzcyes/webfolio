import reposJson from "@config/repos.json";

export const getGithubReposByGrahql = () => {
  return {
    url: "https://api.github.com/graphql",
    method: "POST",
    response: reposJson ?? {
      data: {
        viewer: {
          repositories: {
            nodes: [],
          },
        },
      },
    },
  };
};
