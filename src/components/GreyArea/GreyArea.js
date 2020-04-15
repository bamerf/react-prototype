import React from "react";
import { makeStyles, fade } from "@material-ui/core";
import classnames from "classnames";
import { colors } from "../../data/colors";
import { rem } from "../../helpers/style";

const useStyles = makeStyles(
  {
    root: {
      backgroundColor: fade(colors.gray6, 0.5),
      borderRadius: 4,
      padding: `${rem(32)} ${rem(30)}`,
    },
  },
  { name: "GrayArea" }
);

export default function GrayArea({ children, className }) {
  const styles = useStyles();

  return <div className={classnames(styles.root, className)}>{children}</div>;
}
