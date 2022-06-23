import {
  GET_ALL_POST,
  GET_POST,
  GET_POST_DETAIL,
  SEARCH_POST,
} from "../constants/Constants";

const initialState = {
  postArr: [],
  postPerPage: [],
  postSearch: [],
  postDetail: {},
};

export const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_POST:
      return { ...state, postSearch: action.value };
    case GET_ALL_POST:
      return { ...state, postArr: action.data };
    case GET_POST:
      return { ...state, postPerPage: action.data, postSearch: action.data };
    case GET_POST_DETAIL:
      return { ...state, postDetail: action.data };
    default:
      return state;
  }
};
