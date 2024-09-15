import { useRecoilState } from "recoil";
import { sidebarCollapsedState } from "@/store";
const useCollapsed = (): [boolean, (newCollapsed?: boolean) => void] => {
  const [collapsed, setCollapsed] = useRecoilState(sidebarCollapsedState);

  const toggle = (newCollapsed?: boolean) => {
    setCollapsed((prev) => newCollapsed ?? !prev);
  };

  return [collapsed, toggle];
};

export default useCollapsed;
