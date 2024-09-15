import { useConfig, useCollapsed, useTheme } from "@/common/hooks";
import { css } from "@emotion/css";
import { HeaderContainer, NavBar, NavItem } from "./styled";
import { CollapsedToggleButton, ThemeToggleButton } from "@/components";
import { useMediaQuery } from "react-responsive";

const NavbarMobile = () => {
  const [{ navbar, layout, mediaQuery }] = useConfig();
  const [collapsed, toggleCollapsed] = useCollapsed();
  const [themeMode, toggleThemeMode] = useTheme();
  const isMobile = useMediaQuery({ maxWidth: mediaQuery.mobile });

  const toggleStyle = isMobile ? { fontSize: 18 } : undefined;
  const navbarItemStyle = isMobile ? { fontSize: 16 } : undefined;
  const navbarStyle = isMobile
    ? {
        gap: 0,
        justifyContent: "space-around",
        padding: "0px 8px",
        overflow: "hidden",
      }
    : undefined;

  return (
    <>
      <HeaderContainer
        className={css`
          padding: ${layout.navbar.padding}px;
        `}
      >
        <CollapsedToggleButton
          style={toggleStyle}
          reverse={isMobile}
          collapsed={collapsed}
          onToggle={() => toggleCollapsed()}
        />
        <NavBar style={navbarStyle}>
          {navbar?.map((item) => (
            <NavItem style={navbarItemStyle} href={item.href} key={item.href}>
              {item.name}
            </NavItem>
          ))}
        </NavBar>
        <ThemeToggleButton
          style={toggleStyle}
          themeMode={themeMode}
          onClick={() => toggleThemeMode()}
        />
      </HeaderContainer>
    </>
  );
};

export default NavbarMobile;
