import { atom } from "recoil";

export const sidebarCollapsedState = atom<boolean>({
  key: "sidebarState",
  default: false,
});
