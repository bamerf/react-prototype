import React from "react";
import { makeStyles, TextField, InputAdornment } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { rem } from "../../helpers/style";
import IconButton from "../IconButton/IconButton";

const useStyles = makeStyles(
  (theme) => ({
    textField: {
      float: "right",
      "& > *": {
        padding: rem(0),
        height: rem(42),
      },
    },
  }),
  {
    name: "SearchBar",
  }
);

export default function SearchBar({ placeholder }) {
  const styles = useStyles();
  return (
    <TextField
      className={styles.textField}
      variant="outlined"
      placeholder={placeholder}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <IconButton className={styles.iconButton}>
              <Search className={styles.icon} />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}
