import React from "react";
import { NavLink } from "react-router-dom";
import { Typography, makeStyles, fade } from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import classnames from "classnames";
import { colors } from "../../data/colors";
import {
  boxShadowOn,
  boxShadowOff,
  createBorderTop,
  borderTopColor,
  borderTopSize,
  rem,
} from "../../helpers/style";

const paddingVertical = 20;
const transitionTimeMs = 300;

const useStyles = makeStyles(
  (theme) => ({
    root: {
      borderTop: createBorderTop(theme, 0),
      transitionDuration: `${transitionTimeMs}ms`,
      transitionProperty: "border-color, background-color, box-shadow",
      boxShadow: boxShadowOff,
      backgroundColor: fade(colors.gray6, 0),
      display: "flex",
      padding: `${rem(paddingVertical - borderTopSize)} ${rem(12)} ${rem(
        paddingVertical
      )}`,
      alignItems: "center",
      textDecoration: "none",
      borderRadius: 4,
      "&:not(:last-child)": {
        marginBottom: rem(8),
      },
      "&:hover:not($rootActive)": {
        boxShadow: boxShadowOn,
        backgroundColor: fade(colors.gray6, 1),
      },
      // [theme.breakpoints.up("lg")]: {
      //   padding: `${rem(paddingVertical - borderTopSize)} ${rem(22)} ${rem(
      //     paddingVertical
      //   )}`,
      // },
    },
    icon: {
      color: colors.gray4,
      transition: `color ${transitionTimeMs}ms`,
      marginRight: rem(8),
      width: rem(26),
      height: rem(26),
      marginTop: rem(1),
      [theme.breakpoints.up("lg")]: {
        marginRight: rem(22),
        width: rem(25),
        height: rem(25),
      },
    },
    text: {
      transition: `color ${transitionTimeMs}ms`,
      marginRight: rem(8),
      // fontSize: rem(14),
      color: colors.gray3,
      fontWeight: 500,
      [theme.breakpoints.up("lg")]: {
        marginRight: rem(22),
        // fontSize: rem(14),
      },
    },
    chevron: {
      color: colors.gray4,
      marginLeft: "auto",
    },
    rootActive: {
      borderColor: borderTopColor(theme, 1),
      backgroundColor: fade(colors.white, 1),
      boxShadow: boxShadowOn,
      "& $icon": {
        color: theme.palette.primary.main,
      },
      "& $text": {
        color: colors.gray1,
      },
    },
  }),
  { name: "TabLinkButton" }
);

export default function TabLinkButton({ to, text, Icon, className }) {
  const styles = useStyles();

  return (
    <NavLink
      className={classnames(className, styles.root)}
      activeClassName={styles.rootActive}
      to={to}
      exact={true}
    >
      <Icon className={styles.icon} color="primary" fontSize="large" />
      <Typography variant="body2" className={styles.text}>
        {text}
      </Typography>
      <ChevronRightIcon className={styles.chevron} />
    </NavLink>
  );
}
