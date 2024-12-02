/** @jsxImportSource @emotion/react */
import React from "react";
import { css, Theme } from "@emotion/react";

const inputStyles = (theme: Theme) => css`
  background-color: ${theme.mode === "light"
    ? theme.color.gray[0]
    : theme.color.gray[90]};
  border: 1px solid;
  border-color: ${theme.mode === "light"
    ? theme.color.gray[40]
    : theme.color.gray[50]};
  border-radius: 4px;
  padding: 8px 12px;
  &:focus {
    outline: none;
    border-color: ${theme.color.blue[40]};
  }
`;

export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ ...props }, ref) => {
  return <input css={inputStyles} ref={ref} {...props} />;
});

Input.displayName = "Input";
