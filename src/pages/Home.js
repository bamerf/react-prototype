import React from "react";
import { Typography } from "@material-ui/core";
import Page from "../components/Page/Page";
import Button from "../components/Button/Button";
import { Link } from "react-router-dom";

export default function Home() {
  const userType = "admin";
  const logout = () => {};
  return (
    <Page>
      <Typography variant="h5">
        You are logged in as user type {userType}
      </Typography>
      <Button onClick={logout}>Logout</Button>
      <br />
      <Link to="/phishing-simulations">Phishing Simulations</Link>
      <br />
      <Link to="/partner-portal">Partner Portal</Link>
      <br />
      <Link to="/styleguide">Style Guide</Link>
    </Page>
  );
}
