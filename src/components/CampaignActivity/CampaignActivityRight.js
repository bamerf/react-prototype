import React from "react";
import { makeStyles, Typography, Divider, fade } from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";
import DescriptionIcon from "@material-ui/icons/Description";
import HelpIcon from "@material-ui/icons/Help";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import SendIcon from "@material-ui/icons/Send";
import { PhishingIcon } from "../../assets/svg/PhishingIcon";
import Button from "../Button/Button";
import { colors } from "../../data/colors";
import { TextCircle } from "../TextCircle/TextCircle";
import { PercentCircle } from "../PercentCircle/PercentCircle";
import { TitleAndInfo } from "./TitleAndInfo";
import { LabelAndIcon } from "./LabelAndIcon";
import { rem } from "../../helpers/style";

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
    },
    title: {
      marginRight: rem(10),
      lineHeight: 1,
    },
    previewButton: {
      marginLeft: "auto",
      marginRight: rem(12),
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
    },
    openIcon: {
      color: fade(colors.gray5, 0.5),
    },
    clickIcon: {
      color: theme.palette.primary.light,
    },
    attachmentIcon: {
      color: theme.palette.primary.main,
    },
    bottomButton: {
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
        <PhishingIcon className={styles.phishingIcon} fontSize="large" />
        <Typography variant="h4" className={styles.title}>
          {props.title}
        </Typography>
        <Button
          kind="secondary"
          className={styles.previewButton}
          startIcon={<VisibilityIcon />}
        >
          Preview
        </Button>
        {props.type === "completed" ? (
          <Button
            kind="secondary"
            className={styles.viewResultsButton}
            startIcon={<DescriptionIcon />}
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
              startIcon={<SendIcon />}
            >
              Send test email
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
