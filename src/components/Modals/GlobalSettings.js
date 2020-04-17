import React from "react";
import { makeStyles, Typography, TextField, Select } from "@material-ui/core";
import InputLabel from "../InputLabel/InputLabel";
import ModalWindow from "./ModalWindow";
import Button from "../Button/Button";
import { rem } from "../../helpers/style";

const useStyles = makeStyles(
  (theme) => ({
    button: {
      marginLeft: "1rem",
      "& span": {
        padding: `${rem(8)} ${rem(5)}`,
      },
    },
    description: {
      margin: `${rem(16)} ${0}`,
    },
    contentParent: {
      display: "flex",
      justifyContent: "space-between",
    },
    contentContainers: {
      width: "100%",
      padding: `${rem(15)} ${rem(10)}`,
      "& div": {
        marginBottom: rem(10),
      },
    },
  }),
  { name: "globalSettingsModal" }
);

export default function GlobalSettings() {
  const open = true;
  const styles = useStyles();

  return (
    <ModalWindow
      open={open}
      title="Global Settings"
      button={
        <div>
          <Button kind="primary" className={styles.button}>
            Save
          </Button>
        </div>
      }
    >
      <Typography varinat="body2" className={styles.description}>
        The following details are merged into soimulated phishing campaigns.
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
            />
          </InputLabel>
          <InputLabel label="CEO">
            <TextField
              label="Full Name"
              type="text"
              variant="outlined"
              fullWidth
            />
          </InputLabel>
          <InputLabel label="IT Manager">
            <TextField
              label="Full Name"
              type="text"
              variant="outlined"
              fullWidth
            />
          </InputLabel>
        </div>
        <div className={styles.contentContainers}>
          <InputLabel label="Industry">
            <Select variant="outlined" fullWidth placeholder="IT"></Select>
          </InputLabel>
          <InputLabel label="City">
            <TextField label="City" type="text" variant="outlined" fullWidth />
          </InputLabel>
          <InputLabel label="Send replies to Phiching campaigns to:">
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
            />
          </InputLabel>
        </div>
      </div>
    </ModalWindow>
  );
}
