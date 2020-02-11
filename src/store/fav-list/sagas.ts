import { GET_FAV_LIST } from "./types";
import { getApi } from "../../utils/api";
import { call, put, takeLatest } from "redux-saga/effects";
import { receiveFavList, receiveFavListError } from "./actions";

function* _getFavList() {
  const { data, status } = yield call(getApi, {
    url: "/data/fav-list.json"
  });
  status === 200
    ? yield put(receiveFavList(data))
    : yield put(receiveFavListError({}));
}

export function* getFavListSaga() {
  yield takeLatest(GET_FAV_LIST, _getFavList);
}
