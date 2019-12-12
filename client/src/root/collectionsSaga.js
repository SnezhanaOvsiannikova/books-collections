import { put, call, takeLatest } from "redux-saga/effects";
import { fetchCollectionsData, fetchBooksData, editCollectionData } from "../api";
import {
  GET_COLLECTIONS_REQUEST,
  GET_COLLECTIONS_SUCCESS,
  GET_COLLECTIONS_FAILED,
  GET_BOOKS_REQUEST,
  GET_BOOKS_SUCCESS,
  GET_BOOKS_FAILED,
  EDIT_COLLECTION_REQUEST,
  EDIT_COLLECTION_SUCCESS,
  EDIT_COLLECTION_FAILED

} from "../actions/actionsType";

function* getCollections() {
  try {
    const collectionsData = yield call(fetchCollectionsData);
    yield put({ type: GET_COLLECTIONS_SUCCESS, payload: collectionsData });
  } catch (error) {
    yield put({ type: GET_COLLECTIONS_FAILED, payload: error });
  }
};

function* getBooks() {
  try {
    const booksData = yield call(fetchBooksData);
    yield put({ type: GET_BOOKS_SUCCESS, payload: booksData });
  } catch (error) {
    yield put({ type: GET_BOOKS_FAILED, payload: error });
  }
};

function* editCollection({ payload }) {
  const { id, collection } = payload;

  try {
    const newData = yield call(editCollectionData, { id, collection });
    yield put({ type: EDIT_COLLECTION_SUCCESS, payload: newData });
  } catch (error) {
    yield put({ type: EDIT_COLLECTION_FAILED, payload: error });
  }
};

export function* watchCollections() {
  yield takeLatest(GET_COLLECTIONS_REQUEST, getCollections);
  yield takeLatest(GET_BOOKS_REQUEST, getBooks);
  yield takeLatest(EDIT_COLLECTION_REQUEST, editCollection);
}
