import React from "react";
import { Typography, makeStyles, Container } from "@material-ui/core";
import BrandLogo from "../../components/BrandAssests/BrandLogo";
import LoginLady from "../../components/BrandAssests/LoginLady";
import LoginForm from "./LoginForm";
import LoginFooter from "../Login/LoginFooter";
import Page from "../../components/Page/Page";
import { rem } from "../../helpers/style";

const useStyles = makeStyles(
  {
    container: {
      maxWidth: rem(1400),
    },
    welcome: {
      marginTop: rem(30),
      marginLeft: rem(88),
      "& span": {
        fontWeight: "bold",
      },
    },
    brandLogo: {
      width: rem(320),
      height: rem(43),
      marginTop: rem(50),
      marginLeft: rem(88),
    },
    brandWoman: {
      width: rem(900),
    },
  },
  { name: "Login" }
);

export default function Login() {
  const styles = useStyles();

  return (
    <Page>
      <Container className={styles.container}>
        <div>
          <BrandLogo className={styles.brandLogo} />
          <Typography variant="h2" className={styles.welcome}>
            Welcome to{" "}
            <span>
              Cyber Aware <br />
              Security Portal
            </span>
          </Typography>
          <LoginForm />
          <LoginFooter />
        </div>
        <div>
          <LoginLady className={styles.brandWoman} />
        </div>
      </Container>
    </Page>
  );
}
