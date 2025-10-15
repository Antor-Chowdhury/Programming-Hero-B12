import React from "react";
import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

const resultData = [
  { id: 1, name: "Ariana Khan", physics: 92, chemistry: 88, math: 95 },
  { id: 2, name: "David Lee", physics: 85, chemistry: 79, math: 91 },
  { id: 3, name: "Sadia Rahman", physics: 78, chemistry: 83, math: 80 },
  { id: 4, name: "Michael Smith", physics: 88, chemistry: 85, math: 89 },
  { id: 5, name: "Tanvir Hossain", physics: 95, chemistry: 90, math: 98 },
  { id: 6, name: "Sophia Williams", physics: 81, chemistry: 87, math: 84 },
  { id: 7, name: "Arif Chowdhury", physics: 74, chemistry: 69, math: 77 },
  { id: 8, name: "Nora Patel", physics: 90, chemistry: 88, math: 92 },
  { id: 9, name: "Ethan Johnson", physics: 67, chemistry: 72, math: 70 },
  { id: 10, name: "Mehedi Hasan", physics: 88, chemistry: 91, math: 85 },
];

const ResultsChart = () => {
  return (
    <div className="my-8">
      <LineChart width={800} height={500} data={resultData}>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Line dataKey="math"></Line>
        <Line dataKey="chemistry" stroke="red"></Line>
        <Line dataKey="physics" stroke="cyan"></Line>
        <Tooltip></Tooltip>
      </LineChart>
    </div>
  );
};

export default ResultsChart;
