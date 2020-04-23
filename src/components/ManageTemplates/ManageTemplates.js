import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography } from "@material-ui/core";
import { colors } from "../../data/colors";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { AssignmentInd, Assignment } from "@material-ui/icons";
import { createBorderTop, rem, boxShadowRight } from "../../helpers/style";
import Button from "../Button/Button";
import { Add } from "@material-ui/icons";

const useStyles = makeStyles(
  (theme) => ({
    tab: {
      width: rem(200),
      height: rem(55),
      display: "inline-flex",
      backgroundColor: colors.backgroundGray,
      borderTop: `4px solid ${colors.backgroundGray}`,
      outline: "none",
      borderRadius: rem(4),
      borderBottom: "none",
      boxShadow: boxShadowRight,
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      userSelect: "none",
      "& p": {
        color: colors.gray3,
      },
      "& svg": {
        color: colors.gray3,
      },
      "&.selected": {
        backgroundColor: colors.white,
        borderTop: createBorderTop(theme),
        boxShadow: boxShadowRight,
        "& p": {
          color: colors.black,
        },
        "& svg": {
          color: theme.palette.primary.main,
        },
      },
    },
    contentContainer: {
      width: rem(900),
      height: rem(400),
      overflow: "auto",
    },
    contentHeader: {
      width: "100%",
      flexGrow: 1,
      height: rem(50),
      backgroundColor: colors.gray6,
      marginTop: rem(20),
    },
    icon: {
      paddingRight: rem(10),
    },
    button: {
      float: "right",
      marginTop: rem(10),
      backgroundColor: colors.backgroundGray,
    },
  }),
  { name: "ManageTemplates" }
);

export default function ManageTemplates() {
  const styles = useStyles();

  return (
    <div>
      <Tabs>
        <TabList className={styles.tabList}>
          <Tab
            className={styles.tab}
            onClick={(e) => e.target.classList.add("selected")}
          >
            <AssignmentInd className={styles.icon} />{" "}
            <Typography variant="body2">My templates</Typography>
          </Tab>
          <Tab
            className={styles.tab}
            onClick={(e) => e.target.classList.add("selected")}
          >
            <Assignment className={styles.icon} />{" "}
            <Typography variant="body2">System templates</Typography>
          </Tab>
          <Button
            kind="secondary"
            className={styles.button}
            startIcon={<Add />}
          >
            Create new teamplate
          </Button>
        </TabList>
        <TabPanel>
          <Paper
            className={styles.contentContainer}
            elevation={3}
            variant="outlines"
          >
            <div className={styles.contentHeader}></div>
            <h2>Any content 1</h2>
          </Paper>
        </TabPanel>
        <TabPanel>
          <Paper
            style={{ width: rem(900), height: rem(400) }}
            elevation={3}
            variant="outlines"
          >
            <h2>Any content 2</h2>
          </Paper>
        </TabPanel>
      </Tabs>
    </div>
  );
}
