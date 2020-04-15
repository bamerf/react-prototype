import React from "react";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  makeStyles,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import classnames from "classnames";
import { colors } from "../../data/colors";
import { rem } from "../../helpers/style";

const useStyles = makeStyles(
  {
    root: {
      boxShadow: "none",
    },
    header: {
      backgroundColor: colors.gray6,
      padding: rem(18),
      minHeight: "auto",
      transition: "none",
      "& .MuiExpansionPanelSummary-content": {
        margin: 0,
        transition: "none",
      },
      "& .MuiExpansionPanelSummary-expandIcon": {
        paddingTop: 0,
        paddingBottom: 0,
      },
    },
    collapse: {
      padding: `${rem(8)} 0 0`,
    },
  },
  { name: "Expansion" }
);

export default function Expansion({ title, className, children }) {
  const styles = useStyles();

  return (
    <ExpansionPanel className={classnames(styles.root, className)}>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        className={styles.header}
      >
        {title}
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className={styles.collapse}>
        {children}
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}
