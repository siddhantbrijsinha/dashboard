import React from "react";
import CustomChart from "./Components/CustomChart";
import CustomTable from "./Components/CustomTable";

import "./App.css";
import Modal from "./shared/Modal";
import { connect } from "react-redux";

const App = ({ isOpen }) => {
  return (
    <div className="App">
      {isOpen && <Modal />}
      <CustomChart />
      <CustomTable />
    </div>
  );
};
const mapStateToProps = ({ modal: { isOpen } }) => ({
  isOpen,
});

export default connect(mapStateToProps, null)(App);
