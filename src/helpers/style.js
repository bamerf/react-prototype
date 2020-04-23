import { fade } from "@material-ui/core";
import { colors } from "../data/colors";
export const rem = (px) => `${px / 16}rem`;

const createBoxShadow = (alpha) =>
  `0px 8px 24px ${fade(colors.blackAbsolute, alpha)}`;

export const boxShadowOff = createBoxShadow(0);

export const boxShadowOn = createBoxShadow(0.07);

export const boxShadowRight = `5px 0 10px -10px ${fade(
  colors.blackAbsolute,
  0.7
)}`;

export const borderTopSize = 4;

export const borderTopColor = (theme, alpha = 1) =>
  fade(theme.palette.primary.main, alpha);

export const createBorderTop = (theme, alpha) =>
  `${borderTopSize}px solid ${borderTopColor(theme, alpha)}`;
