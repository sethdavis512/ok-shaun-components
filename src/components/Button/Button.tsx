/** @jsxImportSource @emotion/react */
import { css, Theme } from "@emotion/react";
import * as React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "primary" | "danger" | "hollow" | "utility";
  size?: "default" | "small" | "medium";
  iconButton?: boolean;
  to?: string;
  isActive?: boolean;
  theme?: Theme;
  className?: string;
}

const variants = (theme: Theme) => ({
  default: css`
    background-color: ${theme.mode === "light"
      ? theme.color.gray[5]
      : theme.color.gray[70]};
    color: ${theme.mode === "light"
      ? theme.color.gray[80]
      : theme.color.gray[5]};
    &:hover {
      background-color: ${theme.mode === "light"
        ? theme.color.gray[2]
        : theme.color.gray[60]};
    }
    &:active {
      background-color: ${theme.mode === "light"
        ? theme.color.gray[20]
        : theme.color.gray[100]};
      border-color: transparent;
    }
    &:focus-visible {
      border-color: ${theme.mode === "light"
        ? theme.color.blue[20]
        : theme.color.blue[50]};
    }
    &:disabled {
      &:hover {
        background-color: ${theme.mode === "light"
          ? theme.color.gray[70]
          : theme.color.gray[5]};
      }
    }
    &.isActive {
      background-color: ${theme.color.blue[50]};
      color: ${theme.color.gray[0]};
    }
  `,
  primary: css`
    background-color: ${theme.color.blue[50]};
    color: ${theme.color.gray[0]};
    &:hover {
      background-color: ${theme.color.blue[40]};
    }
    &:active {
      background-color: ${theme.color.blue[60]};
      border-color: transparent;
    }
    &:focus-visible {
      border-color: ${theme.mode === "light"
        ? theme.color.blue[70]
        : theme.color.blue[30]};
    }
    &:disabled {
      &:hover {
        background-color: ${theme.color.blue[50]};
      }
    }
    &.isActive {
      background-color: ${theme.color.blue[60]};
    }
  `,
  danger: css`
    background-color: ${theme.color.red[50]};
    color: ${theme.color.gray[0]};
    &:hover {
      background-color: ${theme.color.red[40]};
    }
    &:active {
      background-color: ${theme.color.red[60]};
      border-color: transparent;
    }
    &:focus-visible {
      border-color: ${theme.color.blue[20]};
    }
    &:disabled {
      &:hover {
        background-color: ${theme.color.red[50]};
      }
    }
    &.isActive {
      background-color: ${theme.color.red[60]};
    }
  `,
  hollow: css`
    background-color: transparent;
    color: ${theme.mode === "light"
      ? theme.color.gray[80]
      : theme.color.gray[5]};
    &:hover {
      background-color: ${theme.mode === "light"
        ? theme.color.gray[2]
        : theme.color.gray[60]};
    }
    &:active {
      background-color: ${theme.mode === "light"
        ? theme.color.gray[20]
        : theme.color.gray[100]};
      border-color: transparent;
    }
    &:focus-visible {
      border-color: ${theme.mode === "light"
        ? theme.color.blue[50]
        : theme.color.blue[20]};
      background-color: ${theme.mode === "light"
        ? theme.color.gray[5]
        : theme.color.gray[70]};
    }
    &:disabled {
      &:hover {
        background-color: transparent;
      }
    }
    &.isActive {
      background-color: ${theme.mode === "light"
        ? theme.color.gray[90]
        : theme.color.gray[10]};
      color: ${theme.mode === "light"
        ? theme.color.gray[5]
        : theme.color.gray[90]};
    }
  `,
  utility: css`
    background-color: ${theme.mode === "light"
      ? theme.color.gray[80]
      : theme.color.gray[5]};
    color: ${theme.mode === "light"
      ? theme.color.gray[5]
      : theme.color.gray[80]};
    &:hover {
      background-color: ${theme.mode === "light"
        ? theme.color.gray[60]
        : theme.color.gray[2]};
    }
    &:active {
      background-color: ${theme.mode === "light"
        ? theme.color.gray[100]
        : theme.color.gray[20]};
      border-color: transparent;
    }
    &:focus-visible {
      border-color: ${theme.mode === "light"
        ? theme.color.blue[20]
        : theme.color.blue[50]};
      background-color: ${theme.mode === "light"
        ? theme.color.gray[70]
        : theme.color.gray[5]};
    }
    &:disabled {
      &:hover {
        background-color: ${theme.mode === "light"
          ? theme.color.gray[80]
          : theme.color.gray[5]};
      }
    }
    &.isActive {
      background-color: ${theme.mode === "light"
        ? theme.color.gray[60]
        : theme.color.gray[20]};
      color: ${theme.mode === "light"
        ? theme.color.gray[0]
        : theme.color.gray[100]};
    }
  `,
});

const sizes = (theme: Theme, iconButton: boolean = false) => ({
  default: css`
    font-size: ${theme.size[16]};
    padding: ${iconButton
      ? theme.size[4]
      : `${theme.size[4]} ${theme.size[12]}`};
  `,
  small: css`
    font-size: ${theme.size[14]};
    padding: ${iconButton
      ? theme.size[2]
      : `${theme.size[2]} ${theme.size[8]}`};
  `,
  medium: css`
    font-size: ${theme.size[16]};
    padding: ${iconButton
      ? theme.size[2]
      : `${theme.size[2]} ${theme.size[8]}`};
  `,
});

const baseStyles = (theme: Theme, iconButton: boolean = false) => css`
  display: ${iconButton ? "block" : "flex"};
  align-items: center;
  gap: ${theme.size[4]};
  font-size: ${iconButton ? 0 : theme.size[16]};
  font-weight: ${theme.fontWeight.normal};
  font-family: ${theme.font.default};
  line-height: ${iconButton ? theme.leading.sm : theme.leading.md};
  border-radius: ${theme.radius[4]};
  border-color: transparent;
  border-width: ${theme.size[2]};
  border-style: solid;
  outline: none;
  text-decoration: none;
  white-space: nowrap;
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
  cursor: pointer;
  & svg {
    fill: currentColor;
    width: ${theme.size[24]};
    height: ${theme.size[24]};
  }
`;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "default",
      size = "default",
      iconButton = false,
      isActive = false,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        css={(theme: Theme) => [
          baseStyles(theme, iconButton),
          variants(theme)[variant],
          sizes(theme, iconButton)[size],
        ]}
        className={`${isActive ? "isActive" : ""} ${className || ""}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

const IconButton = ({
  children,
  variant = "default",
  size = "default",
  iconButton = true,
  isActive = false,
  className,
  ...props
}: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      css={(theme: Theme) => [
        baseStyles(theme, iconButton),
        variants(theme)[variant],
        sizes(theme, iconButton)[size],
      ]}
      className={`${isActive ? "isActive" : ""} ${className || ""}`}
      {...props}
    >
      {children}
    </button>
  );
};

export { Button, IconButton };
