import React from 'react';
import BarChart from "./BarChart";
import PieChart from "./PieChart";

function Chart({type, elements}) {

  return (
    type === "Bar" ?
      <BarChart data={elements} />
      : <PieChart data={elements} />
  )
}

export default Chart
