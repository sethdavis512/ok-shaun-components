import { css, Theme } from "@emotion/react";
import { Text, TextProps } from "./Text";

interface LabelProps extends TextProps {
  children: React.ReactNode;
  htmlFor: string;
}

const labelStyles = (theme: Theme) => css`
  font-size: ${theme.size[14]};
  font-weight: ${theme.fontWeight.medium};
  line-height: ${theme.leading.md};
  cursor: default;
`;

export const Label = ({ children, htmlFor, ...props }: LabelProps) => {
  return (
    <Text css={labelStyles} {...props}>
      {children}
    </Text>
  );
};
