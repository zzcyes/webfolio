import { useConfig, useCollapsed, useTheme } from "@/common/hooks";
import { css } from "@emotion/css";
import { HeaderContainer, NavBar, NavItem } from "./styled";
import { CollapsedToggleButton, ThemeToggleButton } from "@/components";

const NavbarWeb = () => {
  const [{ navbar, layout, mediaQuery }] = useConfig();
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
          collapsed={collapsed}
          onToggle={() => toggleCollapsed()}
        />
        <NavBar>
          {navbar?.map((item) => (
            <NavItem href={item.href} key={item.href}>
              {item.name}
            </NavItem>
          ))}
        </NavBar>
        <ThemeToggleButton
          themeMode={themeMode}
          onClick={() => toggleThemeMode()}
        />
      </HeaderContainer>
    </>
  );
};

export default NavbarWeb;
