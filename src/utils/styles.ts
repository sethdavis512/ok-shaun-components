import { css, Theme } from "@emotion/react";

export const globalStyles = (theme: Theme) => css`
  @import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,400;0,700;1,400;1,700&family=IBM+Plex+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Piazzolla:ital,opsz,wght@0,8..30,100..900;1,8..30,100..900&display=swap");

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    background-color: ${theme.mode === "light"
      ? theme.color.gray[0]
      : theme.color.gray[90]};
    color: ${theme.color.gray[90]};
    font-family: ${theme.font.default};
    font-size: ${theme.size[16]};
    font-weight: ${theme.fontWeight.normal};
    line-height: ${theme.leading.md};
    margin: 0;
  }

  ::placeholder {
    color: ${theme.color.gray[30]};
  }

  .visually-hidden,
  .sr-only {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
`;
