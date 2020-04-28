import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import CommonActionTypes from "../actions/actionType/common";
import modal from './modelReducer';
import dataManipulation from './dataManipulation';

const appReducer = combineReducers({
    modal,
    dataManipulation
});

const rootReducer = (state, action) => {
  if (action.type === CommonActionTypes.RESET_SESSION) {
    storage.removeItem("persist:root");
    localStorage.clear();
    state = {};
  }

  return appReducer(state, action);
};

export default rootReducer;
