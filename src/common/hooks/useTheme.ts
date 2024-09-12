import { useRecoilState } from "recoil";
import { themeModeState } from "@/store";

const useToast = (): ["light" | "dark", () => void] => {
  const [themeMode, setThemeMode] = useRecoilState(themeModeState);

  const toggle = () => {
    setThemeMode(themeMode === "dark" ? "light" : "dark");
  };

  return [themeMode, toggle];
};

export default useToast;
