import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
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
import { rem } from "../helpers/style";
import className from "classnames";

const useStyles = makeStyles(
  {
    content: {
      paddingTop: rem(32),
      paddingLeft: rem(65),
      paddingRight: rem(67),
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
    section: {},
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
          <Grid
            item
            xs={12}
            md={9}
            className={className("aaa", styles.section)}
          >
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
