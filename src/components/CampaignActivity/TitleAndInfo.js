import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import classnames from "classnames";
import { colors } from "../../data/colors";
import { rem } from "../../helpers/style";

const useStyles = makeStyles(
  {
    root: {
      color: colors.gray1,
      lineHeight: 1.8,
      marginBottom: rem(4),
      fontSize: rem(12),
    },
    info: {
      color: colors.gray3,
    },
  },
  { name: "TitleAndInfo" }
);

export const TitleAndInfo = ({ title, info, className }) => {
  const styles = useStyles();

  return (
    <Typography variant="body2" className={classnames(styles.root, className)}>
      <b>{title}:</b> <span className={styles.info}>{info}</span>
    </Typography>
  );
};
