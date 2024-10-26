import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Credit", amount: 17496 },
  { name: "Debit", amount: 24296 },
];

const AverageTransactionAmountBarChart = () => {
  // Formatter function to append "NGN" to the y-axis values
  const formatYAxisLabel = (value) => {
    return `NGN ${value.toLocaleString()}`; // Convert number to locale string and append "NGN"
  };

  return (
    <ResponsiveContainer width={200} height={400}>
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <YAxis tickFormatter={formatYAxisLabel} />{" "}
        {/* Use formatter for y-axis */}
        <Tooltip
          formatter={(value) => [`NGN ${value.toLocaleString()}`, "Amount"]}
        />{" "}
        <Bar dataKey="amount" fill="#e04403" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default AverageTransactionAmountBarChart;
