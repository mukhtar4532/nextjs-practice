import React from "react";

export default function ChartLayout({
  lineChart,
  barChart,
  heatMap,
  login,
}: {
  lineChart: React.ReactNode;
  barChart: React.ReactNode;
  heatMap: React.ReactNode;
  login: React.ReactNode;
}) {
  const isLogin = true;
  return (
    <>
      {isLogin ? (
        <div>
          <div>{lineChart}</div>
          <div>{barChart}</div>
          <div>{heatMap}</div>
        </div>
      ) : (
        <div>{login}</div>
      )}
    </>
  );
}
