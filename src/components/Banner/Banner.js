import React from "react";
import BannerWoman from "../BrandAssests/BannerWoman";
import { Typography, makeStyles } from "@material-ui/core";
import { colors } from "../../data/colors";
import { rem } from "../../helpers/style";

const useStyles = makeStyles(
  {
    root: {
      display: "flex",
      maxWidth: rem(1140),
    },
    textRoot: {
      marginLeft: rem(40),
      marginTop: rem(73),
    },
    title: {
      marginBottom: 10,
      color: colors.blackAbsolute,
    },
    description: {
      marginBottom: 60,
      lineHeight: "26px",
    },
    woman: {
      width: rem(330),
      position: "relative",
      top: "-1.60rem",
      right: `-${rem(200)}`,
      zIndex: 0,
    },
  },
  { name: "PhishingSimulations" }
);

export default function Banner() {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <div className={styles.textRoot}>
        <Typography className={styles.title} variant="h3">
          Welcome to <b>Phishing Simulations</b>
        </Typography>
        <Typography className={styles.description} variant="body2">
          Below is a summary of phishing campaigns that our team has put
          together, to match your particular needs.
          <br />
          Each campaign will be sent on the scheduled date. The results will
          then be available within 24 hours.
        </Typography>
      </div>
      <BannerWoman className={styles.woman} />
    </div>
  );
}
