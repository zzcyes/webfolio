import { useConfig } from "@/common/hooks";
import { useMediaQuery } from "react-responsive";
import NavbarWeb from "./index.web";
import NavbarMobile from "./index.mobile";

const Navbar = () => {
  const [{ mediaQuery }] = useConfig();
  const isWeb = useMediaQuery({ minWidth: mediaQuery.web });

  return <>{isWeb ? <NavbarWeb /> : <NavbarMobile />}</>;
};

export default Navbar;
