import { style } from '@vanilla-extract/css';
import * as React from 'react';
import { sprinkles } from '~/styles/sprinkles.css';

export const boxStyles = sprinkles({
  minWidth: 0,
});

export const flexStyles = style([
  boxStyles,
  sprinkles({
    display: 'flex',
    gap: 16,
  }),
]);

export const flexColumnStyles = style([
  flexStyles,
  sprinkles({
    flexDirection: 'column',
  }),
]);

export interface BoxProps {
  as?: React.ElementType;
}

const Box = ({ as: Component = 'div', ...props }: BoxProps) => {
  return <Component css={boxStyles} {...props} />;
};

const Flex = ({ as: Component = 'div', ...props }: BoxProps) => {
  return <Component css={[boxStyles, flexStyles]} {...props} />;
};

const FlexColumn = ({ as: Component = 'div', ...props }: BoxProps) => {
  return <Component css={[flexStyles, flexColumnStyles]} {...props} />;
};

export { Box, Flex, FlexColumn };
