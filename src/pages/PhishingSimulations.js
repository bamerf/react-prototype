import React from "react";
import { Typography, Grid, makeStyles } from "@material-ui/core";
import { Route, Redirect, Switch } from "react-router-dom";
import Page from "../components/Page/Page";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import PhishingSimulationsNav from "../components/Nav/PhishingSimulationsNav";
import { colors } from "../data/colors";
import {
  phishingSimulationsRouteToComponent,
  phishingSimulationsRoutes,
} from "../components/Nav/PhishingSimulationsRoutes";

const useStyles = makeStyles(
  {
    content: {
      padding: "40px 30px",
    },
    title: {
      marginBottom: 10,
      color: colors.blackAbsolute,
    },
    description: {
      marginBottom: 60,
      lineHeight: "26px",
    },
    mainContent: {},
  },
  { name: "PhishingSimulations" }
);

export default function PhishingSimulations({ match }) {
  const styles = useStyles();

  return (
    <Page>
      <Header />
      <Banner />
      <div className={styles.content}>
        <Grid container className={styles.mainContent} spacing={3}>
          <Grid item xs={12} md={3}>
            <PhishingSimulationsNav />
          </Grid>
          <Grid item xs={12} md={9} className="aaa">
            <Switch>
              {Object.values(phishingSimulationsRoutes).map((route) => (
                <Route
                  key={route}
                  path={`${match.url}/${route}`}
                  component={phishingSimulationsRouteToComponent(route)}
                />
              ))}
              <Redirect
                to={`${match.url}/${
                  Object.values(phishingSimulationsRoutes)[0]
                }`}
              />
            </Switch>
          </Grid>
        </Grid>
      </div>
    </Page>
  );
}
