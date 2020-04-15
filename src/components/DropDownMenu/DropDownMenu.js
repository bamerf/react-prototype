import React, { useState } from "react";
import { Typography, makeStyles, Link, fade } from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { colors } from "../../data/colors";
import { rem } from "../../helpers/style";
import {
  createBorderTop,
  borderTopColor,
  boxShadowOn,
} from "../../helpers/style";
import classname from "classnames";

const transitionDetails = `all ${300}ms`;

const useStyles = makeStyles(
  (theme) => ({
    linkParent: {
      display: "flex",
      alignItems: "center",
    },
    menuParent: {},
    link: {
      color: colors.blackAbsolute,
      transition: transitionDetails,
      cursor: "pointer",
      "&:hover": {
        color: theme.palette.primary.main,
      },
    },
    links: {
      color: colors.blackAbsolute,
      textAlign: "right",
      cursor: "pointer",
      lineHeight: 2.5,
      transition: transitionDetails,
      padding: rem(20),
      "&:hover": {
        color: theme.palette.primary.main,
        textDecoration: "none",
      },
    },
    lonelyLink: {
      marginTop: rem(2),
    },
    arrow: {
      color: colors.gray4,
      paddingTop: rem(2),
    },
    menuContainer: {
      borderTop: createBorderTop(theme, 0),
      borderColor: borderTopColor(theme, 1),
      transition: transitionDetails,
      position: "absolute",
      padding: `${rem(8)} 0`,
      boxShadow: boxShadowOn,
      top: rem(70),
      zIndex: 2,
      backgroundColor: fade(colors.white, 1),
      borderRadius: 5,
    },
  }),
  { name: "DropdownMenu" }
);

const getPaths = (path) => {
  switch (path) {
    case "Business toolkit":
      return [
        "Business Toolkit",
        "Cyber Health Check",
        "Cyber Health Dashboard",
      ];
    case "Awareness training":
      return ["Training Awareness Courses", "Manage Awareness Training"];
    case "Phishing simulations":
      return [
        "Campaign Overview",
        "Add Campaign",
        "Manage Templates",
        "Phishing Reports",
      ];
    default:
      return [];
  }
};

export default function DropDownMenu(props) {
  const styles = useStyles();
  const pathNames = getPaths(props.path);
  const [showMenu, setShowMenu] = useState(1);

  const hoverOn = () => {
    setShowMenu(1);
  };

  const hoverOff = () => {
    setShowMenu(0);
  };

  return (
    <div
      className={styles.menuParent}
      onMouseEnter={hoverOn}
      onMouseLeave={hoverOff}
    >
      {props.path === "Awareness posters" ? (
        <div className={styles.linkParent}>
          <Typography
            variant="body2"
            className={classname(styles.link, styles.lonelyLink)}
          >
            {props.path}
          </Typography>
        </div>
      ) : (
        <div className={styles.linkParent}>
          <Typography variant="body2" className={styles.link}>
            {props.path}
          </Typography>
          <KeyboardArrowDownIcon className={styles.arrow} />
        </div>
      )}
      <div
        className={styles.menuContainer}
        style={{
          opacity: showMenu,
        }}
      >
        {pathNames.map((path) => {
          return (
            <div>
              <Link variant="body2" className={styles.links}>
                {path}
              </Link>
              <br></br>
            </div>
          );
        })}
      </div>
    </div>
  );
}
