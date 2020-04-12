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
      height: rem(120),
      backgroundColor: colors.white,
      display: "flex",
      alignItems: "center",
    },
    brandLogo: {
      width: rem(320),
      marginLeft: rem(60),
    },
  },
  { name: "Header" }
);

export default function Header() {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <BrandLogo className={styles.brandLogo} />
      <HeaderNav />
      <ProfileButton />
    </div>
  );
}
