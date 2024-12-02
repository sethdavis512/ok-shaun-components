/** @jsxImportSource @emotion/react */
import { css, Theme } from "@emotion/react";

type IconProps = {
  name: string;
  [key: string]: unknown | undefined;
};

const iconStyles = (theme: Theme) =>
  css`
    fill: currentColor;
    width: ${theme.size[24]};
    height: ${theme.size[24]};
    use {
      fill: currentColor;
      width: ${theme.size[24]};
      height: ${theme.size[24]};
    }
  `;

const IconSVG = ({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme: Theme;
}) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width={theme.size[24]}
    height={theme.size[24]}
    css={iconStyles}
  >
    {children}
  </svg>
);

export const Icon = ({ name, ...props }: IconProps) => {
  return (
    <IconSVG {...props}>
      <use xlinkHref={`~/src/components/Icon/utils/sprite.svg#${name}`} />
    </IconSVG>
  );
};

export default Icon;
