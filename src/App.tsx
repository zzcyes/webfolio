import React from "react";
import { ThemeProvider } from "@emotion/react";
import GlobalStyle from "@/styles/theme/GlobalStyle";
import { Toast } from "@/components";
import HomeView from "@/views/HomeView";
import { lightTheme, darkTheme } from "@/styles/theme";
import { useTheme } from "@/common/hooks";
import type { Theme } from "@/styles/theme";
import "@/styles/base.css";

const App: React.FC = () => {
  const [themeMode] = useTheme();
  const theme: Theme = themeMode === "dark" ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Toast />
      <HomeView />
    </ThemeProvider>
  );
};

export default App;
