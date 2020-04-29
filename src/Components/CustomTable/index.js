import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  withStyles,
  IconButton,
  Grid,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { popUpOpen } from "../../actions/common";
import { connect } from "react-redux";
import "./customtable.css";

const CustomTable = (props) => {
  const handleOnAdd = () => {
    props.dispatch(popUpOpen({ title: "Add table" }));
  };

  return (
    <Grid container spacing={2} className="parent-table-div">
      <Grid item xs={12} style={{ padding: 0 }}>
        <TableContainer component={Paper}>
          <div className="table-header-style" component="span">
            <div className="headdingStyle">Salary Table</div>
            <div>
              <IconButton onClick={handleOnAdd}>
                <AddIcon />
              </IconButton>
            </div>
          </div>
          <Table
            stickyHeader
            className={props.classes.table}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell style={{ width: 20 }} variant="head" align="center">
                  No.
              </TableCell>
                <TableCell align="center">Month</TableCell>
                <TableCell align="center">Salary</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.graphData.map((row, index) => (
                <TableRow key={row.name}>
                  <TableCell key={index} style={{ width: 20 }} align="center">
                    {index + 1}
                  </TableCell>
                  <TableCell align="center">{`${row.month}`}</TableCell>
                  <TableCell align="center">{`Rs ${row.salary}`}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  const dataManipulation = state.dataManipulation;
  return { graphData: dataManipulation.graphData || [] };
};

export default connect(mapStateToProps)(withStyles()(CustomTable));
