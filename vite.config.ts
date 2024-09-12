import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  console.debug("defineConfig", {
    command,
    mode,
    PROXY_API_PREFIX: env.VITE_PROXY_API_PREFIX,
    BASE_PROJECT_PREFIX: env.VITE_BASE_PROJECT_PREFIX,
    token: env.GITHUB_ACCESS_TOKEN,
    NODE_ENV: env.NODE_ENV,
  });

  return {
    plugins: [react()],
    base: env.VITE_BASE_PROJECT_PREFIX,
    resolve: {
      alias: {
        "@": path.join(__dirname, "src"),
        "@config": path.join(__dirname, "config"),
      },
    },
    server: {
      proxy: {
        [env.VITE_PROXY_API_PREFIX]: {
          target: "http://localhost:3002",
          changeOrigin: true,
          rewrite: (path) =>
            path.replace(new RegExp(`^${env.VITE_PROXY_API_PREFIX}`), ""),
        },
      },
    },
    build: {
      outDir: "dist",
      assetsDir: "assets",
      emptyOutDir: true,
    },
  };
});
