import React, { useEffect, useState } from "react";
import { EcondbApi, SeriesCode } from "../pages";
import { calculateGrowthValue } from "../utils/utils";
import { ChartDataType } from "./CPIUSChart";

type Props = {
  startDate: string;
  endDate: string;
};

function POPUSLabel({ startDate, endDate }: Props) {
  const [popusData, setPopusData] = useState<ChartDataType>();
  useEffect(() => {
    const dateRange = `from=${startDate}&to=${endDate}`;
    const api = `${EcondbApi}/${SeriesCode.popus}/?${dateRange}&format=json`;
    const dataFetch = async () => {
      const data = await (await fetch(api)).json();
      const updateData = {
        labels: data.data.dates,
        chartData: data.data.values,
        title: `${data.ticker} - ${data.description}`,
      };
      setPopusData(updateData);
    };

    dataFetch();
  }, [endDate, startDate]);

  return (
    <div>
      <p>{"Population growth during the selected period (POPUS)"}</p>
      <p>{calculateGrowthValue(popusData?.chartData ?? [])}</p>
    </div>
  );
}

export default POPUSLabel;
