import React from "react";
import { ThemeProvider } from "@emotion/react";
import { lightTheme, darkTheme } from "@/styles/theme";
import HomeView from "@/views/HomeView";
import { Theme } from "@/styles/theme";
import { Toast } from "@/components";
import { useTheme } from "@/common/hooks";
import GlobalStyle from "@/styles/theme/GlobalStyle";
import "@/styles/base.css";

const App: React.FC = () => {
  const [themeMode] = useTheme();

  const theme: Theme = themeMode === "dark" ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <HomeView />
      <Toast />
    </ThemeProvider>
  );
};

export default App;
