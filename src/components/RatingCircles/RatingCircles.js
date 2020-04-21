import React from "react";
import { makeStyles } from "@material-ui/core";
import { colors } from "../../data/colors";
import { rem } from "../../helpers/style";

const useStyles = makeStyles(
  (theme) => ({
    root: {
      display: "flex",
    },
    circles: {
      width: rem(12),
      height: rem(12),
      borderRadius: "50%",
      marginRight: rem(3),
      backgroundColor: colors.gray5,
    },
    filled: {
      width: rem(12),
      height: rem(12),
      borderRadius: "50%",
      marginRight: rem(3),
      backgroundColor: theme.palette.primary.main,
    },
  }),
  {
    name: "RatingCircles",
  }
);

export default function RatingCircles({ rating }) {
  const styles = useStyles();

  const getCircles = (count) => {
    return Array.from(Array(4), (e, i) => {
      let style = "circles";
      if (i < count) style = "filled";
      return <div className={styles[style]} key={i}></div>;
    });
  };

  return <div className={styles.root}>{getCircles(rating)}</div>;
}
