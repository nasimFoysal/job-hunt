import React from "react";
import "./Statistics.css";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const assignmentMarks = [
  { x: 1, y: 60 },
  { x: 2, y: 49 },
  { x: 3, y: 43 },
  { x: 4, y: 28 },
  { x: 5, y: 60 },
  { x: 6, y: 50 },
  { x: 7, y: 50 },
  { x: 8, y: 60 },
];

const Statistics = () => {
  return (
   
    <div className="mt-4">
      <div className="fw-bold text-center">
      <h2 className="text-warning">Dissecting the Assignments</h2>
      </div>
      <ScatterChart
      className="mt-5 mx-auto"
        width={600}
        height={350}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid />
        <XAxis type="number" dataKey="x" name="Assignment" unit="" />
        <YAxis type="number" dataKey="y" name="Marks" unit="" />
        <ZAxis type="number" range={[60]} />
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
        <Legend />
        <Scatter
          name="Assignment Marks"
          data={assignmentMarks}
          fill="#8884d8"
          line
          shape="cross"
        />
      </ScatterChart>
    </div>
   
  );
};

export default Statistics;
