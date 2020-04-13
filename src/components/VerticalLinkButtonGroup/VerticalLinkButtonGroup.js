import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(
  {
    root: {
      display: "flex",
      justifyContent: "center",
    },
    wrapper: (props) => ({
      maxWidth: props.maxWidth || "none",
      flex: 1,
    }),
  },
  { name: "VerticalLinkButtonGroup" }
);

export const VerticalLinkButtonGroup = (props) => {
  const styles = useStyles(props);

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>{props.children}</div>
    </div>
  );
};
