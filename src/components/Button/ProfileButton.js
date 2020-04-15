import React from "react";
import { makeStyles } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import { colors } from "../../data/colors";
import { rem } from "../../helpers/style";

const useStyles = makeStyles(
  (theme) => ({
    text: {
      width: 56,
      height: 56,
      backgroundColor: theme.palette.primary.main,
      marginRight: rem(30),
      letterSpacing: rem(2),
      fontSize: rem(20),
      color: colors.white,
    },
  }),
  { name: "ProfileButton" }
);

export default function ProfileButton() {
  const styles = useStyles();
  const initials = "JD"; // TODO: retrieve this from somewhere

  return (
    <div className={styles.root}>
      <Avatar className={styles.text}>{initials}</Avatar>
    </div>
  );
}
