import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Card } from "antd";

ChartJS.register(ArcElement, Tooltip, Legend);

const RevenuChart = () => {
  const data = {
    labels: ["Offline", "Online", "Trade"],
    datasets: [
      {
        label: "Revenue",
        borderWidth: [3, 6, 9],
        data: [200, 150, 102], // Example data
        backgroundColor: [
          "rgba(54, 162, 235, 1)", // Offline
          "rgba(255, 159, 64, 1)", // Online
          "rgba(255, 99, 132, 1)", // Trade
        ],
        hoverOffset: [2, 6, 8],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "black", // Legend text color
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.label || "";
            if (label) {
              label += ": ";
            }
            if (context.parsed !== null) {
              label += new Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: "INR",
              }).format(context.parsed);
            }
            return label;
          },
        },
      },
    },
  };

  const totalRevenue = data.datasets[0].data.reduce((a, b) => a + b, 0);

  return (
    <div className="revenuchart">
      <h2 className="text-2xl font-bold">Revenue breakup</h2>
      <div className="relative">
        <Doughnut data={data} options={options} />
        <div className="totalRevenue-text">
          {new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
          }).format(totalRevenue)}
        </div>
      </div>
    </div>
  );
};

export default RevenuChart;
