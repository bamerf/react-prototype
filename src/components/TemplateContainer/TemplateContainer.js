import React from "react";
import { makeStyles, Typography, Grid } from "@material-ui/core";
import { colors } from "../../data/colors";
import { rem } from "../../helpers/style";

const useStyles = makeStyles(
  (theme) => ({
    root: {
      width: "100%",
      flexGrow: 1,
    },
    header: {
      height: rem(50),
      backgroundColor: colors.gray6,
    },
    title: {
      marginLeft: rem(20),
    },
  }),
  {
    name: "TemplateContainer",
  }
);

export default function TemplateContainer({ children, name }) {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <Typography variant="body2" className={styles.title}>
              {name}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body2">Difficulty</Typography>
          </Grid>
        </Grid>
      </div>
      {children}
    </div>
  );
}
