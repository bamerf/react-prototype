import React from "react";
import { makeStyles } from "@material-ui/core";
import DropDownMenu from "../DropDownMenu/DropDownMenu";
import { rem } from "../../helpers/style";

const useStyles = makeStyles(
  (theme) => ({
    root: {
      display: "flex",
      marginLeft: rem(240),
      width: "60%",
      justifyContent: "space-evenly",
    },
    linkParent: {
      display: "flex",
      alignItems: "center",
    },
  }),
  { name: "HeaderNav" }
);

export default function HeaderNav() {
  const styles = useStyles();

  const paths = [
    "Business toolkit",
    "Awareness posters",
    "Awareness training",
    "Phishing simulations",
  ];

  return (
    <div className={styles.root}>
      {paths.map((path, index) => (
        <DropDownMenu path={path} key={index} className={styles.linkRoot} />
      ))}
    </div>
  );
}
