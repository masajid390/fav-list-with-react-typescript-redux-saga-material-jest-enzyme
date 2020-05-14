import { all, spawn, call } from "redux-saga/effects";
import { getFavListSaga } from "./fav-list/sagas";

export default function* sagas() {
  const sagas = [getFavListSaga];

  yield all(
    sagas.map((saga) =>
      spawn(function*() {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (e) {
            console.log(e);
          }
        }
      })
    )
  );
}
