import React from "react";
import { makeStyles } from "@material-ui/core";
import BrandLogo from "../BrandAssests/BrandLogo";
import HeaderNav from "../Nav/HeaderNav";
import ProfileButton from "../Button/ProfileButton";
import { colors } from "../../data/colors";
import { rem } from "../../helpers/style";

const useStyles = makeStyles(
  {
    root: {
      height: rem(100),
      width: "100%",
      display: "flex",
      justifyContent: "center",
      backgroundColor: colors.white,
    },
    container: {
      maxWidth: rem(1140),
      width: "inherit",
      display: "flex",
      alignItems: "center",
    },
    brandLogo: {
      width: rem(200),
      marginLeft: rem(30),
    },
  },
  { name: "Header" }
);

export default function Header() {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <BrandLogo className={styles.brandLogo} />
        <HeaderNav />
        <ProfileButton />
      </div>
    </div>
  );
}
