import React from "react";
import { Typography, makeStyles } from "@material-ui/core";
import { colors } from "../../data/colors";
import { rem } from "../../helpers/style";

const useStyles = makeStyles(
  (theme) => ({
    root: {
      width: 56,
      height: 56,
      marginRight: rem(30),
      backgroundColor: theme.palette.primary.main,
      position: "relative",
      borderRadius: "50%",
      display: "inline-block",
      marginLeft: "auto",
      cursor: "pointer",
    },
    text: {
      textTransform: "uppercase",
      fontSize: "1.125rem",
      fontWeight: 700,
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
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
      <Typography variant="body1" className={styles.text}>
        {initials}
      </Typography>
    </div>
  );
}
