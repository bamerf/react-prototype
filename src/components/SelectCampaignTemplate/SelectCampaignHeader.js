import React, { useState } from "react";
import { makeStyles, Select, FormControl, InputLabel } from "@material-ui/core";
import SearchBar from "../SearchBar/SearchBar";
import { rem } from "../../helpers/style";

const useStyles = makeStyles(
  (theme) => ({
    sortSection: {
      paddingBottom: rem(30),
    },
    select: {
      minWidth: rem(180),
      marginRight: rem(10),
    },
  }),
  {
    name: "SelectCampaignHeader",
  }
);

export default function SelectCampaignHeader() {
  const styles = useStyles();

  const [country, setCountry] = useState("");
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");

  return (
    <div className={styles.sortSection}>
      <FormControl variant="outlined" className={styles.select}>
        <InputLabel>Country</InputLabel>
        <Select
          value={country}
          onChange={(event) => setCountry(event.targer.value)}
          label="Country"
        ></Select>
      </FormControl>
      <FormControl variant="outlined" className={styles.select}>
        <InputLabel>Category</InputLabel>
        <Select
          value={category}
          onChange={(event) => setCategory(event.targer.value)}
          label="Category"
        ></Select>
      </FormControl>
      <FormControl variant="outlined" className={styles.select}>
        <InputLabel>Difficulty</InputLabel>
        <Select
          value={difficulty}
          onChange={(event) => setDifficulty(event.targer.value)}
          label="Difficulty"
        ></Select>
      </FormControl>
      <SearchBar />
    </div>
  );
}
