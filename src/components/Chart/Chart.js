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
      fontFamily:  "Roboto",
      fontSize: 14,
    },
    chartText: {
      fontSize: 14,
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
      risk: 4,
      trained: 1,
      opened: 1,
      sent: 2,
    },
    {
      date: "02/06",
      risk: 0,
      trained: 0,
      opened: 2,
      sent: 2,
    },
    {
      date: "06/09",
      risk: 4,
      trained: 1,
      opened: 1,
      sent: 2,
    },
    {
      date: "12/09",
      risk: 0,
      trained: 1,
      opened: 2,
      sent: 3,
    },
    {
      date: "04/10",
      risk: 0,
      trained: 0,
      opened: 1,
      sent: 1,
    },
    {
      date: "07/11",
      risk: 8,
      trained: 3,
      opened: 3,
      sent: 4,
    },
    {
      date: "31/01",
      risk: 28,
      trained: 2,
      opened: 2,
      sent: 4,
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
          <CartesianGrid strokeDasharray="3 0" vertical={false} />
          <XAxis
            dataKey="date"
            axisLine={false}
            tickLine={false}
            tickMargin={17}
          />
          <YAxis yAxisId="left" axisLine={false} tickLine={false} tickMargin={32} unit="%" />
          <YAxis yAxisId="right" hide="true" axisLine={false} tickLine={false} tickMargin={32} unit="%" />
          <Legend verticalAlign="top" align="right" height={50} iconSize={20} />

          <Bar
            dataKey="trained"
            label={{ fill: colors.white, fontSize: 15 }}
            stackId="a"
            barSize={80}
            fill={theme.palette.primary.main}
            yAxisId="left"
          />
          <Bar
            dataKey="opened"
            label={{ fill: colors.gray3, fontSize: 15 }}
            stackId="a"
            fill={fade(theme.palette.primary.light, 0.5)}
            yAxisId="left"
          />
          <Bar
            dataKey="sent"
            label={{ fill: colors.gray3, fontSize: 15 }}
            stackId="a"
            fill={colors.gray6}
            yAxisId="left"
          />
          <Line
            type="monotone"
            dataKey="risk"
            stroke={colors.gray3}
            strokeWidth={3}
            activeDot={{ r: 6 }}
            dot={{ stroke: colors.black, strokeWidth: 2, r: 4 }}
            yAxisId="right"
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
