import React from "react";
import { makeStyles, Typography, Grid, Divider } from "@material-ui/core";
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
    inputWrapper: {
      height: "100%",
      display: "flex",
      alignItems: "center"
    },
    input: {
      border: "1px solid #E0E0E0",
      boxSizing: "border-box",
      borderRadius: 4,
      padding: `${rem(13)} ${rem(20)}`,
      width: rem(85),
      height: rem(50),
    }
  }),
  {
    name: "TemplateItem",
  }
);

export default function SelectItem({ title, description }) {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <Grid container spacing={3} className={styles.gridContainer}>
        <Grid item xs={10}>
          <div className={styles.gridTitle}>
            <Typography variant="h6" className={styles.title}>
              {title}
            </Typography>
            <Typography variant="body2">{description}</Typography>
          </div>
        </Grid>
        <div className={styles.inputWrapper}>
          <input type="text" className={styles.input} value="50" />
        </div>
      </Grid>
      <Divider />
    </div>
  );
}
