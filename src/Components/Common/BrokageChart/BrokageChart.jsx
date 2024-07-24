import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Card, Select } from "antd";

import { MdFilter } from "react-icons/md";
import { FaFilter } from "react-icons/fa6";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const BrokageChart = () => {
  const [selectedMonth, setSelectedMonth] = useState("Monthly");

  const allData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Offline orders",
        data: [0, 30, 50, 45, 60, 50, 55],
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        fill: true,
        tension: 0.5,
      },
      {
        label: "Online orders",
        data: [50, 45, 55, 10, 65, 60, 70],
        borderColor: "rgba(255, 159, 64, 1)",
        backgroundColor: "rgba(255, 159, 64, 0.2)",
        fill: true,
        tension: 0.2,
      },
    ],
  };

  const months = ["Days", "Monthly", "yearly"];
  // const monthOptions = months.map((month) => ({ value: month, label: month }));

  // const selectedIndex = months.indexOf(selectedMonth);

  // const filteredData = {
  //   labels: [selectedMonth],
  //   datasets: allData.datasets.map((dataset) => ({
  //     ...dataset,
  //     data: [dataset.data[selectedIndex]],
  //   })),
  // };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "A U M/brokerage gen",
        font: {
          size: 20,
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || "";
            if (label) {
              label += ": ";
            }
            if (context.parsed.y !== null) {
              label += new Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: "INR",
              }).format(context.parsed.y * 1000);
            }
            return label;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Orders",
          font: {
            size: 25,
          },
        },
      },
      x: {
        title: {
          display: true,
          text: "Month",
          font: {
            size: 25,
          },
        },
      },
    },
  };

  const handleMonthChange = (selectedOption) => {
    setSelectedMonth(selectedOption.value);
  };
  // console.log(monthOptions);
  return (
    <>
      <div className="filterSection">
        <div>
          <FaFilter />
        </div>
        <div className="flex whitespace-nowrap gap-3">
          <label className="text-xl">Filter By</label>
          <Select
            style={{ width: 100 }}
            value={selectedMonth}
            onChange={(val) => handleMonthChange(val)}
            options={months.map((month, index) => ({
              key: index,
              value: month,
              label: month,
            }))}
          />
        </div>
      </div>
      <Line data={allData} options={options} />
    </>
  );
};

export default BrokageChart;
