import React from "react";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

type ChartProps = {
  title: string;
  labels: string[];
  chartData: number[];
  type?: string;
  scale?: number;
};

function Chart({
  title,
  labels = [],
  chartData = [],
  type = "line",
  scale = 1,
}: ChartProps) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: title,
        padding: {
          top: 10,
          bottom: 10,
        },
        font: {
          size: 18,
        },
      },
    },
  };
  const data = {
    labels,
    datasets: [
      {
        label: "default",
        data: chartData,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "scales",
        data: scale === 1 ? [] : chartData.map((x) => x * scale),
        borderColor: "rgba(38, 208, 235, 0.9)",
        backgroundColor: "rgba(38, 208, 235, 0.5)",
      },
    ],
  };

  return (
    <div>
      {type === "line" ? (
        <Line data={data} options={options} style={{ position: "relative" }} />
      ) : (
        <Bar options={options} data={data} />
      )}
    </div>
  );
}

export default Chart;
