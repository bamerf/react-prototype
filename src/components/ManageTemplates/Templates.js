import React from "react";
import { makeStyles, Paper, Typography } from "@material-ui/core";
import { colors } from "../../data/colors";
import {
  createBorderTop,
  rem,
  boxShadowRight,
  boxShadowOff,
} from "../../helpers/style";

const useStyles = makeStyles(
  (theme) => ({
    contentContainer: {
      minHeight: rem(400),
      overflow: "auto",
      borderTopLeftRadius: rem(0),
    },
    contentHeader: {
      width: "100%",
      flexGrow: 1,
      height: rem(50),
      backgroundColor: colors.gray6,
      marginTop: rem(20),
    },
  }),
  { name: "Template" }
);

export default function Templates() {
  const styles = useStyles();

  return (
    <Paper className={styles.contentContainer} variant="outlines">
      <div className={styles.contentHeader}></div>
      <h2>Any content 1</h2>
    </Paper>
  );
}
