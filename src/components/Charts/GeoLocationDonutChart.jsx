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
  { name: "North Central", value: 23.2 },
  { name: "North East", value: 12.87 },
  { name: "North West", value: 13.54 },
  { name: "South East", value: 11.96 },
  { name: "South South", value: 12.99 },
  { name: "South West", value: 25.44 },
];

// Updated colors for each region
const COLORS = [
  "#808080", // NC
  "#F0E199", // NE
  "#F5C4AF", // NW
  "#A1343C", // SE
  "#DE6A73", // SS
  "#E04403", // SW
];

const GeoLocationDonutChart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60} // Inner radius for donut effect
          outerRadius={100}
          dataKey="value"
          isAnimationActive={true}
          label={({ value }) => `${value}%`} // Show label with percentage
          labelLine={true} // Hide label line
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip formatter={(value) => `${value}%`} />
        <Legend
          verticalAlign="middle"
          layout="vertical"
          align="right" // Move legend to the right side
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default GeoLocationDonutChart;
