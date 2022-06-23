import { GET_USER } from "../constants/Constants";

const initialState = {
  userArr: [],
};

export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return { ...state, userArr: action.data };

    default:
      return state;
  }
};
