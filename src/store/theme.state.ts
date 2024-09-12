import { atom } from "recoil";

export const themeModeState = atom<"light" | "dark">({
  key: "themeState",
  default: "light",
});
