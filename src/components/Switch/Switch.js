import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Switch as MuiSwitch } from "@material-ui/core";
import { rem } from "../../helpers/style";
import { colors } from "../../data/colors";

const RoundSwitch = withStyles(
  (theme) => ({
    root: {
      width: 90,
      height: 44,
      padding: 0,
      margin: theme.spacing(1),
      overflow: "visible",
    },
    switchBase: {
      padding: 1,
      top: rem(3),
      left: rem(5),
      "&$checked": {
        transform: "translateX(31px)",
        color: theme.palette.common.white,
        "& + $track": {
          backgroundColor: theme.palette.primary.main,
          opacity: 1,
          border: "none",
        },
      },
      "&::before": {
        content: '"No"',
        color: colors.gray3,
        fontSize: 14,
        fontFamily: theme.typography.fontFamily,
        position: "absolute",
        top: rem(12),
        right: rem(15),
      },
    },
    thumb: {
      width: 47,
      height: 35,
      borderRadius: rem(50),
    },
    track: {
      borderRadius: rem(50),
      backgroundColor: colors.gray5,
      opacity: 1,
      transition: theme.transitions.create(["background-color", "border"]),
    },
    checked: {
      "&::before": {
        content: '"Yes"',
        color: colors.gray3,
        fontSize: 14,
        fontFamily: theme.typography.fontFamily,
        position: "absolute",
        top: rem(12),
        right: rem(13),
      },
    },
  }),
  { name: "Switch" }
)(({ classes, ...props }) => {
  return (
    <MuiSwitch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

export default function Switch() {
  const [state, setState] = useState(true);

  const handleChange = (event) => {
    setState(false);
  };

  return (
    <FormControlLabel
      control={
        <RoundSwitch checked={state.checkedB} onChange={handleChange} name="" />
      }
    />
  );
}
