import React from 'react'
import { Link } from "react-router-dom";
import { Typography, makeStyles } from "@material-ui/core";
import { rem } from "../../helpers/style";

const useStyles = makeStyles(
  {
    navText: {
      // textDecoration: "none",
      display: "inline",
      width: "max-content",
      padding: rem(10)
    },
    navBarParent: {
      margin: rem(20),
      display: "flex"
    }
  },
  { name: "NavBar" }
);

export default function NavBar() {
  const styles = useStyles();
  return (
    <div className={styles.navBarParent}>
      <Link to="/login" className={styles.navText}>
      <Typography variant="h6">Login</Typography>
        </Link>
      <Link to="/phishing-simulations" className={styles.navText}>
      <Typography variant="h6">Page I</Typography>
        </Link>
      <Link to="/partner-portal" className={styles.navText}>
      <Typography variant="h6">Page II</Typography>
        </Link>
      <Link to="/styleguide" className={styles.navText}>
      <Typography variant="h6">Style Guide</Typography>
        </Link>
    </div>
  )
}
