import React, { useState, useCallback } from "react";
import styled from "@emotion/styled";
import { ThemeProvider, useTheme } from "./ThemeContext";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import Mock from "mockjs";

const mockProjects = Mock.mock({
  "projects|100": [
    {
      name: "@cname",
      description: "@sentence",
      github: "https://github.com/nuxt/eslint-module",
      link: "https://nuxt.com",
    },
  ],
});

// 定义左侧项目分类
const categories = [
  "Current Focus",
  "Vue Ecosystem",
  "Nuxt Ecosystem",
  "Unplugins",
  "ESLint Ecosystem",
  "Starter Templates",
];

// 定义项目列表
const projects = mockProjects.projects ?? [
  {
    name: "Nuxt ESLint",
    description: "All-in-one ESLint module for Nuxt",
    github: "https://github.com/nuxt/eslint-module",
    link: "https://nuxt.com",
  },
  {
    name: "Nuxt Playground",
    description: "Interactive Playground for learning Nuxt",
    github: "https://github.com/nuxt/playground",
    link: "https://playground.nuxt.com",
  },
  {
    name: "Nuxt DevTools",
    description: "Unleash Nuxt Developer Experience",
    github: "https://github.com/nuxt/devtools",
    link: "https://devtools.nuxt.com",
  },
  // 可继续添加更多项目
];

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { isDarkMode, toggleTheme } = useTheme();

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen((prev) => !prev);
  }, []);

  return (
    <PageContainer isDarkMode={isDarkMode}>
      <Sidebar
        isDarkMode={isDarkMode}
        isOpen={isSidebarOpen}
        categories={categories}
      />
      <MainContent
        isDarkMode={isDarkMode}
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        toggleTheme={toggleTheme}
        projects={projects}
      />
    </PageContainer>
  );
};

const PageContainer = styled.div<{ isDarkMode: boolean }>`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: ${({ isDarkMode }) => (isDarkMode ? "#121212" : "#f8f9fa")};
  color: ${({ isDarkMode }) => (isDarkMode ? "#e0e0e0" : "#333333")};
  overflow: hidden;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

const AppWithTheme: React.FC = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

export default AppWithTheme;
