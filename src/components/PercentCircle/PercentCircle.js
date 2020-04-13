import React from "react";
import { makeStyles, Typography, fade, useTheme } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import { colors } from "../../data/colors";
import { rem } from "../../helpers/style";

const useStyles = makeStyles(
  (theme) => ({
    circle: ({ dark }) => ({
      width: rem(100),
      height: rem(100),
      borderRadius: "50%",
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
    progressUnderLayer: {
      color: fade(colors.gray6, 0.5),
      position: "absolute",
      right: rem(0),
    },
    svg: {
      strokeLinecap: "round",
    },
  }),
  { name: "PercentCircle" }
);

export const PercentCircle = (props) => {
  const styles = useStyles(props);
  const theme = useTheme();

  const { percentage, title, className } = props;

  return (
    <div className={className}>
      <div className={styles.circle}>
        <CircularProgress
          variant="static"
          value={100}
          size={100}
          className={styles.progressUnderLayer}
        />
        <CircularProgress
          variant="static"
          value={75}
          size={100}
          className={styles.svg}
        />
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
