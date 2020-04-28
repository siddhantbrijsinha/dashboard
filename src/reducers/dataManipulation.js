import commonActionTypes from "../actions/actionType/common";

export default (state = { graphData: [] }, action) => {

    let DataState = { graphData: [] }

    switch (action.type) {
        case commonActionTypes.DATA_ADDITION:
            if (state.graphData) {
                DataState.graphData = [...state.graphData, ...action.payload]
            } else {
                DataState.graphData = [...[action.payload]]
            }
            break
        case commonActionTypes.DATA_DELETION:
            if (state.graphData) {
                DataState.graphData = [...state.graphData.filter(data => action.id !== data.id)];
            }
            break;
        default:
            return state;
    }
    return { ...state, ...DataState }
};