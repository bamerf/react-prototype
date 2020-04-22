import React from "react";
import { makeStyles } from "@material-ui/core";
import Button from "../../components/Button/Button";

const useStyles = makeStyles(
  {
    row: {
      margin: "20px 0",
    },
  },
  { name: "Buttons" }
);

export default function Buttons() {
  const styles = useStyles();

  return (
    <div>
      <div className={styles.row}>
        <Button>Primary button</Button>
      </div>
      <div className={styles.row}>
        <Button kind="secondary">Secondary button</Button>
      </div>
      <div className={styles.row}>
        <Button thick={true}>Primary thick</Button>
      </div>
      <div className={styles.row}>
        <Button thick={true} kind="secondary">
          Secondary thick
        </Button>
      </div>
    </div>
  );
}
