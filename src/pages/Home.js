import React from "react";
// import { Typography } from "@material-ui/core";
import Page from "../components/Page/Page";
// import Button from "../components/Button/Button";
import NavBar from '../components/Nav/NavBar'


export default function Home() {
  // const userType = "admin";
  // const logout = () => {};
  return (
    <Page>
      {/* <Typography variant="h5">
        You are logged in as user type {userType}
      </Typography> */}
      {/* <Button onClick={logout}>Logout</Button> */}
      <NavBar/>
    </Page>
  );
}
