import React, { useState } from "react";
import { withStyles, fade } from "@material-ui/core/styles";
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
  { name: "Round-switch" }
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

const SquareSwitch = withStyles(
  (theme) => ({
    root: {
      width: 90,
      height: 39,
      padding: 0,
      margin: theme.spacing(1),
      overflow: "visible",
      "&::after": {
        content: "''",
        width: 1,
        height: 39,
        position: "absolute",
        zIndex: 1,
        top: 2,
        bottom: 0,
        left: "50%",
        borderLeft: `2px solid ${colors.gray3}`,
        transform: "translate(-50%)",
      },
    },
    switchBase: {
      padding: 1,
      top: rem(3),
      left: rem(5),
      "&$checked": {
        transform: "translateX(44px)",
        "& + $track": {
          backgroundColor: fade(colors.white, 0),
          opacity: 1,
          border: `2px solid ${colors.gray3}`,
          "&::before": {
            color: colors.gray3,
          },
          "&::after": {
            color: colors.white,
          },
        },
      },
    },
    thumb: {
      width: rem(43),
      height: rem(39),
      borderBottomLeftRadius: rem(0),
      borderBottomRightRadius: rem(0),
      borderTopLeftRadius: rem(0),
      borderTopRightRadius: rem(0),
      position: "absolute",
      top: -1,
      right: -37,
      zIndex: 0,
      boxShadow: "none",
      backgroundColor: theme.palette.primary.main,
    },
    track: {
      borderRadius: rem(4),
      backgroundColor: fade(colors.white, 0),
      border: `2px solid ${colors.gray3}`,
      opacity: 1,
      zIndex: 1,
      transition: theme.transitions.create(["background-color", "border"]),
      "&::before": {
        content: "'Yes'",
        position: "absolute",
        color: colors.white,
        fontSize: 14,
        fontFamily: theme.typography.fontFamily,
        top: rem(14),
        right: rem(57),
      },
      "&::after": {
        content: "'No'",
        position: "absolute",
        color: colors.gray3,
        fontSize: 14,
        fontFamily: theme.typography.fontFamily,
        top: rem(14),
        right: rem(14),
      },
    },
    checked: {},
  }),
  { name: "Square-switch" }
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

export default function Switch({ kind }) {
  const [state, setState] = useState(true);

  const handleChange = (event) => {
    setState(false);
  };

  return (
    <div>
      {kind === "round" ? (
        <FormControlLabel
          control={
            <RoundSwitch
              checked={state.checkedB}
              onChange={handleChange}
              name=""
            />
          }
        />
      ) : (
        <FormControlLabel
          control={
            <SquareSwitch
              checked={state.checkedB}
              onChange={handleChange}
              name=""
            />
          }
        />
      )}
    </div>
  );
}
