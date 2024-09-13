import styled from "@emotion/styled";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import { useConfig, useCollapsed, useTheme } from "@/common/hooks";

const Navbar = () => {
  const [{ navbar }] = useConfig();
  const [collapsed, toggleCollapsed] = useCollapsed();
  const [themeMode, toggleThemeMode] = useTheme();
  const isDarkMode = themeMode === "dark";

  return (
    <>
      <HeaderContainer>
        <ToggleSidebarButton onClick={toggleCollapsed}>
          {collapsed ? <FaTimes /> : <FaBars />}
        </ToggleSidebarButton>
        <NavBar>
          {navbar?.map((item) => (
            <NavItem href={item.href} key={item.href}>
              {item.name}
            </NavItem>
          ))}
        </NavBar>
        <ThemeToggle onClick={toggleThemeMode}>
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </ThemeToggle>
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
  padding: 20px;
  border-bottom: 1px solid ${(props) => props.theme.border};
`;

const ToggleSidebarButton = styled.div`
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

const ThemeToggle = styled.div`
  background-color: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;
