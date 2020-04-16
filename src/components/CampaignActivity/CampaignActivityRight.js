import React from "react";
import { makeStyles, Typography, Divider, fade } from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";
import DescriptionIcon from "@material-ui/icons/Description";
import HelpIcon from "@material-ui/icons/Help";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import SendIcon from "@material-ui/icons/Send";
import Button from "../Button/Button";
import { colors } from "../../data/colors";
import { TextCircle } from "../TextCircle/TextCircle";
import { PercentCircle } from "../PercentCircle/PercentCircle";
import { TitleAndInfo } from "./TitleAndInfo";
import { LabelAndIcon } from "./LabelAndIcon";
import { rem } from "../../helpers/style";
import classname from "classnames";

const useStyles = makeStyles(
  (theme) => ({
    root: {
      padding: `${rem(24)} ${rem(24)} 0`,
      flex: 1,
    },
    top: {
      display: "flex",
      alignItems: "center",
      "& svg": {
        color: theme.palette.primary.main,
      },
    },
    phishingIcon: {
      marginRight: rem(16),
      fontSize: rem(26),
    },
    buttonIcon: {
      fontSize: rem(20),
    },
    title: {
      marginRight: rem(10),
      lineHeight: 1,
      fontWeight: 500,
    },
    previewButton: {
      marginLeft: "auto",
      marginRight: rem(12),
      //fontWeight: 600,
    },
    viewResultsButton: {},

    divider: {
      margin: `${rem(18)} 0`,
    },
    main: {
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
    },
    mainLeft: {
      marginRight: rem(22),
      marginBottom: rem(24),
      ".campaign-activity--scheduled &": {
        flex: 1,
      },
    },
    mainRight: {
      marginBottom: rem(24),
      ".campaign-activity--scheduled &": {
        flex: 1,
      },
    },
    mainRightCompletedContent: {
      display: "flex",
      "& > *:not(:last-child)": {
        marginRight: rem(20),
      },
    },
    bottomDivider: {
      marginBottom: rem(18),
    },
    bottom: {
      display: "flex",
      marginBottom: rem(24),
    },
    bottomTrackingStatus: {
      display: "flex",
      flexWrap: "wrap",
      "& > *:not(:last-child)": {
        marginRight: rem(16),
      },
    },
    trackingStatusIcon: {
      color: colors.gray5,
      fontSize: rem(18),
    },
    openIcon: {
      color: fade(colors.gray5, 0.5),
      fontSize: rem(18),
    },
    clickIcon: {
      color: theme.palette.primary.light,
      fontSize: rem(18),
    },
    attachmentIcon: {
      color: theme.palette.primary.main,
      fontSize: rem(18),
    },
    sendIcon: {
      fontSize: rem(18),
    },
    bottomButton: {
      fontSize: rem(13),
      marginLeft: "auto",
      "& svg": {
        color: theme.palette.primary.main,
      },
    },
  }),
  { name: "CampaignActivityRight" }
);

export default function CampaignActivityRight(props) {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <div className={styles.top}>
        {/* <PhishingIcon className={styles.phishingIcon} fontSize="large" /> */}
        <Typography variant="h5" className={styles.title}>
          {props.title}
        </Typography>
        <Button
          kind="secondary"
          className={classname(styles.previewButton)}
          startIcon={<VisibilityIcon />}
          size="small"
        >
          Preview
        </Button>
        {props.type === "completed" ? (
          <Button
            kind="secondary"
            className={classname(styles.text)}
            startIcon={<DescriptionIcon />}
            size="small"
          >
            View results
          </Button>
        ) : null}
      </div>
      <Divider className={styles.divider} />
      <div className={styles.main}>
        <div className={styles.mainLeft}>
          <TitleAndInfo title="Subject" info={props.subject} />
          <TitleAndInfo title="From address" info={props.fromAdress} />
          <TitleAndInfo title="Sending group" info={props.sendingGroup} />
        </div>
        <div className={styles.mainRight}>
          {props.type === "completed" ? (
            <div className={styles.mainRightCompletedContent}>
              <TextCircle text={props.delivered.toString()} title="Delivered" />
              <PercentCircle
                percentage={props.percentOpened}
                title="Opened"
                dark
              />
              <PercentCircle
                percentage={props.percentTrained}
                title="Trained"
                dark
              />
            </div>
          ) : (
            <>
              <TitleAndInfo title="Click location" info={props.clickLocation} />
              <TitleAndInfo title="Duration" info={props.duration} />
              <TitleAndInfo title="Enrolment" info={props.enrolment} />
            </>
          )}
        </div>
      </div>
      {props.type === "scheduled" && (
        <>
          <Divider className={styles.bottomDivider} />
          <div className={styles.bottom}>
            <div className={styles.bottomTrackingStatus}>
              <LabelAndIcon
                label="TrackingStatus"
                icon={<HelpIcon className={styles.trackingStatusIcon} />}
              />
              <LabelAndIcon
                label="Open"
                icon={<CheckCircleIcon className={styles.openIcon} />}
              />
              <LabelAndIcon
                label="Click"
                icon={<CheckCircleIcon className={styles.clickIcon} />}
              />
              <LabelAndIcon
                label="Attachment"
                icon={<CheckCircleIcon className={styles.attachmentIcon} />}
              />
            </div>
            <Button
              kind="secondary"
              className={styles.bottomButton}
              startIcon={<SendIcon className={styles.sendIcon} size="small" />}
            >
              Send test email
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
