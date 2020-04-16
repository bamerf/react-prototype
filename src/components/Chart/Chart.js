import React from "react";
import { makeStyles, useTheme, fade } from "@material-ui/core";
import {
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Bar,
  ComposedChart,
} from "recharts";
import { boxShadowOn, rem } from "../../helpers/style";
import { colors } from "../../data/colors";

const useStyles = makeStyles(
  () => ({
    chartContainer: {
      marginBottom: rem(41),
      width: "100%",
      height: rem(642),
      minHeight: rem(285),
      backgroundColor: colors.white,
      borderRadius: 4,
      boxShadow: boxShadowOn,
      overflow: "hidden",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Nunito",
      fontSize: 12,
    },
  }),
  { name: "Chart" }
);

export default function Chart() {
  const styles = useStyles();
  const theme = useTheme();
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

  return (
    <div className={styles.chartContainer}>
      <ResponsiveContainer width={"90%"} height={"90%"}>
        <ComposedChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid
            strokeDasharray="3 0"
            vertical={false}
            stroke={colors.gray5}
          />
          <XAxis
            dataKey="date"
            axisLine={false}
            tickLine={false}
            tickMargin={17}
            stroke={colors.gray4}
          />
          <YAxis
            yAxisId="left"
            axisLine={false}
            tickLine={false}
            tickMargin={32}
            unit="%"
            stroke={colors.gray4}
          />
          <YAxis
            yAxisId="right"
            hide="true"
            axisLine={false}
            tickLine={false}
            tickMargin={32}
            unit="%"
            stroke={colors.gray4}
          />
          <Legend verticalAlign="top" align="right" height={50} iconSize={20} />

          <Bar
            dataKey="Trained"
            label={{ fill: colors.white, fontSize: 13 }}
            stackId="a"
            barSize={80}
            fill={theme.palette.primary.main}
            yAxisId="left"
          />
          <Bar
            dataKey="Opened"
            label={{ fill: colors.gray3, fontSize: 13 }}
            stackId="a"
            fill={fade(theme.palette.primary.light, 0.5)}
            yAxisId="left"
          />
          <Bar
            dataKey="Sent"
            label={{ fill: colors.gray3, fontSize: 13 }}
            stackId="a"
            fill={colors.gray6}
            yAxisId="left"
          />
          <Line
            type="monotone"
            dataKey="Risk"
            stroke={colors.gray2}
            strokeWidth={2}
            activeDot={{ r: 6 }}
            dot={{ stroke: colors.black, strokeWidth: 2, r: 4 }}
            yAxisId="right"
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
