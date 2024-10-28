import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Salary Accounts", value: 63.97 },
  { name: "Non Salary Accounts", value: 36.03 },
];

const COLORS = ["#e04403", "#f0a787"];

const GenderPieChart = () => {
  return (
    <ResponsiveContainer height={350}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          startAngle={90}
          endAngle={450}
          labelLine={true}
          label={({ value }) => ` ${value}%`}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          isAnimationActive={true}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip formatter={(value) => `${value}%`} />
        <Legend verticalAlign="bottom" layout="vertical" align="right" />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default GenderPieChart;
