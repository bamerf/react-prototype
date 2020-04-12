import React from "react";
import { makeStyles } from "@material-ui/core";
import classnames from "classnames";
import { colors } from "../../data/colors";

const useStyles = makeStyles(
  {
    root: (props) => ({
      backgroundColor: props.backgroundColor || colors.backgroundGray,
      overflowX: "hidden",
      height: "100vh",
    }),
  },
  { name: "Page" }
);

export default function Page(props) {
  const styles = useStyles(props);

  return (
    <div className={classnames(styles.root, props.className)}>
      {props.children}
    </div>
  );
}
