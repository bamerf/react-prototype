import React from "react";
import { Typography, makeStyles } from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { colors } from "../../data/colors";
import { rem } from "../../helpers/style";

const useStyles = makeStyles(
  {
    root: {
      display: "flex",
      alignItems: "center",
      width: "55%",
      marginLeft: "12rem",
      justifyContent: "space-evenly",
    },
    link: {
      display: "flex",

      alignItems: "center",
    },
    linkText: {
      paddingRight: rem(5),
      whiteSpace: "nowrap",
      fontWeight: 500,
    },
    arrow: {
      color: colors.gray4,
    },
  },
  { name: "HeaderNav" }
);

export default function HeaderNav() {
  const styles = useStyles();
  const links = [
    "Business toolkit",
    "Awareness posters",
    "Awareness training",
    "Phishing Simulations",
  ];

  return (
    <div className={styles.root}>
      {links.map((link, index) => (
        <div className={styles.link}>
          <Typography variant="h6" className={styles.linkText} key={index}>
            {link}
          </Typography>
          <KeyboardArrowDownIcon className={styles.arrow} />
        </div>
      ))}
    </div>
  );
}
