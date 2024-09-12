import { useRecoilState } from "recoil";
import { sidebarCollapsedState } from "@/store";

const useCollapsed = (): [boolean, () => void] => {
  const [collapsed, setCollapsed] = useRecoilState(sidebarCollapsedState);

  const toggle = () => {
    setCollapsed((prev) => !prev);
  };

  return [collapsed, toggle];
};

export default useCollapsed;
