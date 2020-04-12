import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import classnames from "classnames";

const useStyles = makeStyles(
  {
    root: {
      display: "flex",
      alignItems: "center",
    },
    label: {
      marginRight: 8,
    },
  },
  { name: "LabelAndIcon" }
);

export const LabelAndIcon = ({ label, icon, className }) => {
  const styles = useStyles();

  return (
    <span className={classnames(styles.root, className)}>
      <Typography variant="body2" className={styles.label}>
        {label}
      </Typography>
      {icon}
    </span>
  );
};
