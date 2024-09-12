import Mock from "mockjs";

export const createResult = (value: number) => {
  return Mock.mock({
    [`categories|${value}`]: [
      {
        id: "@id",
        name: "@cword(4,10)",
        "projects|100-200": [
          {
            id: "@id",
            name: "@cname",
            description: "@sentence",
            github: "https://github.com/nuxt/eslint-module",
            email: "@email",
            link: "https://nuxt.com",
          },
        ],
      },
    ],
  }).categories;
};
