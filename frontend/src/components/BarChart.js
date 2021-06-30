import React from 'react';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const barColors = ["#1f77b4", "#ff7f0e", "#2ca02c", '#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

function BarGraph({data}) {
  const graphData = data.map((value, index) =>  {
    return {
      name: `Point-${index+1}`,
      value: value
    }
  })
  return (
    <ResponsiveContainer width="100%" height={300}>
        <BarChart
          width={500}
          height={300}
          data={graphData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value">
            {
              graphData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={barColors[index % 7]} />
              ))
            }
          </Bar>
        </BarChart>
      </ResponsiveContainer>
  )
}

export default BarGraph;
