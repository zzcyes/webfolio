import Mock from "mockjs";
import * as reposMockConfig from "./repos.mock";

const setupMocksBatch = (configs) => {
  Object.entries(configs).forEach(([mockName, mockOptions]) => {
    const config =
      typeof mockOptions === "function" ? mockOptions() : mockOptions;
    setupMocks(config);
  });
};

const setupMocks = (config) => {
  return Mock.mock(config.url, config.method, config.response);
};

const registerMockConfig = () => {
  try {
    if (typeof Mock.setup === "function") {
      Mock.setup({
        timeout: "200-600", // 设置响应时间随机范围
      });
    } else {
      console.warn(
        "Mock.setup is not a function. Make sure mockjs is correctly imported."
      );
    }

    Mock.mock(
      "https://api.github.com/graphql",
      "post",
      reposMockConfig.getGithubReposByGrahql().response
    );

    // 调用 setupMocks 函数来注册所有的 mock
    setupMocksBatch(reposMockConfig);
  } catch (err) {
    console.error("registerConfig error:", err);
  }
};

export default registerMockConfig;
