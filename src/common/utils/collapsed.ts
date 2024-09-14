export const setLocalStorageTheme = (theme: "dark" | "light") => {
  localStorage.setItem("theme", theme);
};

export const getLocalStorageTheme = () => {
  return (localStorage.getItem("theme") as "light" | "dark") ?? "light";
};

export const getLocalStorageAndSetDefaultTheme = () => {
  const defaultTheme = getLocalStorageTheme();
  setDocumentAttributeDataTheme(defaultTheme);
  return defaultTheme;
};

export const setDocumentAttributeDataTheme = (theme: "dark" | "light") => {
  document.documentElement.setAttribute("data-theme", theme);
};

export const updateTheme = (theme: "dark" | "light") => {
  setDocumentAttributeDataTheme(theme);
  setLocalStorageTheme(theme);
};
