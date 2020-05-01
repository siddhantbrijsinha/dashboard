import React from "react";
import CustomChart from "./Components/CustomChart";
import CustomTable from "./Components/CustomTable";

import "./App.css";
import Modal from "./shared/Modal";
import { connect } from "react-redux";
import DashBoard from "./Components/DashBoard";
import CardContainer from "./Components/CardContainer";
import CustomDrawer from "./Components/CustomDrawer";

const App = ({ isOpen }) => {
  return (
    <div className="App">
    <CustomDrawer />
      {isOpen && <Modal />}
      <DashBoard />
      <CardContainer />
      <CustomChart />
      <CustomTable />
    </div>
  );
};
const mapStateToProps = ({ modal: { isOpen } }) => ({
  isOpen,
});

export default connect(mapStateToProps, null)(App);
