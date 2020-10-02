import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import { colors } from "../../data/colors";

const useStyles = makeStyles(
  {
    colorTitle: {
      marginBottom: 5,
      textAlign: "center",
    },
    colorDisplay: {
      height: 100,
    },
  },
  { name: "Colors" }
);

const colorNames = Object.keys(colors);

const Color = ({ name, styles }) => (
  <Grid item xs={6} md={3}>
  <Typography variant="h6" className={styles.colorTitle}>{name}</Typography>
    <div
      className={styles.colorDisplay}
      style={{ backgroundColor: colors[name] }}
    />
  </Grid>
);

export default function Colors() {
  const styles = useStyles();

  return (
    <Grid container spacing={3}>
      {colorNames.map((color) => (
        <Color name={color} styles={styles} key={color} />
      ))}
    </Grid>
  );
}
