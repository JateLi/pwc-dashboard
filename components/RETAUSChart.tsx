import React, { useEffect, useState } from "react";
import { api, SeriesCode } from "../pages";
import Chart from "./Chart";
import { ChartDataType } from "./CPIUSChart";

type Props = {
  startDate: string;
  endDate: string;
};

function RETAUSChart({ startDate, endDate }: Props) {
  const [retausData, setRetausData] = useState<ChartDataType>();
  useEffect(() => {
    const dateRange = `from=${startDate}&to=${endDate}`;
    const retausApi = `${api}/${SeriesCode.retaus}/?${dateRange}&format=json`;
    const dataFetch = async () => {
      const data = await (await fetch(retausApi)).json();
      const updateData = {
        labels: data.data.dates,
        chartData: data.data.values,
        title: `${data.ticker} - ${data.description}`,
      };
      setRetausData(updateData);
    };

    dataFetch();
  }, [endDate, startDate]);

  return (
    <div className="chart-container">
      <Chart
        labels={retausData?.labels ?? []}
        chartData={retausData?.chartData ?? []}
        scale={1}
        title={retausData?.title ?? ""}
        type={"vertical"}
      />
    </div>
  );
}

export default RETAUSChart;
