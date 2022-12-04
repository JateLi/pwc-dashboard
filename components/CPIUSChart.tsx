import React, { useEffect, useState } from "react";
import { api, SeriesCode } from "../pages";
import Chart from "./Chart";

export type ChartDataType = {
  labels: string[];
  chartData: number[];
  title: string;
};

type Props = {
  startDate: string;
  endDate: string;
  scale?: number;
};

function CPIUSChart({ startDate, endDate, scale }: Props) {
  const [cpiusData, setCpiusData] = useState<ChartDataType>();
  useEffect(() => {
    const dateRange = `from=${startDate}&to=${endDate}`;
    const cpiusApi = `${api}/${SeriesCode.cpius}/?${dateRange}&format=json`;
    const dataFetch = async () => {
      const data = await (await fetch(cpiusApi)).json();
      console.log(data);
      const updateData = {
        labels: data.data.dates,
        chartData: data.data.values,
        title: `${data.ticker} - ${data.description}`,
      };
      setCpiusData(updateData);
    };

    dataFetch();
  }, [endDate, startDate]);

  return (
    <div className="chart-container">
      <Chart
        labels={cpiusData?.labels ?? []}
        chartData={cpiusData?.chartData ?? []}
        scale={scale}
        title={cpiusData?.title ?? ""}
      />
    </div>
  );
}

export default CPIUSChart;
