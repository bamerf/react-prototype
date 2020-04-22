import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import { colors } from "../../data/colors";

const useStyles = makeStyles(
  {
    colorTitle: {
      marginBottom: 0,
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
    <h3 className={styles.colorTitle}>{name}</h3>
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
