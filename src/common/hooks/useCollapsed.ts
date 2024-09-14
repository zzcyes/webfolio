import { useRecoilState } from "recoil";
import { sidebarCollapsedState } from "@/store";
import { useMediaQuery } from "react-responsive";
import { useConfig } from "@/common/hooks";
import { normalizeCssSizeNumber } from "../utils";
import { useEffect } from "react";
const useCollapsed = (): [boolean, (newCollapsed?: boolean) => void] => {
  const [collapsed, setCollapsed] = useRecoilState(sidebarCollapsedState);
  const [{ mediaQuery }] = useConfig();

  const isMobile = useMediaQuery({
    query: `(max-width: ${normalizeCssSizeNumber(mediaQuery.mobile)}px)`,
  });

  useEffect(() => {
    if (isMobile) {
      setCollapsed(true);
    }
  }, [isMobile, setCollapsed]);

  const toggle = (newCollapsed?: boolean) => {
    setCollapsed((prev) => newCollapsed ?? !prev);
  };

  return [collapsed, toggle];
};

export default useCollapsed;
