import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { colors } from "../../data/colors";
import { rem } from "../../helpers/style";
import classnames from "classnames";

const circleRadiusSize = 90;

const useStyles = makeStyles(
  (theme) => ({
    root: {
      width: "max-content",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    circle: {
      width: rem(circleRadiusSize),
      height: rem(circleRadiusSize),
      backgroundColor: colors.gray6,
      borderRadius: "50%",
      position: "relative",
      marginBottom: rem(16),
    },
    completed: {
      backgroundColor: theme.palette.primary.main,
      "& p": {
        color: colors.white,
      },
    },
    text: {
      fontSize: rem(18),
      fontWeight: 600,
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      color: colors.gray1,
    },
    title: {
      color: colors.gray2,
      fontSize: rem(12),
      fontWeight: 500,
      lineHeight: 1,
    },
  }),
  { name: "TextCircle" }
);

export default function TextCircle({
  text,
  title,
  className,
  completed = false,
}) {
  const { completed: completedStyle, ...styles } = useStyles();

  return (
    <div className={classnames(styles.root, className)}>
      <div
        className={classnames(
          { [completedStyle]: completed === true },
          styles.circle
        )}
      >
        <Typography variant="body2" className={styles.text}>
          {text}
        </Typography>
      </div>
      <Typography variant="body2" className={styles.title}>
        {title}
      </Typography>
    </div>
  );
}
