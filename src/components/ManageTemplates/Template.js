import React from "react";
import { makeStyles, Typography, Grid, Divider } from "@material-ui/core";
import { Visibility, Create, Clear } from "@material-ui/icons";
import { rem } from "../../helpers/style";
import { colors } from "../../data/colors";

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
    icon: {
      textAlign: "end",
      paddingRight: rem(40),
      "& svg": {
        color: colors.gray3,
      },
      "& svg:hover": {
        color: theme.palette.primary.main,
        transition: "all 300ms ease-out",
      },
      "& svg:not(:last-child)": {
        padding: `0 ${rem(5)}`,
      },
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
            <Visibility />
          ) : (
            <div className={styles.iconsContainer}>
              <Visibility />
              <Create />
              <Clear />
            </div>
          )}
        </Grid>
      </Grid>
      <Divider />
    </div>
  );
}
