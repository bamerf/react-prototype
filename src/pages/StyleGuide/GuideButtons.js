import React from "react";
import { makeStyles } from "@material-ui/core";
import Button from "../../components/Button/Button";
import IconButton from "../../components/IconButton/IconButton";
import { Delete } from "@material-ui/icons";
import { rem } from "../../helpers/style";

const useStyles = makeStyles(
  {
    parent: {
      "& > *": {
        display: "block",
        margin: rem(20),
      },
    },
    iconButtons: {
      display: "flex",
      justifyContent: "space-between",
      padding: `0 ${rem(10)}`,
      width: rem(200),
    },
  },
  { name: "Buttons" }
);

export default function Buttons() {
  const styles = useStyles();

  return (
    <div className={styles.parent}>
      <Button>Primary button</Button>
      <Button kind="secondary">Secondary button</Button>
      <Button thick={true}>Primary thick</Button>
      <Button thick={true} kind="secondary">
        Secondary thick
      </Button>
      <Button elevated={true}>Primary elevated</Button>
      <Button thick={true} elevated={true}>
        Primary elevated thick
      </Button>
      <div className={styles.iconButtons}>
        <IconButton>
          <Delete />
        </IconButton>
        <IconButton variant="outlined">
          <Delete />
        </IconButton>
        <IconButton variant="elevated">
          <Delete />
        </IconButton>
      </div>
    </div>
  );
}
