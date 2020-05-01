import React from "react";
import { Switch, Route, Redirect } from "react-router";
import StyleGuide from "../pages/StyleGuide/StyleGuide";
import Login from "../pages/Login/Login";
import Home from "../pages/Home";
import PhishingSimulations from "../pages/PhishingSimulations";
import PartnerPortal from "../pages/PartnerPortal";
import DeveloperWindow from "../components/Developer/DeveloperWindow";

export const Routes = () => {
  const userLoggedIn = true;
  if (!userLoggedIn) {
    return (
      <Switch>
        <Route path="/styleguide" component={StyleGuide} />
        <Route path="/login" component={Login} />
        <Route path="/phishing-simulations" component={PhishingSimulations} />
        <Route path="/partner-portal" component={PartnerPortal} />
        <Redirect to="/login" />
      </Switch>
    );
  }
  return (
    <Switch>
      <Route path="/styleguide" component={StyleGuide} />
      <Route path="/home" component={Home} />
      <Route path="/phishing-simulations" component={PhishingSimulations} />
      <Route path="/partner-portal" component={PartnerPortal} />
      <Route path="/development" component={DeveloperWindow} />
      <Redirect to="/home" />
    </Switch>
  );
};
