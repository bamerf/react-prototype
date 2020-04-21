import React from "react";
import {
  makeStyles,
  TextField,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { colors } from "../../data/colors";
import { rem } from "../../helpers/style";

const useStyles = makeStyles(
  (theme) => ({
    textField: {
      float: "right",
      "& > *": {
        padding: rem(0),
        height: rem(42),
      },
    },
    iconButton: {
      padding: rem(5),
      marginLeft: rem(5),
    },
    icon: {
      color: colors.gray4,
    },
  }),
  {
    name: "SearchBar",
  }
);

export default function SearchBar() {
  const styles = useStyles();
  return (
    <TextField
      className={styles.textField}
      variant="outlined"
      placeholder="Search templates..."
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <IconButton component="span" className={styles.iconButton}>
              <Search className={styles.icon} />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}
