import React from "react";
import { BannerWomanSvg } from "../../assets/svg/BannerWomanSvg";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import classnames from "classnames";

const useStyles = makeStyles(
  {
    root: {
      position: "absolute",
      top: "5rem",
    },
  },
  { name: "BannerWomanSvg" }
);

export default function BannerWoman({ className }) {
  const styles = useStyles();
  const theme = useTheme();
  return (
    <div className={classnames(className, styles.root)}>
      <BannerWomanSvg color={theme.palette.primary.main} />
    </div>
  );
}
