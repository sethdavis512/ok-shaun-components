import { Theme } from "@emotion/react";

const color = {
  transparent: "transparent",
  current: "currentColor",
  black: "#000000",
  white: "#FFFFFF",
  blue: {
    5: "#E8F5FF",
    10: "#CFE8FF",
    20: "#A1D3FF",
    30: "#58B4FF",
    40: "#2491FF",
    50: "#0076DA",
    60: "#005EA2",
    70: "#0B4778",
    80: "#112F4E",
  },
  gray: {
    0: "#FFFFFF",
    1: "#FBFCFD",
    2: "#F7F9FA",
    3: "#F5F6F7",
    4: "#F1F3F6",
    5: "#EDEFF0",
    10: "#DFE1E2",
    20: "#C6CACE",
    30: "#A9AEB1",
    40: "#8D9297",
    50: "#71767A",
    60: "#565C65",
    70: "#3D4551",
    80: "#2D2E2F",
    90: "#1C1D1F",
    100: "#000000",
  },
  mint: {
    5: "#D5FBF3",
    10: "#7EFBE1",
    20: "#29E1CB",
    30: "#1DC2AE",
    40: "#00A398",
    50: "#008480",
    60: "#0F6460",
    70: "#0B4B3F",
    80: "#123131",
  },
  red: {
    5: "#FFF3F2",
    10: "#FDE0DB",
    20: "#FDB8AE",
    30: "#FF8D7B",
    40: "#FB5A47",
    50: "#E52207",
    60: "#B50909",
    70: "#8B0A03",
    80: "#5C1111",
  },
  orange: {
    5: "#fef2e4",
    10: "#fce2c5",
    20: "#ffbc78",
    30: "#fa9441",
    40: "#e66f0e",
    50: "#c05600",
    60: "#8c471c",
    70: "#5f3617",
    80: "#352313",
  },
  yellow: {
    5: "#fff5c2",
    10: "#fee685",
    20: "#face00",
    30: "#ddaa01",
    40: "#b38c00",
    50: "#947100",
    60: "#776017",
    70: "#5c4809",
    80: "#422d19",
  },
  green: {
    5: "#ddf9c7",
    10: "#c5ee93",
    20: "#98d035",
    30: "#7fb135",
    40: "#719f2a",
    50: "#538200",
    60: "#466c04",
    70: "#2f4a0b",
    80: "#243413",
  },
  indigo: {
    5: "#f0f0ff",
    10: "#e0e0ff",
    20: "#ccceff",
    30: "#a3a7fa",
    40: "#8289ff",
    50: "#656bd7",
    60: "#4a50c4",
    70: "#3333a3",
    80: "#212463",
  },
};

const font = {
  default: "'IBM Plex Sans', Geneva, Tahoma, Verdana, sans-serif",
  mono: "'IBM Plex Mono', Andale Mono, monaco, Consolas, Lucida Console, monospace",
};

const fontWeight = {
  light: 300,
  normal: 400,
  medium: 500,
  bold: 700,
};

const leading = {
  xs: 1,
  sm: 1.125,
  md: 1.25,
  lg: 1.5,
  xl: 1.75,
};

const size = {
  0: "0",
  1: "0.0625rem",
  2: "0.125rem",
  4: "0.25rem",
  8: "0.5rem",
  12: "0.75rem",
  14: "0.875rem",
  16: "1rem",
  20: "1.25rem",
  24: "1.5rem",
  32: "2rem",
  40: "2.5rem",
  48: "3rem",
  64: "4rem",
  72: "4.5rem",
  80: "5rem",
  96: "6rem",
};

const radius = {
  0: "0",
  1: "0.0625rem",
  2: "0.125rem",
  4: "0.25rem",
  8: "0.5rem",
  16: "1rem",
  100: "100%",
};

const breakpoint = {
  xs: "480px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
};

const shadow = {
  low: {
    light: `0 1px 3px 0 ${color.gray[20]}`,
    dark: `0 1px 3px 0 ${color.gray[100]}`,
  },
  high: {
    light: `0 3px 6px 0 ${color.gray[20]}`,
    dark: `0 3px 6px 0 ${color.gray[100]}`,
  },
};

export const theme: Theme = {
  color,
  font,
  fontWeight,
  leading,
  size,
  radius,
  breakpoint,
  shadow,
  mode: "light",
};

// Export a function to switch between light and dark modes
export const getTheme = (mode: "light" | "dark"): Theme => ({
  ...theme,
  mode,
});
