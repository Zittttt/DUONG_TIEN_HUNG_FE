import { DISPLAY_LOADING, HIDE_LOADING } from "../constants/Constants";

const initialState = {
  loadingStatus: false,
};

export const LoadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_LOADING:
      return { ...state, loadingStatus: true };
    case HIDE_LOADING:
      return { ...state, loadingStatus: false };
    default:
      return state;
  }
};
