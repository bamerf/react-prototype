import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Tooltip as MuiTooltip } from "@material-ui/core";

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}))(MuiTooltip);

export default function Tooltip({ children, title }) {
  return (
    <LightTooltip title={title} placement="top">
      {children}
    </LightTooltip>
  );
}
