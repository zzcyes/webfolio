import { useConfig } from "@/common/hooks";
import { useMediaQuery } from "react-responsive";
import SidebarMobile from "./index.mobile";
import SidebarWeb from "./index.web";

const Sidebar = ({ categories }: { categories: any }) => {
  const [{ mediaQuery }] = useConfig();
  const isWeb = useMediaQuery({ minWidth: mediaQuery.web });

  return isWeb ? (
    <SidebarWeb categories={categories} />
  ) : (
    <SidebarMobile categories={categories} />
  );
};

export default Sidebar;
