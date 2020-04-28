import HomeActionTypes from "./actionType/common";

export const popUpOpen = (modelAttributes) => (dispatch) => {
  dispatch({
    type: HomeActionTypes.POPUP_OPEN,
    payload: modelAttributes,
    isOpen: true
  });
};

export const popUpClose = () => (dispatch) => {
  dispatch({
    type: HomeActionTypes.POPUP_CLOSE,
    payload: [],
    isOpen: false
  });
};

export const resetSession = () => (dispatch) => {
  dispatch({
    type: HomeActionTypes.RESET_SESSION,
  });
};
