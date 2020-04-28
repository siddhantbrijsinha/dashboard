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
  ResponsiveContainer,
} from "recharts";
import { connect } from "react-redux";

import "./customChart.css";
import { Grid, Paper, Card } from "@material-ui/core";

const CustomChart = (props) => {
  const areaChart = () => {
    return (
      <ResponsiveContainer width='100%' aspect={4.0 / 2.0}>
        <AreaChart
          // width={300}
          // height={200}
          style={{ margin: "auto" }}
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
      </ResponsiveContainer>
    );
  };

  const barChart = () => {
    return (
      <ResponsiveContainer width='100%' aspect={4.0 / 2.0}>
        <BarChart /* width={300} height={200} */ style={{ margin: "auto" }} data={props.graphData}>
          <XAxis dataKey="month" />
          <YAxis />
          <Bar dataKey="salary" fill="#8884d8" />
          <Tooltip />
        </BarChart>
      </ResponsiveContainer>
    );
  };

  return (
    <Grid container spacing={2} className="parent-chart-div">
      <Grid item xs={12} md={6} lg={6} sm={12}>
        <Card className="top-card">Area Chart</Card>
        <Paper style={{marginTop: '10px'}}>
          {areaChart()}
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={6} sm={12}>
        <Card className="top-card">Bar Chart</Card>
        <Paper style={{marginTop: '10px'}}>
          {barChart()}
        </Paper>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  const dataManipulation = state.dataManipulation;
  return { graphData: dataManipulation.graphData || [] };
};

export default connect(mapStateToProps)(CustomChart);
