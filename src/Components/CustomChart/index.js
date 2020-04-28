import React from "react";
import {
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  AreaChart,
  BarChart,
  Bar,
} from "recharts";
import { connect } from "react-redux";

import "./customChart.css";

const CustomChart = (props) => {
  const areaChart = () => {
    return (
      <AreaChart
        width={600}
        height={200}
        data={props.graphData}
        syncId="anyId"
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="salary"
          stroke="#8884d8"
          fill="#8884d8"
        />
      </AreaChart>
    );
  };

  const barChart = () => {
    return (
      <BarChart width={600} height={200} data={props.graphData}>
        <XAxis dataKey="month" />
        <YAxis />
        <Bar dataKey="salary" fill="#8884d8" />
        <Tooltip />
      </BarChart>
    );
  };

  return (
    <div className="parent-chart-div">
      <div>{areaChart()}</div>
      <div>{barChart()}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const dataManipulation = state.dataManipulation;
  return { graphData: dataManipulation.graphData || [] };
};

export default connect(mapStateToProps)(CustomChart);
