import React from "react";

export default function ChartLayout({
  lineChart,
  barChart,
  heatMap,
}: {
  lineChart: React.ReactNode;
  barChart: React.ReactNode;
  heatMap: React.ReactNode;
}) {
  return (
    <div>
      <div>{lineChart}</div>
      <div>{barChart}</div>
      <div>{heatMap}</div>
    </div>
  );
}
