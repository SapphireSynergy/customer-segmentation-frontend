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

const COLORS = ["#e04403", "#f0a787"]; // Female: #e04403, Male: #f0a787

const GenderPieChart = () => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          startAngle={90}
          endAngle={450}
          labelLine={true}
          label={({ value }) => ` ${value}%`}
          outerRadius={80} // Reduced radius for a smaller chart
          fill="#8884d8"
          dataKey="value"
          isAnimationActive={true}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip formatter={(value) => `${value}%`} />
        <Legend
          verticalAlign="bottom"
          layout="vertical"
          align="right" // Move legend to the right side
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default GenderPieChart;
