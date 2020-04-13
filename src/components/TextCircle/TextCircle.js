import React from "react";
import { makeStyles, Typography, fade } from "@material-ui/core";
import { colors } from "../../data/colors";
import { rem } from "../../helpers/style";

const useStyles = makeStyles(
  {
    circle: {
      width: rem(120),
      height: rem(120),
      backgroundColor: fade(colors.gray6, 0.5),
      borderRadius: "50%",
      position: "relative",
      marginBottom: rem(16),
    },
    text: {
      fontSize: rem(32),
      fontWeight: 700,
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      color: colors.gray1,
    },
    title: {
      color: colors.gray2,
      fontWeight: 500,
      lineHeight: 1,
      textAlign: "center",
    },
  },
  { name: "TextCircle" }
);

export const TextCircle = ({ text, title, className }) => {
  const styles = useStyles();

  return (
    <div className={className}>
      <div className={styles.circle}>
        <Typography variant="body1" className={styles.text}>
          {text}
        </Typography>
      </div>
      <Typography variant="body2" className={styles.title}>
        {title}
      </Typography>
    </div>
  );
};
