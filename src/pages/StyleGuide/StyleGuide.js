import React from "react";
import { Redirect } from "react-router-dom";
import { Switch, Route } from "react-router";
import { Grid, makeStyles } from "@material-ui/core";
import GuideNav from "./GuideNav";
import GuideColors from "./GuideColors";
import GuideTypography from "./GuideTypography";
import GuideButtons from "./GuideButtons";
import GuideSwitches from "./GuideSwitches";
import GuideProgressCircles from "./GuideProgressCircles";
import Header from "../../components/Header/Header";
import Page from "../../components/Page/Page";

const useStyles = makeStyles(
  {
    grid: {
      padding: 42,
      maxWidth: 1440,
      margin: "auto",
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
    <Page style={{}}>
      <Header />
      <Grid container spacing={3} className={styles.grid}>
        <Grid item xs={12} md={3}>
          <GuideNav {...props} />
        </Grid>
        <Grid item xs={12} md={9} className={styles.content}>
          <Switch>
            <Route
              path={`${props.match.url}/typography`}
              component={GuideTypography}
            />
            <Route path={`${props.match.url}/colors`} component={GuideColors} />
            <Route
              path={`${props.match.url}/buttons`}
              component={GuideButtons}
            />
            <Route
              path={`${props.match.url}/switches`}
              component={GuideSwitches}
            />
            <Route
              path={`${props.match.url}/progresscircles`}
              component={GuideProgressCircles}
            />
            <Redirect to={`${props.match.url}/typography`} />
          </Switch>
        </Grid>
      </Grid>
    </Page>
  );
}
