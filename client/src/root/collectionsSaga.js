import { put, call, takeLatest } from "redux-saga/effects";
import {
  fetchCollectionsData,
  fetchBooksData,
  editCollectionData,
  addNewCollectionData,
  deleteCollectionData,
  addBookToCollectionData,
  addBookData,
  deleteBookData,
  deleteBookDataFromCollection,
  editBookData
} from "../api";
import {
  GET_COLLECTIONS_REQUEST,
  GET_COLLECTIONS_SUCCESS,
  GET_COLLECTIONS_FAILED,
  GET_BOOKS_REQUEST,
  GET_BOOKS_SUCCESS,
  GET_BOOKS_FAILED,
  EDIT_COLLECTION_REQUEST,
  EDIT_COLLECTION_SUCCESS,
  EDIT_COLLECTION_FAILED,
  ADD_NEW_COLLECTION_REQUEST,
  ADD_NEW_COLLECTION_SUCCESS,
  ADD_NEW_COLLECTION_FAILED,
  DELETE_COLLECTION_REQUEST,
  DELETE_COLLECTION_SUCCESS,
  DELETE_COLLECTION_FAILED,
  ADD_NEW_BOOK_TO_COLLECTION_REQUEST,
  ADD_NEW_BOOK_TO_COLLECTION_SUCCESS,
  ADD_NEW_BOOK_TO_COLLECTION_FAILED,
  ADD_NEW_BOOK_REQUEST,
  ADD_NEW_BOOK_SUCCESS,
  ADD_NEW_BOOK_FAILED,
  DELETE_BOOK_REQUEST,
  DELETE_BOOK_SUCCESS,
  DELETE_BOOK_FAILED,
  DELETE_BOOK_FROM_COLLECTION_REQUEST,
  DELETE_BOOK_FROM_COLLECTION_SUCCESS,
  DELETE_BOOK_FROM_COLLECTION_FAILED,
  EDIT_BOOK_REQUEST,
  EDIT_BOOK_SUCCESS,
  EDIT_BOOK_FAILED
} from "../actions/actionsType";

function* getCollections() {
  try {
    const collectionsData = yield call(fetchCollectionsData);
    yield put({ type: GET_COLLECTIONS_SUCCESS, payload: collectionsData });
  } catch (error) {
    yield put({ type: GET_COLLECTIONS_FAILED, payload: error });
  }
}

function* getBooks() {
  try {
    const booksData = yield call(fetchBooksData);
    yield put({ type: GET_BOOKS_SUCCESS, payload: booksData });
  } catch (error) {
    yield put({ type: GET_BOOKS_FAILED, payload: error });
  }
}

function* addNewCollection({ payload }) {
  const { collection } = payload;

  try {
    const newData = yield call(addNewCollectionData, { collection });
    yield put({ type: ADD_NEW_COLLECTION_SUCCESS, payload: newData });
  } catch (error) {
    yield put({ type: ADD_NEW_COLLECTION_FAILED, payload: error });
  }
}

function* editCollection({ payload }) {
  const { id, collection } = payload;

  try {
    const newData = yield call(editCollectionData, { id, collection });
    yield put({ type: EDIT_COLLECTION_SUCCESS, payload: newData });
  } catch (error) {
    yield put({ type: EDIT_COLLECTION_FAILED, payload: error });
  }
}

function* deleteCollection({ payload }) {
  const { id } = payload;

  try {
    yield call(deleteCollectionData, { id });
    yield put({ type: DELETE_COLLECTION_SUCCESS, payload: id });
  } catch (error) {
    yield put({ type: DELETE_COLLECTION_FAILED, payload: error });
  }
}

function* addBookToCollection({ payload }) {
  const { collectionId, bookId } = payload;

  try {
    yield call(addBookToCollectionData, { collectionId, bookId });
    yield put({
      type: ADD_NEW_BOOK_TO_COLLECTION_SUCCESS,
      payload: { collectionId, bookId }
    });
  } catch (error) {
    yield put({ type: ADD_NEW_BOOK_TO_COLLECTION_FAILED, payload: error });
  }
}

function* addBook({ payload }) {
  const { book } = payload;

  try {
    const newBook = yield call(addBookData, { book });
    yield put({ type: ADD_NEW_BOOK_SUCCESS, payload: { book: newBook } });
  } catch (error) {
    yield put({ type: ADD_NEW_BOOK_FAILED, payload: error });
  }
}

function* deleteBook({ payload }) {
  const { id } = payload;

  try {
    yield call(deleteBookData, { id });
    yield put({ type: DELETE_BOOK_SUCCESS, payload: { id } });
  } catch (error) {
    yield put({ type: DELETE_BOOK_FAILED, payload: error });
  }
}

function* deleteBookFromCollection({ payload }) {
  const { collectionId, bookId } = payload;

  try {
    yield call(deleteBookDataFromCollection, { collectionId, bookId });
    yield put({
      type: DELETE_BOOK_FROM_COLLECTION_SUCCESS,
      payload: { collectionId, bookId }
    });
  } catch (error) {
    yield put({ type: DELETE_BOOK_FROM_COLLECTION_FAILED, payload: error });
  }
}

function* editBook({ payload }) {
  const { id, book } = payload;

  try {
    const updatedBook = yield call(editBookData, { id, book });
    yield put({ type: EDIT_BOOK_SUCCESS, payload: updatedBook });
  } catch (error) {
    yield put({ type: EDIT_BOOK_FAILED, payload: error });
  }
}

export function* watchCollections() {
  yield takeLatest(GET_COLLECTIONS_REQUEST, getCollections);
  yield takeLatest(GET_BOOKS_REQUEST, getBooks);
  yield takeLatest(ADD_NEW_COLLECTION_REQUEST, addNewCollection);
  yield takeLatest(EDIT_COLLECTION_REQUEST, editCollection);
  yield takeLatest(DELETE_COLLECTION_REQUEST, deleteCollection);
  yield takeLatest(ADD_NEW_BOOK_TO_COLLECTION_REQUEST, addBookToCollection);
  yield takeLatest(ADD_NEW_BOOK_REQUEST, addBook);
  yield takeLatest(DELETE_BOOK_REQUEST, deleteBook);
  yield takeLatest(
    DELETE_BOOK_FROM_COLLECTION_REQUEST,
    deleteBookFromCollection
  );
  yield takeLatest(EDIT_BOOK_REQUEST, editBook);
}
