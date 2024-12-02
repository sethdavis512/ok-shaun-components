import { createTheme } from "@vanilla-extract/css";
import { createThemeContract } from "@vanilla-extract/css";

export const theme = createThemeContract({});

export const [light, lightVars] = createTheme(theme);
export const [dark, darkVars] = createTheme(theme);
