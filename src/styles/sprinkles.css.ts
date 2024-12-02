import { createVar } from '@vanilla-extract/css';
import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles';
import { primitives } from './primitives.css';
import { baseLayer, interactiveLayer, responsiveLayer } from './layers.css';

const alpha = createVar();

const baseProperties = defineProperties({
  '@layer': baseLayer,
  properties: {
    position: ['relative', 'absolute', 'sticky', 'fixed'],
    display: ['none', 'block', 'flex', 'inline-block', 'inline-flex'],
    flexDirection: ['row', 'column'],
    alignItems: ['stretch', 'center', 'flex-start', 'flex-end'],
    justifyContent: ['stretch', 'center', 'flex-start', 'flex-end'],
    border: primitives.size,
    gap: primitives.size,
    padding: primitives.size,
    paddingLeft: primitives.size,
    paddingRight: primitives.size,
    paddingTop: primitives.size,
    paddingBottom: primitives.size,
    width: primitives.size,
    height: primitives.size,
    minWidth: primitives.size,
    minHeight: primitives.size,
    maxWidth: primitives.size,
    maxHeight: primitives.size,
    borderRadius: primitives.radius,
    fontFamily: primitives.font,
    fontSize: primitives.size,
    lineHeight: primitives.leading,
    textAlign: ['left', 'center', 'right'],
    zIndex: [],
    top: primitives.size,
    left: primitives.size,
    right: primitives.size,
    bottom: primitives.size,
    verticalAlign: [
      'baseline',
      'sub',
      'super',
      'text-top',
      'text-bottom',
      'middle',
      'top',
      'bottom',
    ],
    margin: primitives.size,
    marginBottom: primitives.size,
    marginLeft: primitives.size,
    marginRight: primitives.size,
    marginTop: primitives.size,
    opacity: {
      1: { vars: { [alpha]: '1' } },
      0.9: { vars: { [alpha]: '0.9' } },
      0.8: { vars: { [alpha]: '0.8' } },
      0.7: { vars: { [alpha]: '0.7' } },
      0.6: { vars: { [alpha]: '0.6' } },
      0.5: { vars: { [alpha]: '0.5' } },
      0.4: { vars: { [alpha]: '0.4' } },
      0.3: { vars: { [alpha]: '0.3' } },
      0.2: { vars: { [alpha]: '0.2' } },
      0.1: { vars: { [alpha]: '0.1' } },
      0: { vars: { [alpha]: '0' } },
    },
    transform: [],
    transition: [],
    animation: [],
    color: primitives.color,
    background: primitives.color,
    borderColor: primitives.color,
    fill: primitives.color,
    stroke: primitives.color,
    outlineColor: primitives.color,
  },
  shorthands: {
    p: ['padding'],
    pl: ['paddingLeft'],
    pr: ['paddingRight'],
    pt: ['paddingTop'],
    pb: ['paddingBottom'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    px: ['paddingLeft', 'paddingRight'],
    py: ['paddingTop', 'paddingBottom'],
    placeItems: ['alignItems', 'justifyContent'],
    typeSize: ['fontSize', 'lineHeight'],
    m: ['margin'],
    mr: ['marginRight'],
    ml: ['marginLeft'],
    mt: ['marginTop'],
    mb: ['marginBottom'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
    mx: ['marginLeft', 'marginRight'],
    my: ['marginTop', 'marginBottom'],
    size: ['height', 'width'],
    bg: ['backgroundColor'],
  },
});

const colorProperties = defineProperties({
  '@layer': baseLayer,
  conditions: {
    lightMode: {},
    darkMode: { '@media': '(prefers-color-scheme: dark)' },
  },
  defaultCondition: ['lightMode', 'darkMode'],
  properties: primitives,
});

const responsiveProperties = defineProperties({
  '@layer': responsiveLayer,
  conditions: {
    xs: { '@media': `screen and (max-width: ${primitives.breakpoint.xs})` },
    sm: { '@media': `screen and (max-width: ${primitives.breakpoint.sm})` },
    md: { '@media': `screen and (max-width: ${primitives.breakpoint.md})` },
    lg: { '@media': `screen and (max-width: ${primitives.breakpoint.lg})` },
    xl: {},
  },
  defaultCondition: 'xl',
  responsiveArray: ['xs', 'sm', 'md', 'lg', 'xl'],
  properties: primitives,
});

const interactiveProperties = defineProperties({
  '@layer': interactiveLayer,
  conditions: {
    base: {},
    hover: { selector: '&:hover' },
    active: { selector: '&:active' },
  },
  defaultCondition: 'base',
  properties: primitives,
});

export const sprinkles = createSprinkles(
  baseProperties,
  colorProperties,
  responsiveProperties,
  interactiveProperties,
);

export type Sprinkles = Parameters<typeof sprinkles>[0];
