import React from "react";
import { makeStyles } from "@material-ui/core";
import CampaignActivity from "../CampaignActivity/CampaignActivity";
import Chart from "../Chart/Chart";
import AddCampaignCard from "../AddCampaign/AddCampaignCard";

const data = [
  {
    date: "01/07",
    Risk: 4,
    Trained: 1,
    Opened: 1,
    Sent: 2,
  },
  {
    date: "02/06",
    Risk: 0,
    Trained: 0,
    Opened: 2,
    Sent: 2,
  },
  {
    date: "06/09",
    Risk: 4,
    Trained: 1,
    Opened: 1,
    Sent: 2,
  },
  {
    date: "12/09",
    Risk: 0,
    Trained: 1,
    Opened: 2,
    Sent: 3,
  },
  {
    date: "04/10",
    Risk: 0,
    Trained: 0,
    Opened: 1,
    Sent: 1,
  },
  {
    date: "07/11",
    Risk: 8,
    Trained: 3,
    Opened: 3,
    Sent: 4,
  },
  {
    date: "31/01",
    Risk: 28,
    Trained: 2,
    Opened: 2,
    Sent: 4,
  },
];

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
      <Chart data={data} />
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
