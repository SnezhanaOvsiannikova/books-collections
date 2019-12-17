import {
  GET_COLLECTIONS_REQUEST,
  GET_BOOKS_REQUEST,
  ADD_NEW_COLLECTION_REQUEST,
  EDIT_COLLECTION_REQUEST,
  DELETE_COLLECTION_REQUEST,
  ADD_NEW_BOOK_TO_COLLECTION_REQUEST,
  DELETE_BOOK_FROM_COLLECTION_REQUEST
} from "./actionsType";

export const getCollections = () => ({
  type: GET_COLLECTIONS_REQUEST
});

export const getBooks = () => ({
  type: GET_BOOKS_REQUEST
});

export const addNewCollection = collection => ({
  type: ADD_NEW_COLLECTION_REQUEST,
  payload: { collection }
});

export const deleteCollection = id => ({
  type: DELETE_COLLECTION_REQUEST,
  payload: { id }
});

export const editCollection = (id, collection) => ({
  type: EDIT_COLLECTION_REQUEST,
  payload: { id, collection }
});

export const addBookToCollection = (collectionId, bookId) => ({
  type: ADD_NEW_BOOK_TO_COLLECTION_REQUEST,
  payload: { collectionId, bookId }
});

export const deleteBookFromCollection = (collectionId, bookId) => ({
  type: DELETE_BOOK_FROM_COLLECTION_REQUEST,
  payload: { collectionId, bookId }
});
