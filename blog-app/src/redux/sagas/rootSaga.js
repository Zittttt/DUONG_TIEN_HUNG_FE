import { all, call, delay, put, takeLatest } from "redux-saga/effects";
import { postServices } from "../../services/baseServices";
import { http } from "../../util/config";
import {
  DISPLAY_LOADING,
  GET_COMMENT,
  GET_POST,
  GET_POST_API,
  GET_POST_DETAIL,
  GET_POST_DETAIL_API,
  GET_USER,
  GET_USER_API,
  HIDE_LOADING,
} from "../constants/Constants";
import { postSaga } from "./post";
import { userSaga } from "./user";

export function* rootSaga() {
  yield all([postSaga(), userSaga()]);
}
