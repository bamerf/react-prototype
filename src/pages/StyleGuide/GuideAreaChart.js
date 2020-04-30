import React from "react";
import AreaChart from "../../components/AreaChart/AreaChart";

const data = [
  { month: 0, count: 1 },
  { month: 1, count: 1 },
  { month: 7, count: 2 },
  { month: 8, count: 4 },
  { month: 20, count: 2 },
];

export default function GuideAreaChart() {
  return <AreaChart data={data} />;
}
