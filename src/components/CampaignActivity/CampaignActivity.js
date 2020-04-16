import React from "react";
import { makeStyles } from "@material-ui/core";
import classnames from "classnames";
import CampaignActivityLeft from "./CampaignActivityLeft";
import CampaignActivityRight from "./CampaignActivityRight";
import { colors } from "../../data/colors";
import { createBemFn } from "../../helpers/bem";
import { boxShadowOn } from "../../helpers/style";

const bem = createBemFn("campaign-activity");

const useStyles = makeStyles(
  {
    root: {
      width: "100%",
      backgroundColor: colors.white,
      borderRadius: 4,
      boxShadow: boxShadowOn,
      overflow: "hidden",
      display: "flex",
    },
  },
  { name: "CampaignActivity" }
);

export default function CampaignActivity({ className, ...rest }) {
  const styles = useStyles();
  return (
    <div
      className={classnames(
        className,
        styles.root,
        bem(),
        bem(undefined, rest.type)
      )}
    >
      <CampaignActivityLeft {...rest} />
      <CampaignActivityRight {...rest} />
    </div>
  );
}
