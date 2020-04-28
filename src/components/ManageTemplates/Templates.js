import React from "react";
import { makeStyles, Paper, Typography, Grid } from "@material-ui/core";
import { colors } from "../../data/colors";
import { rem } from "../../helpers/style";

const useStyles = makeStyles(
  (theme) => ({
    contentContainer: {
      minHeight: rem(400),
      maxHeight: rem(400),
      marginBottom: rem(40),
      overflow: "auto",
      borderTopLeftRadius: rem(0),
    },
    grid: {
      width: "95%",
      height: "100%",
      alignItems: "center",
      marginLeft: rem(44),
    },
    contentHeader: {
      width: "100%",
      flexGrow: 1,
      height: rem(50),
      backgroundColor: colors.gray6,
      marginTop: rem(25),
      marginBottom: rem(10),
    },
    icon: {
      textAlign: "end",
      paddingRight: rem(60),
    },
  }),
  { name: "Templates" }
);

export default function Templates({ children }) {
  const styles = useStyles();

  return (
    <Paper className={styles.contentContainer} variant="elevation">
      <div className={styles.contentHeader}>
        <Grid container className={styles.grid}>
          <Grid item xs={3}>
            <Typography variant="body2">Template Name</Typography>
          </Grid>
          <Grid item xs={7}>
            <Typography variant="body2">Description</Typography>
          </Grid>
          <Grid item xs={2} className={styles.icon}></Grid>
        </Grid>
      </div>
      {children}
    </Paper>
  );
}
