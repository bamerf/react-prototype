import React from "react";
import { makeStyles, Typography, fade } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import { colors } from "../../data/colors";
import { rem } from "../../helpers/style";
import classname from "classnames";

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
      fontSize: rem(22),
      fontWeight: 600,
      color: dark ? colors.gray1 : colors.white,
      position: "absolute",
      top: "50%",
      left: "53%",
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
    opened: {
      color: fade(theme.palette.primary.main, 0.4),
    },
    atRisk: {
      color: "white",
    },
    atRiskUnderLayer: {
      color: fade(colors.gray6, 0.2),
      position: "absolute",
      right: rem(0),
    },
  }),
  { name: "PercentCircle" }
);

export const PercentCircle = (props) => {
  const styles = useStyles(props);

  const getCircleType = (title) => {
    switch (title) {
      case "Opened":
        return styles["opened"];
      case "At risk":
        return styles["atRisk"];
      case "At risk under":
        return styles["atRiskUnderLayer"];
      default:
        return null;
    }
  };

  const { percentage, title, className } = props;

  return (
    <div className={className}>
      <div className={styles.circle}>
        <CircularProgress
          variant="static"
          value={100}
          size={100}
          className={classname(
            styles.progressUnderLayer,
            getCircleType(`${title} under`)
          )}
        />
        <CircularProgress
          variant="static"
          value={percentage}
          size={100}
          className={classname(styles.svg, getCircleType(title))}
        />
        <Typography variant="body2" className={styles.text}>
          {percentage}%
        </Typography>
      </div>
      <Typography variant="body1" className={styles.title}>
        {title}
      </Typography>
    </div>
  );
};
