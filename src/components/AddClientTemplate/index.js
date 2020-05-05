import React from "react";
import ModalWindow from "../Modals/ModalWindow";
import InputLabel from "../InputLabel/InputLabel";
import {
  Grid,
  TextField,
  Select,
} from "@material-ui/core";
import Button from "../Button/Button";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  btnWrapper: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "60px"
  }
}));

export default function AddClientTemplate({ open, callBack }) {
  const styles = useStyles();

  return (
    <ModalWindow
      open={open}
      callBack={callBack}
      title="Add Client"
      width={1000}
    >
      <div>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <InputLabel label="Company">
              <TextField
                type="text"
                variant="outlined"
                fullWidth
                label="Company"
              />
            </InputLabel>
          </Grid>
          <Grid item xs={6}>
            <InputLabel label="Contact Name">
              <TextField
                type="text"
                variant="outlined"
                fullWidth
                label="Contact name"
              />
            </InputLabel>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <InputLabel label="Email Address">
              <TextField
                type="text"
                variant="outlined"
                fullWidth
                label="Email address"
              />
            </InputLabel>
          </Grid>
          <Grid item xs={6}>
            <InputLabel label="Question set">
              <Select
                variant="outlined"
                fullWidth
                placeholder="Selct Question set"
              ></Select>
            </InputLabel>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <InputLabel label="Industry">
              <Select
                variant="outlined"
                fullWidth
                placeholder="Select Industry"
              ></Select>
            </InputLabel>
          </Grid>
          <Grid item xs={6}>
            <InputLabel label="Organization Size">
              <Select
                variant="outlined"
                fullWidth
                placeholder="Organization size"
              ></Select>
            </InputLabel>
          </Grid>
        </Grid>
        <div className={styles.btnWrapper}>
          <Button thick={true} kind="primary">Add</Button>
        </div>
      </div>
    </ModalWindow>
  );
}
