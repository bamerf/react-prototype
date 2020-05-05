import React from "react";
import {
  makeStyles,
  Typography,
  TextField,
  Select,
  Paper,
  Divider,
} from "@material-ui/core";
import { Settings as SettingsIcon } from "@material-ui/icons";
import Button from "../Button/Button";
import InputLabel from "../InputLabel/InputLabel";
import { rem } from "../../helpers/style";
import { colors } from "../../data/colors";
import { createBorderTop } from "../../helpers/style";
import classnames from "classnames";

const useStyles = makeStyles(
  (theme) => ({
    container: {
      backgroundColor: colors.white,
      borderTop: createBorderTop(theme),
      marginBottom: rem(40),
    },
    header: {
      display: "flex",
      alignItems: "center",
      padding: `${rem(20)} ${rem(30)}`,
    },
    title: {
      display: "flex",
    },
    icon: {
      color: theme.palette.primary.main,
      marginRight: rem(24),
    },
    content: {
      paddingTop: rem(20),
      padding: `${rem(0)} ${rem(30)}`,
    },
    footer: {
      display: "flex",
      justifyContent: "flex-end",
      paddingBottom: rem(20),
      padding: `${rem(0)} ${rem(30)}`,
    },
    button: {
      marginLeft: "1rem",
      "& span": {
        padding: `${rem(8)} ${rem(5)}`,
      },
    },
    select: {
      height: rem(45),
    },
    inputs: {
      marginBottom: rem(35),
    },
    description: {
      margin: `${rem(16)} ${0}`,
    },
    contentParent: {
      display: "flex",
    },
    contentContainers: {
      width: "100%",
      padding: `${rem(15)} ${rem(10)}`,
    },
  }),
  { name: "Settings" }
);

export default function Settings() {
  const styles = useStyles();

  return (
    <Paper className={styles.container} elevation={3} variant="outlines">
      <div className={styles.header}>
        <SettingsIcon className={styles.icon} />
        <Typography variant="h4">Global Settings</Typography>
      </div>
      <Divider />
      <div className={styles.content}>
        <Typography varinat="body2" className={styles.description}>
          The following details are merged into simulated phishing campaigns.
          These settings will effect all the pending campaigns.
        </Typography>
        <div className={styles.contentParent}>
          <div className={styles.contentContainers}>
            <InputLabel label="Company">
              <TextField
                label="Company"
                type="text"
                variant="outlined"
                fullWidth
                className={styles.inputs}
              />
            </InputLabel>
            <InputLabel label="CEO">
              <TextField
                label="Full Name"
                type="text"
                variant="outlined"
                fullWidth
                className={styles.inputs}
              />
            </InputLabel>
            <InputLabel label="IT Manager">
              <TextField
                label="Full Name"
                type="text"
                variant="outlined"
                fullWidth
                className={styles.inputs}
              />
            </InputLabel>
          </div>
          <div className={styles.contentContainers}>
            <InputLabel label="Industry">
              <Select
                variant="outlined"
                fullWidth
                placeholder="IT"
                className={classnames(styles.select, styles.inputs)}
              ></Select>
            </InputLabel>
            <InputLabel label="City">
              <TextField
                label="City"
                type="text"
                variant="outlined"
                fullWidth
                className={styles.inputs}
              />
            </InputLabel>
            <InputLabel label="Send replies to Phiching campaigns to:">
              <TextField
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                className={styles.inputs}
              />
            </InputLabel>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <Button kind="primary" className={styles.button}>
          Save
        </Button>
      </div>
    </Paper>
  );
}
