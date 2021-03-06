import React from "react";
import AreaChart from "../../components/AreaChart/AreaChart";
import Chart from "../../components/Chart/Chart";
import BarChart from "../../components/BarChart/BarChart";

const areaChartData = [
  { month: 0, count: 1 },
  { month: 1, count: 1 },
  { month: 7, count: 2 },
  { month: 8, count: 4 },
  { month: 20, count: 2 },
];

const mainChartData = [
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

export default function GuideCharts() {
  return (
    <div style={{ width: "100%" }}>
      <Chart data={mainChartData} />
      <AreaChart data={areaChartData} />
      <AreaChart data={areaChartData} type="curved" />
      <BarChart data={areaChartData} />
    </div>
  );
}
