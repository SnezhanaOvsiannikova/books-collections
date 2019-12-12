import { all, fork } from "redux-saga/effects";
import { watchCollections } from "./collectionsSaga";

export default function* rootSaga() {
  yield all([fork(watchCollections)]);
}
