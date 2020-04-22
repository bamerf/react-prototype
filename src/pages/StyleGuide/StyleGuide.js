import React from "react";
import { Redirect } from "react-router-dom";
import { Switch, Route } from "react-router";
import { Grid, makeStyles } from "@material-ui/core";
import Nav from "./Nav";
import Colors from "./Colors";
import Typography from "./Typography";
import Buttons from "./Buttons";
import Header from "../../components/Header/Header";
import Page from "../../components/Page/Page";

const useStyles = makeStyles(
  {
    grid: {
      padding: 42,
    },
    content: {
      paddingTop: 42,
    },
  },
  { name: "StyleGuide" }
);

export default function StyleGuide(props) {
  const styles = useStyles();

  return (
    <Page>
      <Header />
      <Grid container spacing={3} className={styles.grid}>
        <Grid item xs={12} md={3}>
          <Nav {...props} />
        </Grid>
        <Grid item xs={12} md={9} className={styles.content}>
          <Switch>
            <Route
              path={`${props.match.url}/typography`}
              component={Typography}
            />
            <Route path={`${props.match.url}/colors`} component={Colors} />
            <Route path={`${props.match.url}/buttons`} component={Buttons} />
            <Redirect to={`${props.match.url}/typography`} />
          </Switch>
        </Grid>
      </Grid>
    </Page>
  );
}
