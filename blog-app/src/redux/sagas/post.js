import { call, delay, put, takeLatest } from "redux-saga/effects";
import { postServices } from "../../services/baseServices";
import {
  DISPLAY_LOADING,
  GET_ALL_POST,
  GET_ALL_POST_API,
  GET_POST,
  GET_POST_API,
  GET_POST_DETAIL,
  GET_POST_DETAIL_API,
  HIDE_LOADING,
} from "../constants/Constants";

const getPostData = async (page) => {
  return await postServices.getPost(page);
};

const getAllPostData = async (page) => {
  return await postServices.getAllPost(page);
};

const getPostDetailData = async (postId) => {
  return await postServices.getPostDetail(postId);
};

function* getAllPostApi(action) {
  try {
    yield put({
      type: DISPLAY_LOADING,
    });

    let { data, status } = yield call(getAllPostData);

    yield put({
      type: GET_ALL_POST,
      data,
    });
    yield delay(500);

    yield put({
      type: HIDE_LOADING,
    });
  } catch (error) {
    console.log(error);
  }
}

function* getPostApi(action) {
  try {
    yield put({
      type: DISPLAY_LOADING,
    });

    let { data, status } = yield call(getPostData, action.page);

    yield put({
      type: GET_POST,
      data,
    });

    yield delay(500);

    yield put({
      type: HIDE_LOADING,
    });
  } catch (error) {
    console.log(error);
  }
}

function* getPostDetailApi(action) {
  try {
    yield put({
      type: DISPLAY_LOADING,
    });

    let { data, status } = yield call(getPostDetailData, action.postId);
    yield delay(500);

    yield put({
      type: GET_POST_DETAIL,
      data,
    });

    yield put({
      type: HIDE_LOADING,
    });
  } catch (error) {
    console.log(error);
  }
}

export function* postSaga() {
  yield takeLatest(GET_POST_API, getPostApi);
  yield takeLatest(GET_POST_DETAIL_API, getPostDetailApi);
  yield takeLatest(GET_ALL_POST_API, getAllPostApi);
}
