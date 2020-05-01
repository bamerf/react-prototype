import React from "react";
import BannerMan from "../BrandAssests/BannerMan";
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
    man: {
      width: rem(330),
      position: "relative",
      top: "-42px",
      right: `-7.5rem`,
      zIndex: 0,
    },
    bannerManContainer: {
      width: `-26px`,
      height: rem(0),
    },
  },
  { name: "PartnerPortalBanner" }
);

export default function Banner() {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <div className={styles.textRoot}>
        <Typography className={styles.title} variant="h3">
          <Bold text="Partner Portal" variant="h3" />
        </Typography>
        <Typography className={styles.description} variant="body2">
          Welcome to the Cyber Aware partner portal. Here you can create and manage client accounts and access
          <br />
          partner resources. If you have any questions pleasse reach out to our support team on 1300 29 29 67 or at
          <br />
          support@cyberaware.com
        </Typography>
      </div>
      <div className={styles.bannerManContainer}>
        <BannerMan className={styles.man} />
      </div>
    </div>
  );
}
