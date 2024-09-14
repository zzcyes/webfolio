import styled from "@emotion/styled";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import { useConfig, useCollapsed, useTheme } from "@/common/hooks";
import { css } from "@emotion/css";
import { useMediaQuery } from "react-responsive";

const FaIcons = [<FaBars />, <FaTimes />];

export const CollapsedToggleButton = ({
  reverse,
  collapsed,
  onToggle,
}: {
  reverse?: boolean;
  collapsed: boolean;
  onToggle: () => void;
}) => {
  const [collapsedIcon, expandedIcon] = reverse ? FaIcons.reverse() : FaIcons;

  return (
    <>
      <ToggleButton onClick={onToggle}>
        {collapsed ? collapsedIcon : expandedIcon}
      </ToggleButton>
    </>
  );
};

const Navbar = () => {
  const [{ navbar, layout, mediaQuery }] = useConfig();
  const [collapsed, toggleCollapsed] = useCollapsed();
  const [themeMode, toggleThemeMode] = useTheme();
  const isDarkMode = themeMode === "dark";
  const isMobile = useMediaQuery({ maxWidth: mediaQuery.mobile });

  return (
    <>
      <HeaderContainer
        className={css`
          padding: ${layout.navbar.padding}px;
        `}
      >
        <CollapsedToggleButton
          reverse={isMobile}
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
        <ToggleButton onClick={toggleThemeMode}>
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </ToggleButton>
      </HeaderContainer>
    </>
  );
};

export default Navbar;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.border};
`;

export const ToggleButton = styled.div`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

const NavBar = styled.nav`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const NavItem = styled.a`
  text-decoration: none;
  font-size: 16px;
  color: ${(props) => props.theme.text};
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.accent};
  }
`;
