import React from "react";
import { makeStyles, Typography, Grid, Divider } from "@material-ui/core";
import Button from "../Button/Button";
import { rem } from "../../helpers/style";
import { colors } from "../../data/colors";
import DotMenu from "../DotMenu/DotMenu";

const useStyles = makeStyles(
  (theme) => ({
    container: {
      height: rem(55),
      userSelect: "none",
    },
    grid: {
      width: "95%",
      height: "100%",
      alignItems: "center",
      marginLeft: rem(44),
    },
    actionsContainer: {
      display: "flex",
    },
  }),
  { name: "Template" }
);

export default function Template({ kind, name, description }) {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <Grid container className={styles.grid}>
        <Grid item xs={3}>
          <Typography variant="h6">{name}</Typography>
        </Grid>
        <Grid item xs={7}>
          <Typography variant="body2">{description}</Typography>
        </Grid>
        <Grid item xs={2} className={styles.icon}>
          {kind === "systemTemplate" ? (
            <Button kind="secondary">Preview</Button>
          ) : (
            <div className={styles.actionsContainer}>
              <Button kind="secondary">Preview</Button>
              <DotMenu />
            </div>
          )}
        </Grid>
      </Grid>
      <Divider />
    </div>
  );
}
