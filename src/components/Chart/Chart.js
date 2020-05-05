import React from "react";
import { makeStyles, useTheme, fade, Paper } from "@material-ui/core";
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
  (theme) => ({
    root: {
      marginBottom: rem(41),
      width: "100%",
      height: rem(642),
      minHeight: rem(285),
      boxShadow: boxShadowOn,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: theme.typography.fontFamily,
      fontSize: 12,
    },
  }),
  { name: "Chart" }
);

export default function Chart({ data }) {
  const styles = useStyles();
  const theme = useTheme();

  return (
    <Paper className={styles.root}>
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
            tickMargin={15}
            unit="%"
            stroke={colors.gray4}
          />
          <YAxis
            yAxisId="right"
            hide={true}
            axisLine={false}
            tickLine={false}
            tickMargin={32}
            unit="%"
            stroke={colors.gray4}
            domain={[0, "dataMax + 10"]}
          />
          <Legend verticalAlign="top" align="right" height={50} iconSize={20} />
          <Legend
            verticalAlign="top"
            align="right"
            height={50}
            iconSize={20}
            iconType="circle"
          />

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
    </Paper>
  );
}
