import React from "react";
import { Typography, makeStyles } from "@material-ui/core";
import BrandLogo from "../../components/BrandAssests/BrandLogo";
import LoginLady from "../../components/BrandAssests/LoginLady";
import LoginForm from "./LoginForm";
import LoginFooter from "../Login/LoginFooter";
import { rem } from "../../helpers/style";

const useStyles = makeStyles(
  {
    welcome: {
      marginTop: rem(56.23),
      marginLeft: rem(88),
      "& span": {
        fontWeight: "bold",
      },
    },
    brandLogo: {
      width: rem(420),
      height: rem(53),
      marginTop: rem(80),
      marginLeft: rem(88),
    },
  },
  { name: "Login" }
);

export default function Login() {
  const styles = useStyles();

  return (
    <div>
      <BrandLogo className={styles.brandLogo} />
      <LoginLady />
      <Typography variant="h1" className={styles.welcome}>
        Welcome to{" "}
        <span>
          Cyber Aware <br />
          Security Portal
        </span>
      </Typography>
      <LoginForm />
      <LoginFooter />
    </div>
  );
}
