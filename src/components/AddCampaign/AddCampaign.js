import React from "react";
import {
  makeStyles,
  Divider,
  Typography,
  Grid,
  TextField,
  Select,
  Checkbox,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import { rem, boxShadowOn, createBorderTop } from "../../helpers/style";
import { colors } from "../../data/colors";
import GrayArea from "../GreyArea/GreyArea";
import Button from "../Button/Button";
import InputLabel from "../InputLabel/InputLabel";
import Expansion from "../Expansion/Expansion";

const paddingSides = 28;
const extraPaddingSides = 24;

const useStyles = makeStyles(
  (theme) => ({
    root: {
      backgroundColor: colors.white,
      boxShadow: boxShadowOn,
      borderTop: createBorderTop(theme),
      borderRadius: 8,
      overflow: "hidden",
    },
    top: {
      padding: rem(paddingSides),
      display: "flex",
      alignItems: "center",
    },
    topIcon: {
      marginRight: rem(24),
    },
    content: {
      padding: `${rem(20)} ${rem(28)} ${rem(32)}`,
    },
    main: {
      "& > *:not(:last-child)": {
        marginBottom: rem(18),
      },
    },
    paypal: {
      "& > *:first-child": {
        marginBottom: rem(6),
      },
    },
    emailDetails: {
      padding: `${rem(8)} ${rem(extraPaddingSides)}`,
      "& > *:not(:last-child)": {
        marginBottom: rem(24),
      },
    },
    expansionTitle: {
      color: colors.gray1,
    },
    attachmentDetails: {
      padding: `0 ${rem(extraPaddingSides)}`,
    },
    advancedSettings: {
      padding: `${rem(24)} ${rem(extraPaddingSides)} ${rem(16)}`,
      width: "100%",
    },
    bottom: {
      display: "flex",
      justifyContent: "flex-end",
      "& > *:not(:last-child)": {
        marginRight: rem(16),
      },
    },
    attachmentDetailsLeft: {
      display: "flex",
    },
    attachmentDetailsLeftTitle: {
      fontWeight: 500,
      color: colors.gray1,
    },
    attachmentDetailsLeftCheckboxWrapper: {
      marginRight: rem(8),
    },
  }),
  { name: "AddCampaign" }
);

export default function AddCampaign() {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <div className={styles.top}>
        <AddIcon color="primary" className={styles.topIcon} fontSize="large" />
        <Typography variant="h4">Add to Schedule</Typography>
      </div>
      <Divider />
      <div className={styles.content}>
        <div className={styles.main}>
          <GrayArea>
            <Button
              kind="secondary"
              startIcon={<InsertDriveFileIcon color="primary" />}
            >
              Select campaign template
            </Button>
          </GrayArea>
          <GrayArea className={styles.paypal}>
            <Typography variant="h6">PayPal - Suspended Account</Typography>
            <Typography variant="body2">
              PayPal has noticed suspicious activity and a request to login and
              stop a transaction.
            </Typography>
          </GrayArea>
          <div className={styles.emailDetails}>
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <InputLabel label="Send campaign date">
                  <Select
                    variant="outlined"
                    fullWidth
                    placeholder="Select date"
                  ></Select>
                </InputLabel>
              </Grid>
              <Grid item xs={4}>
                <InputLabel label="Sending group">
                  <Select
                    variant="outlined"
                    fullWidth
                    placeholder="Select date"
                  ></Select>
                </InputLabel>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <InputLabel label="Sending email address">
                  <Select
                    variant="outlined"
                    fullWidth
                    placeholder="Select date"
                  ></Select>
                </InputLabel>
              </Grid>
              <Grid item xs={4}>
                <InputLabel label="Send from name">
                  <TextField
                    type="text"
                    variant="outlined"
                    fullWidth
                    placeholder="Name"
                  />
                </InputLabel>
              </Grid>
              <Grid item xs={4}>
                <InputLabel label="Email subject">
                  <TextField
                    type="text"
                    variant="outlined"
                    fullWidth
                    placeholder="Subject"
                  />
                </InputLabel>
              </Grid>
            </Grid>
          </div>
          <Expansion
            title={
              <Typography variant="body1" className={styles.expansionTitle}>
                <b>Attachment</b> (optional)
              </Typography>
            }
          >
            <div className={styles.advancedSettings}>
              <Grid container spacing={3} className={styles.attachmentDetails}>
                <Grid item xs={6} className={styles.attachmentDetailsLeft}>
                  <div className={styles.attachmentDetailsLeftCheckboxWrapper}>
                    <Checkbox color="primary" />
                  </div>
                  <div>
                    <Typography
                      variant="body2"
                      className={styles.attachmentDetailsLeftTitle}
                    >
                      Include trackable word document attachment
                    </Typography>
                    <Typography variant="body2">
                      Document open and embedded clicks are tracked in the
                      campaign reporting.
                    </Typography>
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <InputLabel label="Attachment file name">
                    <TextField
                      type="text"
                      variant="outlined"
                      fullWidth
                      placeholder="File name"
                    />
                  </InputLabel>
                </Grid>
              </Grid>
            </div>
          </Expansion>
          <Expansion
            title={
              <Typography variant="body1" className={styles.expansionTitle}>
                <b>Advanced settings</b> (optional)
              </Typography>
            }
          >
            <div className={styles.advancedSettings}>
              <Grid container spacing={3}>
                <Grid item xs={4}>
                  <InputLabel label="Click location URL">
                    <TextField
                      variant="outlined"
                      fullWidth
                      placeholder="http://google.com"
                    />
                  </InputLabel>
                </Grid>
                <Grid item xs={4}>
                  <InputLabel label="Tag failed learners">
                    <Button
                      kind="secondary"
                      startIcon={<AddIcon color="primary" />}
                      fullWidth
                    >
                      Add tag(s)
                    </Button>
                  </InputLabel>
                </Grid>
                <Grid item xs={4}>
                  <InputLabel label="Campaign duration">
                    <Select
                      variant="outlined"
                      fullWidth
                      placeholder="Send all at the same time"
                    ></Select>
                  </InputLabel>
                </Grid>
              </Grid>
            </div>
          </Expansion>
          <Divider />
          <div className={styles.bottom}>
            <Button kind="secondary">Cancel</Button>
            <Button>Save campaign</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
