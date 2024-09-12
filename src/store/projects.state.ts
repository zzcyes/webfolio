import { atom } from "recoil";

export const currCategoryIdState = atom<string>({
  key: "currCategoryIdState",
  default: "",
});

export const projectsLoadingState = atom<boolean>({
  key: "projectsLoadingState",
  default: false,
});

export const projectsErrorState = atom<string | null>({
  key: "projectsErrorState",
  default: null,
});
