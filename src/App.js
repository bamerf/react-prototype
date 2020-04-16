import React, { useMemo } from "react";
import { colors } from "./data/colors";
import {
  createMuiTheme,
  ThemeProvider,
  CircularProgress,
  makeStyles,
  fade,
} from "@material-ui/core";
import { Routes } from "./Routes/Routes";
import { BrowserRouter } from "react-router-dom";
import { rem } from "./helpers/style";
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

const sharedHeadingStyles = {
  color: colors.gray1,
  fontWeight: 500,
};

const sharedBodyStyles = {
  color: colors.gray3,
  lineHeight: 1.6342,
  fontWeight: 400,
};

const staticThemeProperties = {
  palette: {
    background: {
      default: colors.backgroundGray,
    },
    error: {
      main: colors.red,
    },
    warning: {
      main: colors.yellow,
    },
    success: {
      main: colors.lime,
    },
    text: {
      primary: colors.gray1,
      secondary: colors.gray3,
    },
  },
  typography: {
    // fontFamily: '"Montserrat", Arial, Helvetica, sans-serif',
    fontFamily: '"Nunito", Arial, Helvetica, sans-serif',
    //fontFamily: '"Roboto", Arial, Helvetica, sans-serif',
    //fontFamily: '"Catamaran", Arial, Helvetica, sans-serif',
    //fontFamily: '"Open Sans", Arial, Helvetica, sans-serif',
  },

  overrides: {
    MuiTypography: {
      h1: {
        ...sharedHeadingStyles,
        fontSize: rem(42),
        lineHeight: 1.14,
      },
      h2: {
        ...sharedHeadingStyles,
        fontSize: rem(32),
        lineHeight: 1.5,
      },
      h3: {
        ...sharedHeadingStyles,
        fontSize: rem(30),
        lineHeight: 1.16342,
      },
      h4: {
        ...sharedHeadingStyles,
        fontSize: rem(24),
        lineHeight: 1.16342,
      },
      h5: {
        ...sharedHeadingStyles,
        fontSize: rem(18),
        lineHeight: 1.11,
      },
      h6: {
        ...sharedHeadingStyles,
        fontSize: rem(16),
        lineHeight: 1.16342,
      },
      body1: {
        ...sharedBodyStyles,
        fontSize: rem(16),
      },
      body2: {
        ...sharedBodyStyles,
        fontSize: rem(16),
      },
      b: {
        fontWeight: 800,
      },
      button: {
        fontWeight: 500,
        label: {
          fontWeight: 500,
        },
      },
    },
    MuiInputBase: {
      input: {
        padding: rem(14),
        fontSize: rem(14),
        lineHeight: 1,
      },
    },
    MuiOutlinedInput: {
      input: {
        padding: rem(14),
        fontSize: rem(14),
      },
      root: {
        "&:hover:not($disabled):not($focused):not($error) $notchedOutline": {
          borderColor: "#a3a3a3",
        },
      },
    },
    MuiInputLabel: {
      outlined: {
        fontSize: rem(14),
        transform: "translate(14px, 16px) scale(1)",
        color: colors.gray4,
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: fade(colors.gray2, 0.1),
      },
    },
    MuiSvgIcon: {
      fontSizeLarge: {
        fontSize: rem(32),
      },
    },
    MuiButton: {
      iconSizeMedium: {
        "& > *:first-child": {
          fontSize: rem(18),
        },
      },
    },
    Button: {
      label: {
        fontWeight: 600,
        fontSize: rem(14),
      },
    },
  },
};

function App() {
  const styles = useStyles();
  // const brandColor = "#009ae4";
  const brandColor = "";
  const brandRequestSuccess = true;

  const theme = useMemo(() => {
    return createMuiTheme({
      ...staticThemeProperties,
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
