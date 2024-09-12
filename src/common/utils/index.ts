export const normalizeCssSize = (size: string | number) => {
  return typeof size === "number" ? `${size}px` : size;
};
