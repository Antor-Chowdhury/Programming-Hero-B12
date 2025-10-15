import React, { use } from "react";
import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";

const MarksChart = ({ marksPromise }) => {
  const marksDataResponse = use(marksPromise);
  //   console.log(marksDataResponse);

  const marksData = marksDataResponse.data;
  //   console.log(marksData);

  //   data processing for the chart
  const marksChartData = marksData.map((studentData) => {
    const student = {
      id: studentData.id,
      name: studentData.name,
      physics: studentData.marks.physics,
      chemistry: studentData.marks.chemistry,
      math: studentData.marks.math,
    };

    const avg = (student.physics + student.chemistry + student.math) / 3;

    student.avg = avg;

    return student;
  });

  console.log(marksChartData);

  return (
    <div>
      <BarChart width={800} height={400} data={marksChartData}>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Bar dataKey="avg" fill="yellow"></Bar>
        <Bar dataKey="math" fill="cyan"></Bar>
        <Tooltip></Tooltip>
      </BarChart>
    </div>
  );
};

export default MarksChart;
