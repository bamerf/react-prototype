import React, { useState } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { colors } from "../../data/colors";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { AssignmentInd, Assignment } from "@material-ui/icons";
import { createBorderTop, rem, boxShadowRight } from "../../helpers/style";
import Button from "../Button/Button";
import Templates from "./Templates";
import Template from "./Template";
import { Add } from "@material-ui/icons";
import classnames from "classnames";

const myTemplates = [
  {
    name: "Bank Transfer",
    description: "Internal Bank Transfer Phishing Simulation",
  },
  { name: "Internal IT Support", description: "Internal IT Support Request" },
  {
    name: "Bank Transfer",
    description: "Internal Bank Transfer Phishing Simulation",
  },
];

const systemTemplates = [
  { name: "Xero Login", description: "Request to restet XERO login" },
  {
    name: "Google Password Expired",
    description: "Google Apps password has expired",
  },
  {
    name: "Netflix - Restart Your Memebership",
    description:
      "Netflix subscription has expired and a request to login and re-activate",
  },
  { name: "Xero Login", description: "Request to restet XERO login" },
  {
    name: "Google Password Expired",
    description: "Google Apps password has expired",
  },
  {
    name: "Netflix - Restart Your Memebership",
    description:
      "Netflix subscription has expired and a request to login and re-activate",
  },
  { name: "Xero Login", description: "Request to restet XERO login" },
  {
    name: "Google Password Expired",
    description: "Google Apps password has expired",
  },
  {
    name: "Netflix - Restart Your Memebership",
    description:
      "Netflix subscription has expired and a request to login and re-activate",
  },
];

const useStyles = makeStyles(
  (theme) => ({
    tab: {
      width: rem(200),
      height: rem(55),
      display: "inline-flex",
      backgroundColor: colors.backgroundGray,
      borderTop: `4px solid ${colors.backgroundGray}`,
      outline: "none",
      borderTopLeftRadius: rem(4),
      borderTopRightRadius: rem(4),
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
    icon: {
      paddingRight: rem(10),
    },
    button: {
      float: "right",
      marginTop: rem(10),
      marginRight: rem(15),
      backgroundColor: colors.backgroundGray,
      "& span": {
        color: `${colors.gray3} !important`,
      },
    },
  }),
  { name: "ManageTemplates" }
);

export default function ManageTemplates() {
  const styles = useStyles();
  const [isSelected, setIsSelected] = useState("tab1");

  const getClass = (classname) => {
    if (classname === isSelected) return "selected";
  };

  return (
    <div>
      <Tabs>
        <TabList className={styles.tabList}>
          <Tab
            className={classnames(styles.tab, getClass("tab1"))}
            onClick={() => setIsSelected("tab1")}
          >
            <AssignmentInd className={styles.icon} />{" "}
            <Typography variant="body2">My templates</Typography>
          </Tab>
          <Tab
            className={classnames(styles.tab, getClass("tab2"))}
            onClick={() => setIsSelected("tab2")}
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
          <Templates>
            {myTemplates.map(({ name, description }, index) => {
              return (
                <Template name={name} description={description} key={index} />
              );
            })}
          </Templates>
        </TabPanel>
        <TabPanel>
          <Templates>
            {systemTemplates.map(({ name, description }, index) => {
              return (
                <Template
                  name={name}
                  description={description}
                  key={index}
                  kind="systemTemplate"
                />
              );
            })}
          </Templates>
        </TabPanel>
      </Tabs>
    </div>
  );
}
