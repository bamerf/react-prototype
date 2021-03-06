import React from "react";
import { makeStyles, Typography, fade } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import { colors } from "../../data/colors";
import { rem } from "../../helpers/style";

const circleRadiusSize = 90;

const useStyles = makeStyles(
  (theme) => ({
    circle: {
      width: rem(circleRadiusSize),
      height: rem(circleRadiusSize),
      borderRadius: "50%",
      position: "relative",
      marginBottom: rem(16),
      "& :nth-child(2)": {
        transform: "rotate(90deg) !important",
      },
    },
    text: ({ white }) => ({
      fontSize: rem(18),
      fontWeight: 600,
      color: white ? colors.white : colors.gray1,
      position: "absolute",
      top: "49%",
      left: "53%",
      transform: "translate(-50%, -50%)",
    }),
    title: ({ white }) => ({
      color: white ? colors.white : colors.gray2,
      fontWeight: 500,
      fontSize: rem(13),
      lineHeight: 1,
      textAlign: "center",
    }),
    fullCircle: ({ white }) => ({
      color: white ? fade(colors.gray6, 0.2) : fade(colors.gray6, 0.5),
      position: "absolute",
      right: rem(0),
    }),
    progressCircle: ({ white, light }) => ({
      color: white
        ? "white"
        : light
        ? fade(theme.palette.primary.main, 0.4)
        : theme.palette.primary.main,
      "& svg": {
        strokeLinecap: "round",
      },
    }),
  }),
  { name: "PercentCircle" }
);

export default function PercentCircle(props) {
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
          value={percentage}
          size={circleRadiusSize}
          className={styles.progressCircle}
        />
        <Typography variant="body2" className={styles.text}>
          {percentage}%
        </Typography>
      </div>
      <Typography variant="body2" className={styles.title}>
        {title}
      </Typography>
    </div>
  );
}
