import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import { colors } from "../../data/colors";
import { rem } from "../../helpers/style";

const circleRadiusSize = 100;

const useStyles = makeStyles(
  (theme) => ({
    circle: {
      width: rem(circleRadiusSize),
      height: rem(circleRadiusSize),
      borderRadius: "50%",
      position: "relative",
      marginBottom: rem(16),
      backgroundColor: colors.gray6,
      "& :nth-child(2)": {
        transform: "rotate(180deg) !important",
      },
    },
    text: {
      width: rem(100),
      fontSize: rem(14),
      fontWeight: 600,
      color: colors.gray1,
      position: "absolute",
      top: rem(18),
      textAlign: "center",
    },
    title: {
      width: rem(100),
      fontSize: rem(12),
      position: "absolute",
      top: rem(35),
      textAlign: "center",
    },
    fullCircle: {
      color: colors.gray5,
      position: "absolute",
      right: rem(0),
    },
    progressCircle: {
      color: theme.palette.primary.main,
      "& svg": {
        strokeLinecap: "round",
      },
    },
    halfCircle: {
      width: rem(100),
      height: rem(53),
      backgroundColor: colors.backgroundGray,
      borderBottomLeftRadius: rem(90),
      borderBottomRightRadius: rem(90),
      position: "absolute",
      top: rem(50),
      right: rem(0),
    },
  }),
  { name: "PercentCircle" }
);

export default function HalfCircle(props) {
  const styles = useStyles(props);

  const { percentage, title, className } = props;

  return (
    <div className={className}>
      <div className={styles.circle}>
        <CircularProgress
          variant="static"
          value={100}
          size={circleRadiusSize}
          className={styles.fullCircle}
        />
        <CircularProgress
          variant="static"
          value={percentage / 2}
          size={circleRadiusSize}
          className={styles.progressCircle}
        />
        <div className={styles.halfCircle}></div>
        <Typography variant="body2" className={styles.text}>
          {percentage}%
        </Typography>
        <Typography variant="body2" className={styles.title}>
          {title}
        </Typography>
      </div>
    </div>
  );
}
