import React, { useEffect, useState } from "react";
import { EcondbApi, SeriesCode } from "../api";
import Chart from "./Chart/Chart";

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
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const dateRange = `from=${startDate}&to=${endDate}`;
    const cpiusApi = `${EcondbApi}/${SeriesCode.cpius}/?${dateRange}&format=json`;
    setLoading(true);
    const dataFetch = async () => {
      const data = await (await fetch(cpiusApi)).json();
      const updateData = {
        labels: data.data.dates,
        chartData: data.data.values,
        title: `${data.ticker} - ${data.description}`,
      };
      setLoading(false);
      setCpiusData(updateData);
    };

    dataFetch().catch((error) => console.log(error));
  }, [endDate, startDate]);

  return (
    <div>
      <Chart
        labels={cpiusData?.labels ?? []}
        chartData={cpiusData?.chartData ?? []}
        scale={scale}
        title={cpiusData?.title ?? ""}
        loading={loading}
      />
    </div>
  );
}

export default CPIUSChart;
