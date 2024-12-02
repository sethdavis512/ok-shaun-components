import "@emotion/react";
import {
  color,
  font,
  fontWeight,
  leading,
  size,
  radius,
  breakpoint,
  shadow,
} from "./theme";
declare module "@emotion/react" {
  export interface Theme {
    color: typeof color;
    font: typeof font;
    fontWeight: typeof fontWeight;
    leading: typeof leading;
    size: typeof size;
    radius: typeof radius;
    breakpoint: typeof breakpoint;
    shadow: typeof shadow;
    mode: "light" | "dark";
  }
}
