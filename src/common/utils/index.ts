export const normalizeCssSize = (size: string | number) => {
  return typeof size === "number" ? `${size}px` : size;
};

export const normalizeCssSizeNumber = (size: string | number) => {
  return typeof size === "string" ? Number(size.replace("px", "")) : size;
};
