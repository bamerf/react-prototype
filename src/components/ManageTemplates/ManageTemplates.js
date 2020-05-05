import React from "react";
import { makeStyles, Typography, Paper, Divider } from "@material-ui/core";
import { colors } from "../../data/colors";
import { Assignment, Add } from "@material-ui/icons";
import { createBorderTop, rem, boxShadowOn } from "../../helpers/style";
import Button from "../Button/Button";
import DotMenu from "../DotMenu/DotMenu";
import SelectCampaignHeader from "../SelectCampaignTemplate/SelectCampaignHeader";
import TemplateContainer from "../SelectCampaignTemplate/TemplateContainer";
import TemplateItem from "../SelectCampaignTemplate/TemplateItem";
// import classnames from "classnames";

const myTemplates = [
  {
    title: "Bank Transfer",
    description: "Internal Bank Transfer Phishing Simulation",
    rating: 3,
  },
  {
    title: "Internal IT Support",
    description: "Internal IT Support Request",
    rating: 4,
  },
  {
    title: "Bank Transfer",
    description: "Internal Bank Transfer Phishing Simulation",
    rating: 1,
  },
];

const systemTemplates = [
  {
    title: "Xero Login",
    description: "Request to restet XERO login",
    rating: 2,
  },
  {
    title: "Google Password Expired",
    description: "Google Apps password has expired",
    rating: 4,
  },
  {
    title: "Netflix - Restart Your Memebership",
    description:
      "Netflix subscription has expired and a request to login and re-activate",
    rating: 1,
  },
  {
    title: "Xero Login",
    description: "Request to restet XERO login",
    rating: 3,
  },
  {
    title: "Google Password Expired",
    description: "Google Apps password has expired",
    rating: 3,
  },
  {
    title: "Netflix - Restart Your Memebership",
    description:
      "Netflix subscription has expired and a request to login and re-activate",
    rating: 1,
  },
  {
    title: "Xero Login",
    description: "Request to restet XERO login",
    rating: 4,
  },
  {
    title: "Google Password Expired",
    description: "Google Apps password has expired",
    rating: 0,
  },
  {
    title: "Netflix - Restart Your Memebership",
    description:
      "Netflix subscription has expired and a request to login and re-activate",
    rating: 2,
  },
];

const useStyles = makeStyles(
  (theme) => ({
    root: {
      backgroundColor: colors.white,
      borderTop: createBorderTop(theme),
      boxShadow: boxShadowOn,
      outline: "none",
      maxHeight: rem(700),
      overflowY: "scroll",
      "&::-webkit-scrollbar": {
        width: 0,
        height: 0,
      },
    },
    content: {
      padding: `${rem(20)} ${rem(30)}`,
    },
    header: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: `${rem(20)} ${rem(30)}`,
    },
    title: {
      display: "flex",
    },
    icon: {
      color: theme.palette.primary.main,
      marginRight: rem(24),
    },
    buttonIcon: {
      color: theme.palette.primary.main,
    },
    button: {},
  }),
  { name: "ManageTemplates" }
);

export default function ManageTemplates() {
  const styles = useStyles();

  return (
    <Paper className={styles.root} elevation={0} variant="outlines">
      <div className={styles.header}>
        <div className={styles.title}>
          <Assignment className={styles.icon} />
          <Typography variant="h4">Manage Templates</Typography>
        </div>
        <Button
          kind="secondary"
          className={styles.button}
          startIcon={<Add className={styles.buttonIcon} />}
        >
          Create new teamplate
        </Button>
      </div>
      <Divider />
      <div className={styles.content}>
        <SelectCampaignHeader />
        <TemplateContainer name="Your Templates">
          {myTemplates.map((template) => (
            <TemplateItem
              title={template.title}
              description={template.description}
              rating={template.rating}
            >
              <Button kind="secondary">Preview</Button>
              <DotMenu />
            </TemplateItem>
          ))}
        </TemplateContainer>
        <TemplateContainer name="System Templates">
          {systemTemplates.map((template) => (
            <TemplateItem
              title={template.title}
              description={template.description}
              rating={template.rating}
            >
              <Button kind="secondary">Preview</Button>
              <DotMenu />
            </TemplateItem>
          ))}
        </TemplateContainer>
      </div>
    </Paper>
  );
}
