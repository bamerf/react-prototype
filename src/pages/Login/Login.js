import React from "react";
import { Typography, makeStyles, Container } from "@material-ui/core";
// import BrandLogo from "../../components/BrandAssests/BrandLogo";
import LoginLady from "../../components/BrandAssests/LoginLady";
import LoginForm from "./LoginForm";
import LoginFooter from "../Login/LoginFooter";
import Page from "../../components/Page/Page";
import { rem } from "../../helpers/style";
import NavBar from '../../components/Nav/NavBar'
const useStyles = makeStyles(
  {
    page: {
      backgroundColor: "#F2F2F2",
    },
    container: {
      maxWidth: rem(1400),
      position: "relative",
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
    brandWomanContainer: {
      width: rem(600),
      position: "absolute",
      top: rem(60),
      right: rem(60),
      zIndex: 0,
    },
    leftSection: {
      zIndex: 1,
      position: "relative",
    },
  },
  { name: "Login" }
);

export default function Login() {
  const styles = useStyles();

  return (
    <Page className={styles.page}>
      <NavBar/>
      <Container className={styles.container}>
        <div className={styles.leftSection}>
          {/* <BrandLogo className={styles.brandLogo} /> */}
          <Typography variant="h2" className={styles.welcome}>
            Welcome to{" "}
            <span>
              React Prototype <br />
            </span>
          </Typography>
          <LoginForm />
          <LoginFooter />
        </div>
        <div className={styles.brandWomanContainer}>
          <LoginLady />
        </div>
      </Container>
    </Page>
  );
}
