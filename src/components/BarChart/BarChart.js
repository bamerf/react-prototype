import React from "react";
import { Paper, makeStyles, useTheme, Typography } from "@material-ui/core";
import {
  BarChart as ReBarChart,
  ResponsiveContainer,
  Bar,
  YAxis,
  XAxis,
  CartesianGrid,
} from "recharts";
import { colors } from "../../data/colors";
import { rem, boxShadowOn } from "../../helpers/style";

const useStyles = makeStyles(
  (theme) => ({
    root: {
      width: "100%",
      height: rem(460),
      minHeight: rem(300),
      marginBottom: rem(41),
      boxShadow: boxShadowOn,
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: theme.typography.fontFamily,
      fontSize: 12,
    },
    legendParent: {
      display: "flex",
      alignItems: "center",
      position: "absolute",
      top: rem(30),
      right: rem(70),
    },
    legendIcon: {
      width: rem(18),
      height: rem(18),
      backgroundColor: theme.palette.primary.main,
      marginRight: rem(10),
    },
  }),
  { name: "AreaChart" }
);

export default function BarChart({ data }) {
  const styles = useStyles();
  const theme = useTheme();

  return (
    <Paper className={styles.root}>
      <ResponsiveContainer width={"90%"} height={"90%"}>
        <ReBarChart
          data={data}
          margin={{
            top: 60,
            right: 20,
            left: 0,
            bottom: 20,
          }}
        >
          <CartesianGrid vertical={false} stroke={colors.gray5} />
          <Bar
            dataKey="count"
            fill={theme.palette.primary.main}
            barSize={150}
          />
          <XAxis
            dataKey="month"
            unit=" Months"
            axisLine={false}
            tickLine={false}
            tickMargin={17}
            stroke={colors.gray4}
          />
          <YAxis
            dataKey="count"
            axisLine={false}
            tickLine={false}
            tickMargin={17}
            stroke={colors.gray4}
            domain={[0, "dataMax + 2"]}
          />
        </ReBarChart>
      </ResponsiveContainer>
      <div className={styles.legendParent}>
        <div className={styles.legendIcon} />
        <Typography variant="body2">Learner progress</Typography>
      </div>
    </Paper>
  );
}
