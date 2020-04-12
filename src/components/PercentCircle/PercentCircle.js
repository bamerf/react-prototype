import React from "react";
import { makeStyles, Typography, fade } from "@material-ui/core";
import { colors } from "../../data/colors";
import { rem } from "../../helpers/style";

const useStyles = makeStyles(
  (theme) => ({
    circle: ({ dark }) => ({
      width: rem(100),
      height: rem(100),
      borderRadius: "50%",
      backgroundColor: dark
        ? fade(theme.palette.primary.main, 0.1)
        : fade(colors.white, 0.1),
      position: "relative",
      marginBottom: rem(16),
    }),
    text: ({ dark }) => ({
      fontSize: rem(28),
      fontWeight: 700,
      color: dark ? colors.gray1 : colors.white,
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    }),
    title: ({ dark }) => ({
      color: dark ? colors.gray2 : colors.white,
      fontWeight: 500,
      lineHeight: 1,
      textAlign: "center",
    }),
  }),
  { name: "PercentCircle" }
);

export const PercentCircle = (props) => {
  const styles = useStyles(props);

  const { percentage, title, className } = props;

  return (
    <div className={className}>
      <div className={styles.circle}>
        <Typography variant="body1" className={styles.text}>
          {percentage}%
        </Typography>
      </div>
      <Typography variant="body2" className={styles.title}>
        {title}
      </Typography>
    </div>
  );
};
