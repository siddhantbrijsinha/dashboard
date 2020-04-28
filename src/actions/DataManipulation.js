import CommonActionTypes from "./actionType/common";

export const dataAddition = (modelAttributes) => (dispatch) => {
    dispatch({
        type: CommonActionTypes.DATA_ADDITION,
        payload: modelAttributes,
    });
};

export const dataRemoval = (id) => (dispatch) => {
    dispatch({
        type: CommonActionTypes.DATA_ADDITION,
        id: id,
    });
};
