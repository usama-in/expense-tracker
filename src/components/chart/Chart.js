import React from "react";
import './chart.css'
import ChartBar from "./ChartBar";

const Chart = (props) => {
    let dataPointValue = props.dataPoints.map(datapoint =>datapoint.value)
    let totalMaxValue =Math.max(...dataPointValue)
//   console.log(props.dataPoints)
  console.log(totalMaxValue)
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
        key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaxValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
