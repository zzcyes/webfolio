import { Global, css } from "@emotion/react";

// 使用 Global 组件定义全局样式
const GlobalStyle = () => (
  <Global
    styles={(theme) => css`
      ::-webkit-scrollbar {
        width: 8px;
      }

      ::-webkit-scrollbar-track {
        background: ${theme.cardBackground};
      }

      ::-webkit-scrollbar-thumb {
        background: ${theme.scrollbarThumb};
        border-radius: 4px;
      }

      ::-webkit-scrollbar-thumb:hover {
        background: ${theme.scrollbarThumbHover};
      }
    `}
  />
);

export default GlobalStyle;
