import React from "react";
import {
  Typography as MuiTypography,
  Paper,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles(
  {
    itemTitle: {
      marginBottom: 5,
      marginTop: 15
    },
    paper: {
      padding: 12,
    },
  },
  { name: "Typography" }
);

const variants = [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "subtitle1",
  "subtitle2",
  "body1",
  "body2",
  "button",
  "caption",
  "overline",
];

export default function Typography() {
  const styles = useStyles();

  return (
    <div>
      {variants.map((variant) => (
        <div key={variant}>
          <MuiTypography variant="h6" className={styles.itemTitle}>
          {variant}
            </MuiTypography>
          <Paper className={styles.paper}>
            <MuiTypography variant={variant}>
              The quick brown cat jumped over the lazy dog.
            </MuiTypography>
          </Paper>
        </div>
      ))}
    </div>
  );
}
