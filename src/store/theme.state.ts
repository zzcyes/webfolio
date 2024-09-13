import { atom } from "recoil";
import {
  getLocalStorageAndSetDefaultTheme,
  updateTheme,
} from "@/common/utils/theme";

export const themeModeState = atom<"light" | "dark">({
  key: "themeState",
  default: getLocalStorageAndSetDefaultTheme(),
  effects: [({ onSet }) => onSet(updateTheme)],
});
