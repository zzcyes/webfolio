import React from "react";
import styled from "@emotion/styled";

interface SidebarProps {
  isDarkMode: boolean;
  isOpen: boolean;
  categories: string[];
}

const Sidebar: React.FC<SidebarProps> = ({
  isDarkMode,
  isOpen,
  categories,
}) => {
  console.debug("isOpen", isOpen);
  return (
    <SidebarContainer isOpen={isOpen}>
      <SidebarWrapper isDarkMode={isDarkMode} isOpen={isOpen}>
        <SidebarHeader isDarkMode={isDarkMode}>
          <Logo>YourLogo</Logo>
        </SidebarHeader>
        <SidebarContent>
          {categories.map((category) => (
            <CategoryItem key={category} isDarkMode={isDarkMode}>
              {category}
            </CategoryItem>
          ))}
        </SidebarContent>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div<{ isOpen: boolean }>`
  position: relative;
  flex-shrink: 0;
  /* width: 250px; */
  width: ${({ isOpen }) => (isOpen ? "250px" : "0")};
  transition: width 0.3s ease;
  background-color: red;
`;

const SidebarWrapper = styled.div<{ isDarkMode: boolean; isOpen: boolean }>`
  height: 100%;
  background-color: ${({ isDarkMode }) =>
    isDarkMode ? "var(--color-background-dark)" : "var(--color-background)"};
  overflow: hidden;
  transition: transform 0.3s ease;
  // ... 其他样式保持不变
`;

const SidebarHeader = styled.div<{ isDarkMode: boolean }>`
  padding: 20px;
  border-bottom: 1px solid
    ${({ isDarkMode }) =>
      isDarkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #ff6a00;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
`;

const SidebarContent = styled.div`
  flex-grow: 1;
  padding: 20px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const CategoryItem = styled.div<{ isDarkMode: boolean }>`
  font-size: 16px;
  padding: 10px 15px;
  margin-bottom: 5px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.2s ease;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;

  &:hover {
    background-color: ${({ isDarkMode }) =>
      isDarkMode ? "var(--color-hover-dark)" : "var(--color-hover)"};
  }
`;

export default Sidebar;
