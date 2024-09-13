import axios from "axios";
import reposJson from "@config/repos.json";

export const getLocalGithubRepos = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return reposJson.data.viewer;
};

// 使用这个函数来获取 token
const getAccessToken = () => {
  return import.meta.env.VITE_GITHUB_ACCESS_TOKEN;
};

export const getGithubReposByGrahql = async () => {
  const token = getAccessToken();
  if (!token) {
    return reposJson.data.viewer;
  }
  try {
    const query = `
      {
        viewer {
          starredRepositories(first: 100) {
              nodes {
                  name
                  description
                  url
                  homepageUrl
                  forkCount
                  stargazerCount
                  owner {
                      login
                      avatarUrl
                  }
              }
          }
          repositories(first: 100) {
              nodes {
                  name
                  description
                  url
                  homepageUrl
                  isPrivate
                  forkCount
                  stargazerCount
                  owner {
                      login,
                      avatarUrl
                  }
              }
          }
        }
      }
    `;

    const response = await axios({
      url: "https://api.github.com/graphql",
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github.v3+json",
        "Content-Type": "application/json",
      },
      data: JSON.stringify({ query }),
    });

    return response.data.data.viewer;
  } catch (err: unknown) {
    console.error(err);
    return reposJson.data.viewer;
    // throw new Error(err?.toString() as string);
  }
};

export const getGithubRepos = async ({
  userName,
  page = 1,
  perPage = 999,
}: {
  userName: string;
  page?: number;
  perPage?: number;
}) => {
  const token = getAccessToken();
  if (!token) throw new Error("accessToken is required");
  try {
    const response = await axios({
      url: `https://api.github.com/users/${userName}/repos?per_page=${perPage}&page=${page}`,
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github.v3+json",
      },
    });
    console.debug("response", response);
    const repositories = await response;
    return repositories;
  } catch (err: unknown) {
    console.error(err);
    throw new Error(err?.toString() as string);
  }
};
