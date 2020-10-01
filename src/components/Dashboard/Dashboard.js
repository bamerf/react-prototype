import React from "react";
import { makeStyles } from "@material-ui/core";
import CampaignActivity from "../CampaignActivity/CampaignActivity";
import Chart from "../Chart/Chart";
import AddItemCard from "../AddItem/AddItemCard";

const data = [
  {
    date: "01/07",
    Risk: 4,
    Done: 1,
    Pending: 1,
    Sent: 2,
  },
  {
    date: "02/06",
    Risk: 0,
    Done: 0,
    Pending: 2,
    Sent: 2,
  },
  {
    date: "06/09",
    Risk: 4,
    Done: 1,
    Pending: 1,
    Sent: 2,
  },
  {
    date: "12/09",
    Risk: 0,
    Done: 1,
    Pending: 2,
    Sent: 3,
  },
  {
    date: "04/10",
    Risk: 0,
    Done: 0,
    Pending: 1,
    Sent: 1,
  },
  {
    date: "07/11",
    Risk: 8,
    Done: 3,
    Pending: 3,
    Sent: 4,
  },
  {
    date: "31/01",
    Risk: 28,
    Done: 2,
    Pending: 2,
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
        title="Sample Test - Item Sent"
        subject="Foo Bar - Item Shared"
        fromAdress="foo@bar.com"
        sendingGroup="Default (All users)"
        type="completed"
        dateCompleted={new Date()}
        percentCompleted={12}
        percentAtRisk={12}
        delivered={13}
        percentPending={75}
        percentDone={36}
      />
      <CampaignActivity
        className={styles.campaignActivity}
        title="Sample Test II - Item Shared"
        subject="Brian Smith - Item Shared"
        fromAdress="Google <support@google.com>"
        sendingGroup="Default (All users)"
        type="scheduled"
        dateScheduled={new Date()}
        clickLocation="Something"
        duration="All at once"
        enrolment="Active"
      />
      <AddItemCard className={styles.campaignActivity} />
    </div>
  );
}
