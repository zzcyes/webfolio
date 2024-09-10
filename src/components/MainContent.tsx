import React from "react";
import styled from "@emotion/styled";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaSun,
  FaMoon,
  FaBars,
  FaTimes,
} from "react-icons/fa";

interface MainContentProps {
  isDarkMode: boolean;
  isOpen: boolean;
  toggleSidebar: () => void;
  toggleTheme: () => void;
  projects: Array<{
    name: string;
    description: string;
    github: string;
    link: string;
  }>;
}

const MainContent: React.FC<MainContentProps> = ({
  isDarkMode,
  isOpen,
  toggleSidebar,
  toggleTheme,
  projects,
}) => (
  <MainContentWrapper isOpen={isOpen}>
    <MainContentContainer isDarkMode={isDarkMode}>
      <HeaderContainer isDarkMode={isDarkMode}>
        <ToggleSidebarButton onClick={toggleSidebar} isDarkMode={isDarkMode}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </ToggleSidebarButton>
        <Header isDarkMode={isDarkMode}>Projects</Header>
        <NavBar>
          <NavItem href="#blog" isDarkMode={isDarkMode}>
            Blog
          </NavItem>
          <NavItem href="#projects" isDarkMode={isDarkMode}>
            Projects
          </NavItem>
          <NavItem href="#talks" isDarkMode={isDarkMode}>
            Talks
          </NavItem>
          <NavItem href="#sponsors" isDarkMode={isDarkMode}>
            Sponsors
          </NavItem>
        </NavBar>
        <ThemeToggle onClick={toggleTheme} isDarkMode={isDarkMode}>
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </ThemeToggle>
      </HeaderContainer>
      <ProjectWrapper>
        <ProjectContainer>
          <ProjectGrid>
            {projects.map((project, index) => (
              <ProjectItem key={index} isDarkMode={isDarkMode}>
                <ProjectName isDarkMode={isDarkMode}>
                  {project.name}- {index + 1}
                </ProjectName>
                <ProjectDescription isDarkMode={isDarkMode}>
                  {project.description}
                </ProjectDescription>
                <ProjectLinks isDarkMode={isDarkMode}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub size={24} />
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt size={24} />
                  </a>
                </ProjectLinks>
              </ProjectItem>
            ))}
          </ProjectGrid>
        </ProjectContainer>
      </ProjectWrapper>
    </MainContentContainer>
  </MainContentWrapper>
);

// const MainPageGap = 20;
const MAIN_PAGE_PADDING = 20;
const PROJECT_PADDING = 20;

const MainContentWrapper = styled.div<{ isOpen: boolean }>`
  /* flex-grow: 1; */
  display: flex;
  justify-content: center;
  /* transition: margin-left 0.3s ease; */
  transition: width 0.3s ease;
  padding: ${MAIN_PAGE_PADDING}px;
  /* width: 100%; */
  flex: 1;
  height: 100%;
  /* margin-left: ${({ isOpen }) => (isOpen ? "0" : "-250px")}; */
`;

const MainContentContainer = styled.div<{ isDarkMode: boolean }>`
  background-color: ${({ isDarkMode }) =>
    isDarkMode
      ? "var(--color-card-background-dark)"
      : "var(--color-card-background)"};
  color: ${({ isDarkMode }) =>
    isDarkMode ? "var(--color-text-dark)" : "var(--color-text)"};
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  width: 100%;
  /* height: 100%; */
  overflow: hidden;
  /* height: calc(100vh - 40px); */
  /* margin: 20px; */
  /* padding: 40px; */
  /* overflow-y: auto; */
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

const HeaderContainer = styled.div<{ isDarkMode: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  /* padding: 40px; */
  /* margin-bottom: 40px; */
  /* padding-bottom: 20px; */
  border-bottom: 1px solid
    ${({ isDarkMode }) =>
      isDarkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"};
  padding: 20px;
`;

const ToggleSidebarButton = styled.div<{ isDarkMode: boolean }>`
  background-color: transparent;
  color: ${({ isDarkMode }) => (isDarkMode ? "#e0e0e0" : "#333333")};
  border: none;
  font-size: 24px;
  cursor: pointer;
  /* margin-left: 20px; */
  /* padding: 5px; */
`;

const Header = styled.h1<{ isDarkMode: boolean }>`
  font-size: 36px;
  color: ${({ isDarkMode }) => (isDarkMode ? "#e0e0e0" : "#333333")};
  /* margin: 0; */
`;

const NavBar = styled.nav`
  display: flex;
  gap: 20px;
`;

const NavItem = styled.a<{ isDarkMode: boolean }>`
  color: ${({ isDarkMode }) => (isDarkMode ? "#e0e0e0" : "#333333")};
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    color: #ff6a00;
  }
`;

const ThemeToggle = styled.div<{ isDarkMode: boolean }>`
  background-color: transparent;
  color: ${({ isDarkMode }) => (isDarkMode ? "#e0e0e0" : "#333333")};
  border: none;
  font-size: 24px;
  cursor: pointer;
  /* background-color: gray; */
`;

const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 20px 0px;
  overflow-y: auto;
`;

const ProjectContainer = styled.div`
  display: flex;
  width: calc(
    100vw - 250px - (${MAIN_PAGE_PADDING} + ${PROJECT_PADDING}) * 2px
  );
  /* height: 100%; */
  /* margin-bottom: 30px; */
  /* margin-bottom: 30px; */
  /* min-width: calc(100vw - 250px); */
  /* flex-grow: 1; */
  /* flex: 1; */
  /* margin: 0 auto; */
  /* align-self: center; */
  /* height: auto; */
  /* overflow-y: auto; */
  /* margin: 20px 0px; */
  justify-content: center;
  transition: margin-left 0.3s ease;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  width: 100%;
  /* max-width: 1200px; // 设置最大宽度，确保在大屏幕上不会过宽 */
  margin: 0 auto; // 居中显示
`;

const ProjectItem = styled.div<{ isDarkMode: boolean }>`
  background-color: ${({ isDarkMode }) =>
    isDarkMode ? "var(--color-background-dark)" : "var(--color-background)"};
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 200px; // 设置最小高度，确保卡片有一致的高度
  justify-content: space-between; // 使内容均匀分布
`;

const ProjectName = styled.h3<{ isDarkMode: boolean }>`
  font-size: 22px;
  color: ${({ isDarkMode }) => (isDarkMode ? "#e0e0e0" : "#333333")};
  margin-bottom: 10px;
`;

const ProjectDescription = styled.p<{ isDarkMode: boolean }>`
  font-size: 16px;
  color: ${({ isDarkMode }) => (isDarkMode ? "#b0b0b0" : "#666666")};
  margin-bottom: 20px;
`;

const ProjectLinks = styled.div<{ isDarkMode: boolean }>`
  display: flex;
  gap: 20px;
  a {
    color: ${({ isDarkMode }) => (isDarkMode ? "#e0e0e0" : "#333333")};
    &:hover {
      color: #ff6a00;
    }
  }
`;

export default MainContent;
