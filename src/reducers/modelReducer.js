import commonActionTypes from "../actions/actionType/common";

const iState = { isOpen: false, modelAttributes: [], graphData: [] };

export default (state = iState, action) => {
  let Modelstate = { isOpen: false, modelAttributes: [] };

  switch (action.type) {
    case commonActionTypes.POPUP_OPEN:
      Modelstate.isOpen = action.isOpen;
      Modelstate.modelAttributes = action.payload;
      break
    case commonActionTypes.POPUP_CLOSE:
      Modelstate.isOpen = action.isOpen;
      Modelstate.modelAttributes = [];
      break
    default:
      break;
  }

  return { ...state, ...Modelstate }
};
