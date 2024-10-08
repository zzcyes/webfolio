import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import App from "./App.tsx";
import { registerMockConfig } from "@/common/mock";

const createRoot = () => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </React.StrictMode>
  );
};

const initApp = async () => {
  if (import.meta.env.DEV && import.meta.env.VITE_OPEN_MOCK === "true") {
    await registerMockConfig();
  }
  createRoot();
};

initApp();
