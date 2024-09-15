import { useConfig, useCollapsed, useTheme } from "@/common/hooks";
import { css } from "@emotion/css";
import { HeaderContainer, NavBar, NavItem } from "./styled";
import { CollapsedToggleButton, ThemeToggleButton } from "@/components";

const NavbarMobile = () => {
  const [{ navbar, layout }] = useConfig();
  const [collapsed, toggleCollapsed] = useCollapsed();
  const [themeMode, toggleThemeMode] = useTheme();

  return (
    <>
      <HeaderContainer
        className={css`
          padding: ${layout.navbar.padding}px;
        `}
      >
        <CollapsedToggleButton
          style={{
            fontSize: 18,
          }}
          reverse={true}
          collapsed={collapsed}
          onToggle={() => toggleCollapsed()}
        />
        <NavBar
          style={{
            gap: 0,
            justifyContent: "space-around",
            padding: "0px 8px",
            overflow: "hidden",
          }}
        >
          {navbar?.map((item) => (
            <NavItem href={item.href} key={item.href}>
              {item.name}
            </NavItem>
          ))}
        </NavBar>
        <ThemeToggleButton
          style={{
            fontSize: 18,
          }}
          themeMode={themeMode}
          onClick={() => toggleThemeMode()}
        />
      </HeaderContainer>
    </>
  );
};

export default NavbarMobile;
