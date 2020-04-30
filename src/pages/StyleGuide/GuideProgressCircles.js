import React from "react";
import { makeStyles } from "@material-ui/core";
import TextCircle from "../../components/TextCircle/TextCircle";
import PercentCircle from "../../components/PercentCircle/PercentCircle";
import HalfCircle from "../../components/HalfCircle/HalfCircle";
import { rem } from "../../helpers/style";
import { colors } from "../../data/colors";

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
  progressCircles: {
    "&>div:not(:first-child)": {
      marginTop: rem(20),
    },
  },
  halfCircle: {
    height: rem(150),
    backgroundColor: colors.white,
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
      <div className={styles.progressCircles}>
        <PercentCircle percentage={20} title="Normal" />
        <PercentCircle percentage={50} title="White" white />
        <PercentCircle percentage={70} title="Light" light />
      </div>
      <div className={styles.halfCircle}>
        <HalfCircle percentage={25} title="Half Circle" />
      </div>
    </div>
  );
}
