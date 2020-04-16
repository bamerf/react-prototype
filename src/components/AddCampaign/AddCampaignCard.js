import React from "react";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import classnames from "classnames";
import { colors } from "../../data/colors";
import AddIcon from "@material-ui/icons/Add";
import { rem } from "../../helpers/style";
import { boxShadowOn, boxShadowOff } from "../../helpers/style";
import Button from "../Button/Button";

const useStyles = makeStyles(
  {
    root: {
      width: "100%",
      height: rem(160),
      border: `1px solid ${colors.gray5}`,
      borderRadius: 4,
      boxShadow: boxShadowOn,
      overflow: "hidden",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 40,
    },
    button: {
      width: rem(250),
      height: rem(50),
      boxShadow: boxShadowOff,
      backgroundColor: colors.backgroundGray,
      "& span": {
        color: colors.gray4,
      },
      "&:hover": {
        boxShadow: boxShadowOn,
        backgroundColor: colors.backgroundGray,
      },
    },
    link: {
      textDecoration: "none",
    },
  },
  { name: "AddCampainCard" }
);

export default function AddCampaignCard({ className }) {
  const styles = useStyles();
  return (
    <div className={classnames(styles.root)}>
      <Link to="/phishing-simulations/add-campaign" className={styles.link}>
        <Button
          kind="primary"
          className={styles.button}
          startIcon={<AddIcon className={styles.icon} size="large" />}
        >
          Add Campaign
        </Button>
      </Link>
    </div>
  );
}
