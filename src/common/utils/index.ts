export const normalizeCssSize = (size: string | number) => {
  return typeof size === "number" ? `${size}px` : size;
};

export const normalizeCssSizeNumber = (size: string | number) => {
  return typeof size === "string" ? Number(size.replace("px", "")) : size;
};

export const createForkRepoUrl = (owner: string, repo: string) => {
  return `https://github.com/${owner}/${repo}/network/members`;
};

export const createStartRepoUrl = (owner: string, repo: string) => {
  return `https://github.com/${owner}/${repo}/stargazers`;
};

export const createCloneUrl = (owner: string, repo: string) => {
  return `https://github.com/${owner}/${repo}.git`;
};
