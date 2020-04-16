import React from "react";
import { makeStyles } from "@material-ui/core";
import CampaignActivity from "../CampaignActivity/CampaignActivity";
import Chart from "../Chart/Chart";
import AddCampaignCard from "../AddCampaign/AddCampaignCard";

const useStyles = makeStyles({
  campaignActivity: {
    "&:not(:last-child)": {
      marginBottom: 40,
    },
  },
});

export default function Campaigns() {
  const styles = useStyles();

  return (
    <div>
      <Chart />
      <CampaignActivity
        className={styles.campaignActivity}
        title="Dropbox - File shared"
        subject="Jonathan Horne - Dropbox shared file"
        fromAdress="Jonathan Horne"
        sendingGroup="Default (All users)"
        type="completed"
        dateCompleted={new Date()}
        percentCompleted={12}
        percentAtRisk={12}
        delivered={13}
        percentOpened={75}
        percentTrained={36}
      />
      <CampaignActivity
        className={styles.campaignActivity}
        title="Office 365 - Mailbox over quota"
        subject="Office 365 - Mailbox over quota"
        fromAdress="Microsoft <support@offic-email.com.au>"
        sendingGroup="Default (All users)"
        type="scheduled"
        dateScheduled={new Date()}
        clickLocation="Something"
        duration="All at once"
        enrolment="Active"
      />
      <AddCampaignCard className={styles.campaignActivity} />
    </div>
  );
}
