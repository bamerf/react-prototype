import React from "react";
import { BannerManSvg } from "../../assets/svg/BannerManSvg";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import classnames from "classnames";

const useStyles = makeStyles(
  {
    root: {
      position: "absolute",
      top: "5rem",
    },
  },
  { name: "BannerManSvg" }
);

export default function BannerMan({ className }) {
  const styles = useStyles();
  const theme = useTheme();
  return (
    <div className={classnames(className, styles.root)}>
      <BannerManSvg color={theme.palette.primary.main} />
    </div>
  );
}
