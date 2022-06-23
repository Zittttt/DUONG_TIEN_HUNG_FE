import { call, put, takeLatest } from "redux-saga/effects";
import { userService } from "../../services/baseServices";
import { GET_USER } from "../constants/Constants";

const getUserData = async () => {
  return await userService.getUser();
};

function* getUserApi(action) {
  try {
    let { data, status } = yield call(getUserData);

    yield put({
      type: GET_USER,
      data,
    });
  } catch (error) {
    console.log(error);
  }
}

export function* userSaga() {
  yield takeLatest(GET_USER, getUserApi);
}
