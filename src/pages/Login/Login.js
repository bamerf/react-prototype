import React from "react";
import { Typography, Link, makeStyles } from "@material-ui/core";
import BrandLogo from "../../components/BrandAssests/BrandLogo";
import LoginLady from "../../components/BrandAssests/LoginLady";
import LoginForm from "./LoginForm";
import LoginFooter from "../Login/LoginFooter";
import { rem } from "../../helpers/style";
import { css, jsx } from "@emotion/core";
/** @jsx jsx */

export default function Login() {
  return (
    <div>
      <BrandLogo type="logo" />
      <LoginLady />
      <Typography variant="h1" css={styles.welcome}>
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

const styles = {
  welcome: css`
    margin-top: ${rem(56.23)};
    margin-left: ${rem(88)};
    span {
      font-weight: bold;
    }
  `,
};
