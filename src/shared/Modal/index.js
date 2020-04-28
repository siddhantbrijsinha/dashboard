import React, { useState } from "react";
import "./style.css";
import { popUpClose } from "../../actions/common";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  Grid,
  TextField,
  Button,
  Select,
  FormControl,
  InputLabel,
} from "@material-ui/core";
import { dataAddition } from "../../actions/DataManipulation";
import { range } from "../../helper/common";

const PopUp = ({ dataAddition, popUpClose }) => {
  const [month, setMonth] = useState("");
  const [year, setYear] = useState(2020);

  const [salary, setSalary] = useState("");

  const handleOnButtonClick = () => {
    let timeData = `${month}-${year}`;

    dataAddition([{ salary, month: timeData }]);
  };

  const handleOnSalaryChange = (e) => {
    console.log(e.target.value);
    setSalary(e.target.value);
  };
  const handleOnYearChange = (e) => {
    console.log(e);
    setYear(e.target.value);
  };
  const handleOnMonthChange = (e) => {
    console.log(e);
    setMonth(e.target.value);
  };

  return (
    <div>
      <div className="jw-modal">
        <div
          className="jw-modal-body"
          style={{
            borderRadius: "9px",
          }}
        >
          <div className="title" style={{ background: "#f50057" }}>
            <h3 className="titleTagStyle">Salary Table</h3>
            <button onClick={() => popUpClose()} style={{ margin: "15px" }}>
              X
            </button>
          </div>
          <div>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormControl variant="outlined" style={{ width: "90%" }}>
                  <InputLabel id="demo-simple-select-outlined-label">
                    Select Month
                  </InputLabel>
                  <Select
                    variant="outlined"
                    native
                    onChange={handleOnMonthChange}
                    inputProps={{
                      name: "month",
                      id: "filled-age-native-simple",
                    }}
                  >
                    <option aria-label="None" value="" />
                    <option value={"January"}>January</option>
                    <option value={"February"}>February</option>
                    <option value={"March"}>March</option>
                    <option value={"April"}>April</option>
                    <option value={"May"}>May</option>
                    <option value={"June"}>June</option>
                    <option value={"July"}>July</option>
                    <option value={"August"}>August</option>
                    <option value={"September"}>September</option>
                    <option value={"October"}>October</option>
                    <option value={"November"}>November</option>
                    <option value={"December"}>December</option>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl variant="outlined" style={{ width: "90%" }}>
                  <InputLabel id="demo-simple-select-outlined-label">
                    Select Year
                  </InputLabel>
                  <Select
                    native
                    onChange={handleOnYearChange}
                    inputProps={{
                      name: "year",
                      id: "filled-age-native-simple",
                    }}
                  >
                    <option aria-label="None" value="" />
                    {range(1995, 2040).map((select) => (
                      <option value={select}>{select}</option>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  style={{ width: "90%" }}
                  value={salary}
                  id="salary"
                  label=" Enter Salary"
                  name="salary"
                  onChange={handleOnSalaryChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleOnButtonClick}
                >
                  Submit Salary
                </Button>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
      <div className="jw-modal-background"></div>
    </div>
  );
};

const mapStateToProps = ({ modal: { modelAttributes } }) => ({
  modelAttributes,
});

const mapDispatchToProps = (dispatch) => ({
  popUpClose: bindActionCreators(popUpClose, dispatch),
  dataAddition: bindActionCreators(dataAddition, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(PopUp);