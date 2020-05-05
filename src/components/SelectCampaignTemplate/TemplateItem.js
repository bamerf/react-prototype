import React from "react";
import { makeStyles, Typography, Grid, Divider } from "@material-ui/core";
import RatingCircles from "../RatingCircles/RatingCircles";
import { rem } from "../../helpers/style";

const useStyles = makeStyles(
  (theme) => ({
    root: {
      height: rem(80),
      margin: `${rem(20)} ${rem(0)}`,
    },
    gridContainer: {
      height: "100%",
      marginBottom: rem(7),
    },
    gridTitle: {
      marginTop: rem(10),
      paddingLeft: rem(20),
    },
    title: {
      paddingBottom: rem(5),
    },
    rightSection: {
      height: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    button: {
      display: "flex",
    },
  }),
  {
    name: "TemplateItem",
  }
);

export default function TemplateItem({ rating, title, description, children }) {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <Grid container spacing={3} className={styles.gridContainer}>
        <Grid item xs={8}>
          <div className={styles.gridTitle}>
            <Typography variant="h6" className={styles.title}>
              {title}
            </Typography>
            <Typography variant="body2">{description}</Typography>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className={styles.rightSection}>
            <RatingCircles rating={rating} />
            <div className={styles.button}>{children}</div>
          </div>
        </Grid>
      </Grid>
      <Divider />
    </div>
  );
}
