import React from "react";
import { Button as MuiButton, makeStyles } from "@material-ui/core";
import classnames from "classnames";
import { colors } from "../../data/colors";
import { rem } from "../../helpers/style";

const useStyles = makeStyles(
  {
    root: {
      borderRadius: 4,
      paddingTop: rem(10),
      paddingBottom: rem(10),
      paddingLeft: rem(20),
      paddingRight: rem(20),
    },
    label: {
      textTransform: "none",
      fontWeight: 500,
      color: colors.white,
      lineHeight: 1.2,
    },
    secondary: {
      borderColor: colors.gray6,
      "& $label": {
        color: colors.gray1,
      },
    },
    thick: {
      padding: rem(20),
    },
    elevated: {
      backgroundColor: colors.white,
      "& $label": {
        color: colors.gray1,
      },
      "&:hover": {
        backgroundColor: colors.gray6,
      },
    },
  },
  { name: "Button" }
);

const primaryButtonDefaultProps = {
  color: "primary",
  variant: "contained",
};

const secondaryButtonDefaultProps = {
  variant: "outlined",
};

export default function Button({
  kind = "primary",
  className,
  thick = false,
  elevated = false,
  ...rest
}) {
  const {
    secondary: secondaryStyle,
    thick: thickStyle,
    elevated: elevatedStyle,
    ...classes
  } = useStyles();

  const defaultProps =
    kind === "primary"
      ? primaryButtonDefaultProps
      : secondaryButtonDefaultProps;

  return (
    <MuiButton
      className={classnames(
        { [secondaryStyle]: kind === "secondary" },
        { [thickStyle]: thick === true },
        { [elevatedStyle]: elevated === true },
        className
      )}
      classes={classes}
      {...defaultProps}
      {...rest}
    ></MuiButton>
  );
}
