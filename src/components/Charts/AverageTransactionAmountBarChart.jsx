import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Credit", amount: 17496 },
  { name: "Debit", amount: 24296 },
];

const AverageTransactionAmountBarChart = () => {
  const formatYAxisLabel = (value) => {
    return `NGN ${value.toLocaleString()}`;
  };

  return (
    <ResponsiveContainer height={400}>
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <YAxis tickFormatter={formatYAxisLabel} />{" "}
        <Tooltip
          formatter={(value) => [`NGN ${value.toLocaleString()}`, "Amount"]}
        />{" "}
        <Bar dataKey="amount" fill="#e04403" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default AverageTransactionAmountBarChart;
