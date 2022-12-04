import React, { useEffect, useState } from "react";
import { EcondbApi, SeriesCode } from "../api";
import Chart from "./Chart/Chart";
import { ChartDataType } from "./CPIUSChart";

type Props = {
  startDate: string;
  endDate: string;
};

function RETAUSChart({ startDate, endDate }: Props) {
  const [retausData, setRetausData] = useState<ChartDataType>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const dateRange = `from=${startDate}&to=${endDate}`;
    const retausApi = `${EcondbApi}/${SeriesCode.retaus}/?${dateRange}&format=json`;
    setLoading(true);
    const dataFetch = async () => {
      const data = await (await fetch(retausApi)).json();
      const updateData = {
        labels: data.data.dates,
        chartData: data.data.values,
        title: `${data.ticker} - ${data.description}`,
      };
      setLoading(false);
      setRetausData(updateData);
    };

    dataFetch().catch((error) => console.log(error));
  }, [endDate, startDate]);

  return (
    <div>
      <Chart
        labels={retausData?.labels ?? []}
        chartData={retausData?.chartData ?? []}
        scale={1}
        title={retausData?.title ?? ""}
        type={"bar"}
        loading={loading}
      />
    </div>
  );
}

export default RETAUSChart;
