import React from "react";
import { Button as MuiButton, makeStyles } from "@material-ui/core";
import classnames from "classnames";
import { colors } from "../../data/colors";
import { rem } from "../../helpers/style";

const useStyles = makeStyles(
  {
    root: {
      borderRadius: 5,
      paddingTop: rem(9),
      paddingBottom: rem(9),
    },
    label: {
      textTransform: "none",
      fontWeight: 600,
      color: colors.white,
      lineHeight: 1.2,
    },
    secondary: {
      borderColor: colors.gray5,
      "& $label": {
        color: colors.gray1,
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

export default function Button({ kind = "primary", className, ...rest }) {
  const { secondary: secondaryStyle, ...classes } = useStyles();
  const defaultProps =
    kind === "primary"
      ? primaryButtonDefaultProps
      : secondaryButtonDefaultProps;

  return (
    <MuiButton
      className={classnames(
        { [secondaryStyle]: kind === "secondary" },
        className
      )}
      classes={classes}
      {...defaultProps}
      {...rest}
    ></MuiButton>
  );
}
