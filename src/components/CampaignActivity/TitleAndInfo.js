import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import classnames from "classnames";
import { colors } from "../../data/colors";
import { rem } from "../../helpers/style";

const useStyles = makeStyles(
  {
    root: {
      color: colors.gray1,
      lineHeight: 1.4,
      marginBottom: rem(4),
    },
  },
  { name: "TitleAndInfo" }
);

export const TitleAndInfo = ({ title, info, className }) => {
  const styles = useStyles();

  return (
    <Typography variant="body2" className={classnames(styles.root, className)}>
      <b>{title}:</b> {info}
    </Typography>
  );
};
