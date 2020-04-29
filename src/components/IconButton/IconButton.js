import React from "react";
import { makeStyles } from "@material-ui/core";
import { IconButton as MuiIconButton } from "@material-ui/core";
import { colors } from "../../data/colors";
import { rem, boxShadowOn } from "../../helpers/style";
import classnames from "classnames";

const useStyles = makeStyles(
  (theme) => ({
    iconButton: {
      padding: rem(5),
      marginLeft: rem(5),
      "& > *": {
        color: colors.gray4,
      },
    },
    outlined: {
      border: `${rem(1)} solid ${colors.gray5}`,
      borderRadius: 4,
      padding: rem(8),
      "& > *": {
        color: colors.gray4,
      },
    },
    elevated: {
      border: `${rem(1)} solid ${colors.gray5}`,
      backgroundColor: colors.white,
      borderRadius: 4,
      padding: `${rem(6)} ${rem(10)}`,
      boxShadow: boxShadowOn,
      "& > *": {
        color: colors.gray4,
      },
    },
  }),
  {
    name: "IconButton",
  }
);

export default function IconButton({ variant, children, className }) {
  const styles = useStyles();

  return (
    <div>
      {variant === "outlined" ? (
        <MuiIconButton className={classnames(styles.outlined, className)}>
          {children}
        </MuiIconButton>
      ) : variant === "elevated" ? (
        <MuiIconButton className={classnames(styles.elevated, className)}>
          {children}
        </MuiIconButton>
      ) : (
        <MuiIconButton className={classnames(styles.iconButton, className)}>
          {children}
        </MuiIconButton>
      )}
    </div>
  );
}
