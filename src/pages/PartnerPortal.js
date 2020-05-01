import React from "react";
import { Grid, makeStyles, Container } from "@material-ui/core";
import { Route, Redirect, Switch } from "react-router-dom";
import Page from "../components/Page/Page";
import Header from "../components/Header/Header";
import PartnerBanner from "../components/Banner/PartnerBanner";
import PartnerPortalNav from "../components/Nav/PartnerPortalNav";
import { colors } from "../data/colors";
import {
  partnerPortalRouteToComponent,
  partnerPortalRoutes,
} from "../components/Nav/PartnerPortalRoutes";
import { rem } from "../helpers/style";
import className from "classnames";

const useStyles = makeStyles(
  {
    content: {
      paddingTop: rem(12),
      paddingLeft: rem(20),
      paddingRight: rem(20),
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
    section: { 
      zIndex: 999,
    },
  },
  { name: "PartnerPortal" }
);

export default function PartnerPortal({ match }) {
  const styles = useStyles();

  return (
    <Page>
      <Header />
      <Container style={{ maxWidth: rem(1400) }}>
        <PartnerBanner />
        <div className={styles.content}>
          <Grid container className={styles.mainContent} spacing={3}>
            <Grid item xs={12} md={3}>
              <PartnerPortalNav />
            </Grid>
            <Grid
              item
              xs={12}
              md={9}
              className={className("m-clients", styles.section)}
            >
              <Switch>
                {Object.values(partnerPortalRoutes).map((route) => (
                  <Route
                    key={route}
                    path={`${match.url}/${route}`}
                    component={partnerPortalRouteToComponent(route)}
                  />
                ))}
                <Redirect
                  to={`${match.url}/${
                    Object.values(partnerPortalRoutes)[0]
                  }`}
                />
              </Switch>
            </Grid>
          </Grid>
        </div>
      </Container>
    </Page>
  );
}
