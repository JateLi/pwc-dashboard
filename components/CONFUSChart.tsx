import React, { useEffect, useState } from "react";
import { api, SeriesCode } from "../pages";
import Chart from "./Chart";
import { ChartDataType } from "./CPIUSChart";

type Props = {
  startDate: string;
  endDate: string;
  scale?: number;
};

function CONFUSChart({ startDate, endDate, scale }: Props) {
  const [confusData, setConfusData] = useState<ChartDataType>();
  useEffect(() => {
    const dateRange = `from=${startDate}&to=${endDate}`;
    const confusApi = `${api}/${SeriesCode.confus}/?${dateRange}&format=json`;
    const dataFetch = async () => {
      const data = await (await fetch(confusApi)).json();
      console.log(data);
      const updateData = {
        labels: data.data.dates,
        chartData: data.data.values,
        title: `${data.ticker} - ${data.description}`,
      };
      setConfusData(updateData);
    };

    dataFetch();
  }, [endDate, startDate]);

  return (
    <div className="chart-container">
      <Chart
        labels={confusData?.labels ?? []}
        chartData={confusData?.chartData ?? []}
        scale={scale}
        title={confusData?.title ?? ""}
      />
    </div>
  );
}

export default CONFUSChart;
