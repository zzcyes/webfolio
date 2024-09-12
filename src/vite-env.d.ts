/// <reference types="vite/client" />

import "@emotion/react";
import { Theme as CustomTheme } from "./styles/theme";

declare module "@emotion/react" {
  export interface Theme extends CustomTheme {
    [key: string]: any;
  }
}
