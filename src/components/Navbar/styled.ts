import styled from "@emotion/styled";

export const HeaderContainer = styled.div`
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

export const NavBar = styled.nav`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const NavItem = styled.a`
  text-decoration: none;
  font-size: 16px;
  color: ${(props) => props.theme.text};
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.accent};
  }
`;
