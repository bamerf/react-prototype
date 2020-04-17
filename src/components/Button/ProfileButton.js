import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import { colors } from "../../data/colors";
import { rem } from "../../helpers/style";

const useStyles = makeStyles(
  (theme) => ({
    root: {
      marginLeft: rem(10),
    },
    text: {
      backgroundColor: theme.palette.primary.main,
      letterSpacing: rem(2),
      fontSize: rem(14),
      color: colors.white,
    },
    initials: {
      paddingLeft: rem(3),
      color: colors.white,
      fontSize: rem(14),
    },
  }),
  { name: "ProfileButton" }
);

export default function ProfileButton() {
  const styles = useStyles();
  const initials = "JD"; // TODO: retrieve this from somewhere

  return (
    <div className={styles.root}>
      <Avatar className={styles.text}>
        <Typography variant="body2" className={styles.initials}>
          {initials}
        </Typography>
      </Avatar>
    </div>
  );
}
