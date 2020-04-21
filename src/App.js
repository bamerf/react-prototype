import React, { useMemo } from "react";
import { colors } from "./data/colors";
import {
  createMuiTheme,
  ThemeProvider,
  CircularProgress,
  makeStyles,
} from "@material-ui/core";
import { Routes } from "./Routes/Routes";
import { BrowserRouter } from "react-router-dom";
import { globalThemeOptions } from "./data/theme";
import "./stylesheets/reset.css";

const useStyles = makeStyles(
  {
    spinner: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    },
  },
  { name: "App" }
);

function App() {
  const styles = useStyles();
  // const brandColor = "#009ae4";
  const brandColor = "";
  const brandRequestSuccess = true;

  const theme = useMemo(() => {
    return createMuiTheme({
      ...globalThemeOptions,
      palette: {
        primary: {
          main: brandColor || colors.lime,
        },
      },
    });
  }, [brandColor]);

  if (!brandRequestSuccess) {
    return (
      <div className={styles.spinner}>
        <CircularProgress />
      </div>
    );
  }

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
