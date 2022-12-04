import React, { useEffect, useState } from "react";
import { EcondbApi, SeriesCode } from "../api";
import Chart from "./Chart/Chart";
import { ChartDataType } from "./CPIUSChart";

type Props = {
  startDate: string;
  endDate: string;
  scale?: number;
};

function CONFUSChart({ startDate, endDate, scale }: Props) {
  const [confusData, setConfusData] = useState<ChartDataType>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const dateRange = `from=${startDate}&to=${endDate}`;
    const confusApi = `${EcondbApi}/${SeriesCode.confus}/?${dateRange}&format=json`;
    setLoading(true);
    const dataFetch = async () => {
      const data = await (await fetch(confusApi)).json();
      const updateData = {
        labels: data.data.dates,
        chartData: data.data.values,
        title: `${data.ticker} - ${data.description}`,
      };
      setLoading(false);
      setConfusData(updateData);
    };

    dataFetch().catch((error) => console.log(error));
  }, [endDate, startDate]);

  return (
    <div>
      <Chart
        labels={confusData?.labels ?? []}
        chartData={confusData?.chartData ?? []}
        scale={scale}
        title={confusData?.title ?? ""}
        loading={loading}
      />
    </div>
  );
}

export default CONFUSChart;
