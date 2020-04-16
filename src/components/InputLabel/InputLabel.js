import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import classnames from "classnames";
import { colors } from "../../data/colors";
import { rem } from "../../helpers/style";

const useStyles = makeStyles(
  {
    root: {},
    label: {
      fontWeight: 500,
      color: colors.gray1,
      marginBottom: rem(9),
      fontSize : rem(14)
    },
  },
  { name: "InputLabel" }
);

export default function InputLabel({ label, className, children }) {
  const styles = useStyles();

  return (
    <div className={classnames(styles.root, className)}>
      <Typography variant="body2" className={styles.label}>
        {label}
      </Typography>
      {children}
    </div>
  );
}
