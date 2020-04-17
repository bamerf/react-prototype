import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { makeStyles } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles(
  (theme) => ({
    checkBox: {},
  }),
  { name: "generateLinkModal" }
);

export default function CheckBox(props) {
  const styles = useStyles();

  return (
    <FormControlLabel
      control={
        <Checkbox
          className={styles.checkBox}
          checked={props.checked}
          name={props.name}
          color="primary"
        />
      }
      label={props.label}
    />
  );
}
