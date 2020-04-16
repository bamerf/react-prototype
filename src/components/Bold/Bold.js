import React from "react";
import { Typography, makeStyles } from "@material-ui/core";
import { colors } from "../../data/colors";
import classnames from "classnames";

const useStyles = makeStyles(
  {
    text: {
      fontWeight: 800,
      color: colors.black,
      display: "contents",
    },
  },
  { name: "Bold" }
);

export default function Bold({ text, variant, className }) {
  const styles = useStyles();

  return (
    <Typography
      variant={variant}
      className={classnames(className, styles.text)}
    >
      {text}
    </Typography>
  );
}
