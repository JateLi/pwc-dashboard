import React, { useEffect, useState } from "react";
import { EcondbApi, SeriesCode } from "../pages";
import { calculateAverageNum } from "../utils/utils";
import { ChartDataType } from "./CPIUSChart";

type Props = {
  startDate: string;
  endDate: string;
};

function SENTUSLabel({ startDate, endDate }: Props) {
  const [sentusData, setSentusData] = useState<ChartDataType>();
  useEffect(() => {
    const dateRange = `from=${startDate}&to=${endDate}`;
    const api = `${EcondbApi}/${SeriesCode.sentus}/?${dateRange}&format=json`;
    const dataFetch = async () => {
      const data = await (await fetch(api)).json();
      const updateData = {
        labels: data.data.dates,
        chartData: data.data.values,
        title: `${data.ticker} - ${data.description}`,
      };
      setSentusData(updateData);
    };

    dataFetch();
  }, [endDate, startDate]);

  const averageValue = calculateAverageNum(sentusData?.chartData ?? []);

  return (
    <div className="w-2/3 pt-0">
      <p>{"Average US Sentiment Index (SENTUS)"}</p>
      <p
        className={`text-lg font-semibold ${
          averageValue > 0 ? "text-emerald-600" : "text-rose-700"
        }`}
      >
        {averageValue}
      </p>
    </div>
  );
}

export default SENTUSLabel;
