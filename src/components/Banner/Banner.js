import React from "react";
// import BannerWoman from "../BrandAssests/BannerWoman";
import { Typography, makeStyles } from "@material-ui/core";
import Bold from "../Bold/Bold";
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
      display: "inline-flex",
    },
    description: {
      marginBottom: 60,
      lineHeight: "26px",
    },
    woman: {
      width: rem(330),
      position: "relative",
      top: "-31px",
      right: `-7.5rem`,
      zIndex: 0,
    },
    bannerWomanContainer: {
      width: `-26px`,
      height: rem(0),
    },
  },
  { name: "PhishingSimulationsBanner" }
);

export default function Banner() {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <div className={styles.textRoot}>
        <Typography className={styles.title} variant="h3">
          Welcome to <Bold text="Dashboard" variant="h3" />
        </Typography>
        <Typography className={styles.description} variant="body2">
          Lorem ipsum dolor. Voluptatibus, dicta omnis officia voluptate iste eius nobis similique nisi exercitationem, quaerat ipsum?
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Typography>
      </div>
      <div className={styles.bannerWomanContainer}>
        {/* <BannerWoman className={styles.woman} /> */}
      </div>
    </div>
  );
}
