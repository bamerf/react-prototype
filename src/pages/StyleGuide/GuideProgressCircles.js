import React from "react";
import { makeStyles } from "@material-ui/core";
import TextCircle from "../../components/TextCircle/TextCircle";
import PercentCircle from "../../components/PercentCircle/PercentCircle";
import { rem } from "../../helpers/style";

const useStyles = makeStyles({
  root: {
    display: "flex",
    "&>div:not(:first-child)": {
      marginLeft: rem(50),
    },
  },
  textCircle: {
    "&>div:not(:first-child)": {
      marginTop: rem(20),
    },
  },
});

export default function GuideProgressCircles() {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <div className={styles.textCircle}>
        <TextCircle text={10} title="Normal" />
        <TextCircle text="Text" title="Completed" completed={true} />
      </div>
      <div>
        <PercentCircle percentage={70} title="Opened" dark />
      </div>
    </div>
  );
}
