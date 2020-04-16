import React from "react";
import { makeStyles, Typography, fade } from "@material-ui/core";
import classnames from "classnames";
import { colors } from "../../data/colors";
import { TextCircle } from "../TextCircle/TextCircle";
import { PercentCircle } from "../PercentCircle/PercentCircle";
import { rem } from "../../helpers/style";

const useStyles = makeStyles(
  (theme) => ({
    root: {
      minHeight: "100%",
      padding: `${rem(28)} ${rem(50)}`,
      paddingTop: rem(35),
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    rootCompleted: {
      backgroundColor: theme.palette.primary.main,
      color: colors.white,
      "& $title": {
        marginBottom: rem(14),
      },
    },
    rootScheduled: {
      backgroundColor: fade(colors.black, 0.03),
      color: colors.gray1,
      "& $title": {
        marginBottom: rem(46),
      },
    },
    title: {
      textTransform: "capitalize",
      color: "inherit",
      fontWeight: 600,
      lineHeight: 1,
    },
    dateCompleted: {
      // color: "inherit",
      fontSize: rem(13),
      color : "rgb(255, 255, 255,0.7)",
      marginBottom: rem(20),
      lineHeight: 1,
    },
  }),
  { name: "CampaignActivityLeft" }
);

export default function CampaignActivityLeft(props) {
  const styles = useStyles();
  const isCompleted = props.type === "completed";
  return (
    <div
      className={classnames(
        styles.root,
        isCompleted ? styles.rootCompleted : styles.rootScheduled
      )}
    >
      <Typography variant="h5" className={styles.title}>
        {isCompleted ? "completed" : "scheduled"}
      </Typography>
      {props.type === "completed" && (
        <Typography variant="body2" className={styles.dateCompleted}>
          {/* TODO: calc from props.dateCompleted */}
          20/02/2020
        </Typography>
      )}
      {props.type === "completed" ? (
        <PercentCircle
          percentage={props.percentCompleted}
          /* TODO: calc "at risk" from props.percentCompleted */
          title="At risk"
        />
      ) : (
        // TODO: get "22nd" from props.dateScheduled
        /* TODO: calc "april 2020" from props.dateScheduled */
        <TextCircle text="22nd" title="April 2020" />
      )}
    </div>
  );
}
