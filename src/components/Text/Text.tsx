/** @jsxImportSource @emotion/react */
import { css, Theme } from "@emotion/react";
import * as React from "react";

export interface TextProps {
  level?: 12 | 14 | 16 | 20 | 24 | 32 | 40 | 48 | 64 | 72 | 80 | 96;
  font?: "default" | "mono";
  as?: "p" | "span" | "div";
  children: React.ReactNode;
}

const textStyles = (theme: Theme, level: number, font: string) => css`
  font-size: ${theme.size[level] || theme.size[16]};
  line-height: ${theme.leading.md};
  font-family: ${theme.font[font] || theme.font.default};
  font-weight: normal;
  color: ${theme.mode === "light"
    ? theme.color.gray[80]
    : theme.color.gray[20]};
  margin: 0;
`;

export const Text = ({ children, ...props }: TextProps) => {
  return (
    <p css={textStyles(theme, props.level, props.font)} {...props}>
      {children}
    </p>
  );
};
Text.displayName = "Text";
